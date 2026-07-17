import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Default GLB model — overridden by the modelUrl prop when a model is selected.
const DEFAULT_MODEL_URL = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

const ThreeDViewer = forwardRef(function ThreeDViewer({ arActive, onStatusChange, onARExit, iso = 0, shutter = 50, aperture = 50, modelUrl = DEFAULT_MODEL_URL, lights = { frontal: true, fill: false, back: true }, deepBokeh = false, shadowsEnabled = false, topic = "" }, ref) {
  const overlayRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const threeRef = useRef({});
  const streamRef = useRef(null);
  const hitSourceRef = useRef(null);
  const freezeRef = useRef(false);
  const arActiveRef = useRef(false);
  const transparentizedElsRef = useRef([]);
  const placedRef = useRef(false);
  const reticleVisibleRef = useRef(false);
  const pendingPoseRef = useRef(null);
  const [error, setError] = useState(null);
  const [placed, setPlaced] = useState(false);
  const [surfaceDetected, setSurfaceDetected] = useState(false);

  // ISO → digital gain (higher ISO = brighter): 0.8x → 1.8x
  const isoGain = 0.8 + (iso / 100) * 1.0;
  // Shutter → exposure time (slower shutter = more light, brighter).
  // Fast shutter (1/2000) darkens the scene considerably; slow shutter (2") overexposes.
  const shutterExposure = 0.35 + (shutter / 100) * 1.85;
  // Combined brightness from ISO gain × shutter exposure
  const brightness = isoGain * shutterExposure;
  // Aperture → background blur (lower f-stop = shallower depth of field).
  // deepBokeh mode intensifies the blur for the Bokeh lesson flow.
  const blur = (1 - aperture / 100) * (deepBokeh ? 24 : 10);
  const overlayFilter = `brightness(${brightness.toFixed(2)})`;

  // Alta Velocidad + fast shutter → freeze the model in the live preview.
  // (Motion streaks for long exposures are produced at capture time, not in the live view.)
  const isHighSpeed = topic === "alta_velocidad";
  const fastShutter = shutter <= 37;   // 1/2000 or 1/500
  const freezeModel = isHighSpeed && fastShutter;

  // ---- Three.js scene setup (runs once) ----
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getSize = () => ({
      w: container.clientWidth || 360,
      h: container.clientHeight || 490,
    });
    const { w, h } = getSize();

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe5e7eb);

    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    camera.position.set(0, 0.5, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.xr.enabled = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting — frontal (key), fill (lateral), and back (rim/contraluz)
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.3);
    keyLight.position.set(5, 6, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 30;
    keyLight.shadow.camera.left = -5;
    keyLight.shadow.camera.right = 5;
    keyLight.shadow.camera.top = 5;
    keyLight.shadow.camera.bottom = -5;
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xddeeff, 0.5);
    fillLight.position.set(-5, 4, 5);
    scene.add(fillLight);
    const rimLight = new THREE.DirectionalLight(0x00d3f3, 0.6);
    rimLight.position.set(0, 6, -6);
    scene.add(rimLight);

    // Default model (used until / unless the GLB loads)
    const modelGroup = new THREE.Group();
    const geo = new THREE.IcosahedronGeometry(1, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x04d9d9,
      metalness: 0.65,
      roughness: 0.25,
      flatShading: true,
    });
    const defaultMesh = new THREE.Mesh(geo, mat);
    defaultMesh.castShadow = true;
    modelGroup.add(defaultMesh);
    const wireGeo = new THREE.IcosahedronGeometry(1.03, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00d3f3,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    modelGroup.add(new THREE.Mesh(wireGeo, wireMat));
    scene.add(modelGroup);

    // Placement reticle — visual indicator shown on the detected surface
    // before the user taps to anchor the model to the floor/table.
    const reticle = new THREE.Group();
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.12, 0.15, 48),
      new THREE.MeshBasicMaterial({ color: 0x00d3f3, transparent: true, opacity: 0.9, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    reticle.add(ring);
    const dot = new THREE.Mesh(
      new THREE.CircleGeometry(0.04, 32),
      new THREE.MeshBasicMaterial({ color: 0x00d3f3, transparent: true, opacity: 0.9 })
    );
    dot.rotation.x = -Math.PI / 2;
    reticle.add(dot);
    reticle.visible = false;
    scene.add(reticle);

    // Ground plane that receives the model's shadow (synced to model position/scale each frame)
    const groundGeo = new THREE.PlaneGeometry(6, 6);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.4 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    ground.receiveShadow = true;
    scene.add(ground);

    // Orbit controls for the non-AR view
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 2;
    controls.maxDistance = 8;

    threeRef.current = { scene, camera, renderer, modelGroup, controls, reticle, ground, keyLight, fillLight, rimLight };

    // Render loop (works for both regular and WebXR)
    renderer.setAnimationLoop((time, frame) => {
      if (!freezeRef.current) modelGroup.rotation.y += 0.004;
      if (controls.enabled) controls.update();

      // Sync the shadow ground plane to the model's position/scale (AR-aware)
      const ms = modelGroup.scale.x;
      ground.position.set(modelGroup.position.x, modelGroup.position.y - ms, modelGroup.position.z);
      ground.scale.setScalar(ms);

      // Surface tracking (WebXR): move the placement reticle to the detected
      // surface. The model stays hidden until the user taps "Colocar".
      if (frame && hitSourceRef.current) {
        const refSpace = renderer.xr.getReferenceSpace();
        if (refSpace) {
          const hits = frame.getHitTestResults(hitSourceRef.current);
          if (hits.length > 0) {
            const pose = hits[0].getPose(refSpace);
            if (pose) {
              reticle.position.copy(pose.transform.position);
              reticle.visible = !placedRef.current;
              pendingPoseRef.current = new THREE.Vector3().copy(pose.transform.position);
              if (!reticleVisibleRef.current) {
                reticleVisibleRef.current = true;
                setSurfaceDetected(true);
              }
            }
          } else if (reticleVisibleRef.current) {
            reticle.visible = false;
            reticleVisibleRef.current = false;
            pendingPoseRef.current = null;
            setSurfaceDetected(false);
          }
        }
      } else if (arActiveRef.current && !placedRef.current && !pendingPoseRef.current) {
        // Fallback (no WebXR): place a center-screen reticle in front of the camera
        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        reticle.position.copy(camera.position).add(dir.multiplyScalar(2));
        reticle.position.y = camera.position.y - 0.6;
        reticle.visible = true;
        pendingPoseRef.current = reticle.position.clone();
        if (!reticleVisibleRef.current) {
          reticleVisibleRef.current = true;
          setSurfaceDetected(true);
        }
      }

      renderer.render(scene, camera);
    });

    const handleResize = () => {
      const s = getSize();
      camera.aspect = s.w / s.h;
      camera.updateProjectionMatrix();
      renderer.setSize(s.w, s.h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.setAnimationLoop(null);
      controls.dispose();
      [geo, mat, wireGeo, wireMat, groundGeo, groundMat].forEach((d) => d.dispose());
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // ---- Load the .glb model when modelUrl changes ----
  useEffect(() => {
    const { modelGroup } = threeRef.current;
    if (!modelGroup || !modelUrl) return;

    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        modelGroup.clear();
        const obj = gltf.scene;
        obj.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        modelGroup.add(obj);
        obj.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(obj);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const scale = 2 / maxDim;
          obj.scale.setScalar(scale);
          obj.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
        }
      },
      undefined,
      () => {
        /* keep existing mesh on error */
      }
    );
  }, [modelUrl]);

  // ---- AR mode toggle ----
  useEffect(() => {
    arActiveRef.current = arActive;
    if (arActive) startAR();
    else stopAR();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arActive]);

  // ---- Toggle studio lights (frontal / fill / back) ----
  useEffect(() => {
    const { keyLight, fillLight, rimLight } = threeRef.current;
    if (keyLight) keyLight.visible = lights.frontal;
    if (fillLight) fillLight.visible = lights.fill;
    if (rimLight) rimLight.visible = lights.back;
  }, [lights.frontal, lights.fill, lights.back]);

  // ---- Toggle shadow visibility (enabled from "Puntos de Luz Clave" onward) ----
  useEffect(() => {
    const { ground, keyLight } = threeRef.current;
    if (ground) ground.visible = shadowsEnabled;
    if (keyLight) keyLight.castShadow = shadowsEnabled;
  }, [shadowsEnabled]);

  // Keep the freeze flag in a ref so the render loop reads the latest value
  useEffect(() => {
    freezeRef.current = freezeModel;
  }, [freezeModel]);

  // Expose capture() so the shutter button can grab a composite of the
  // camera feed + 3D render, with the current ISO/aperture filters baked in.
  useImperativeHandle(ref, () => ({
    capture: async () => {
      const { renderer, scene, camera } = threeRef.current;
      const video = videoRef.current;
      const container = containerRef.current;
      if (!renderer || !container) return null;

      const w = container.clientWidth || 360;
      const h = container.clientHeight || 490;
      const out = document.createElement("canvas");
      out.width = w;
      out.height = h;
      const ctx = out.getContext("2d");

      // Exposure time from the shutter speed (slow shutter → long exposure)
      const shutterIdx = Math.round((shutter / 100) * 4);
      const exposureTimes = [0, 0, 0, 125, 2000]; // 1/2000, 1/500, 1/100, 1/8, 2"
      const exposureMs = exposureTimes[shutterIdx] || 0;

      const drawBackground = () => {
        if (arActive && video && video.videoWidth > 0) {
          ctx.save();
          ctx.filter = `blur(${blur.toFixed(1)}px) brightness(${brightness.toFixed(2)})`;
          const scale = Math.max(w / video.videoWidth, h / video.videoHeight);
          const vw = video.videoWidth * scale;
          const vh = video.videoHeight * scale;
          ctx.drawImage(video, (w - vw) / 2, (h - vh) / 2, vw, vh);
          ctx.restore();
        } else {
          ctx.fillStyle = "#e5e7eb";
          ctx.fillRect(0, 0, w, h);
        }
      };

      // Render the 3D scene to an offscreen WebGLRenderTarget so the pixels
      // are always readable — the XR session's canvas drawing buffer cannot
      // be read via drawImage. preserveDrawingBuffer is set on the renderer;
      // we temporarily disable XR to force a normal render to the target.
      const modelCanvas = document.createElement("canvas");
      modelCanvas.width = w;
      modelCanvas.height = h;
      const modelCtx = modelCanvas.getContext("2d");

      const drawModel = (alpha) => {
        const rt = new THREE.WebGLRenderTarget(w, h);
        const prevBg = scene.background;
        const prevClearAlpha = renderer.getClearAlpha();
        scene.background = null; // transparent → composites over the background
        renderer.setClearAlpha(0);
        const xrEnabled = renderer.xr.enabled;
        renderer.xr.enabled = false;
        renderer.setRenderTarget(rt);
        renderer.clear();
        renderer.render(scene, camera);
        renderer.setRenderTarget(null);
        renderer.xr.enabled = xrEnabled;
        scene.background = prevBg;
        renderer.setClearAlpha(prevClearAlpha);

        const pixels = new Uint8Array(w * h * 4);
        renderer.readRenderTargetPixels(rt, 0, 0, w, h, pixels);
        rt.dispose();
        const imageData = modelCtx.createImageData(w, h);
        // WebGL is bottom-up; flip vertically when copying.
        for (let y = 0; y < h; y++) {
          const src = (h - 1 - y) * w * 4;
          imageData.data.set(pixels.subarray(src, src + w * 4), y * w * 4);
        }
        modelCtx.putImageData(imageData, 0, 0);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.filter = `brightness(${brightness.toFixed(2)})`;
        ctx.drawImage(modelCanvas, 0, 0, w, h);
        ctx.restore();
      };

      if (exposureMs <= 0) {
        // Instant capture: single frame
        drawBackground();
        drawModel(1);
      } else {
        // Long exposure: accumulate model frames over the exposure time →
        // motion streak/trail.
        await new Promise((r) => requestAnimationFrame(r));
        drawBackground();
        drawModel(1);
        const frames = Math.max(2, Math.round(exposureMs / 60));
        const stepMs = exposureMs / frames;
        for (let i = 1; i < frames; i++) {
          await new Promise((r) => setTimeout(r, stepMs));
          drawModel(0.5);
        }
      }

      return out.toDataURL("image/png");
    },
  }), [brightness, blur, arActive, shutter]);

  const startAR = async () => {
    const { renderer, modelGroup, controls, scene } = threeRef.current;
    if (!renderer) return;
    setError(null);

    // 1. Detect WebXR immersive-ar support FIRST (explicit check). Do NOT
    //    request getUserMedia beforehand — acquiring the camera can block or
    //    conflict with the AR session. WebXR manages its own camera.
    const webxrSupported = navigator.xr
      ? await navigator.xr.isSessionSupported("immersive-ar").catch(() => false)
      : false;

    if (webxrSupported) {
      try {
        // Use the page's <main> as the DOM overlay root so the camera
        // controls (sliders, shutter) stay visible above the AR feed during
        // the native fullscreen session. Transparentize ancestor backgrounds
        // so the AR camera feed shows through the viewfinder area.
        const overlayRoot = overlayRef.current.closest("main") || overlayRef.current;
        const transparentized = [];
        let walker = overlayRef.current.parentElement;
        while (walker && walker !== overlayRoot) {
          transparentized.push(walker);
          walker = walker.parentElement;
        }
        if (overlayRoot !== overlayRef.current) transparentized.push(overlayRoot);
        transparentized.forEach((el) => {
          el.dataset.arPrevBg = el.style.background || "";
          el.style.background = "transparent";
        });
        transparentizedElsRef.current = transparentized;

        // Real planar tracking: immersive-ar anchored to the physical floor
        // (local-floor → origin at floor level). The model stays fixed in
        // world coordinates as the user walks or moves the phone.
        const session = await navigator.xr.requestSession("immersive-ar", {
          requiredFeatures: ["local-floor"],
          optionalFeatures: ["dom-overlay", "hit-test", "plane-detection"],
          domOverlay: { root: overlayRoot },
        });
        session.addEventListener("end", () => {
          hitSourceRef.current = null;
          onStatusChange?.(null);
          onARExit?.();
        });
        // Explicit local-floor reference space → floor-anchored world coords.
        renderer.xr.setReferenceSpaceType("local-floor");
        await renderer.xr.setSession(session);
        const refSpace = renderer.xr.getReferenceSpace();
        if (refSpace) {
          try {
            hitSourceRef.current = await session.requestHitTestSource({
              space: refSpace,
            });
          } catch {
            /* hit-testing optional */
          }
        }
        modelGroup.scale.set(0.3, 0.3, 0.3);
        modelGroup.visible = false;
        controls.enabled = false;
        placedRef.current = false;
        setPlaced(false);
        reticleVisibleRef.current = false;
        pendingPoseRef.current = null;
        setSurfaceDetected(false);
        onStatusChange?.("RA anclada al suelo (WebXR) — apunta a una superficie");
        return;
      } catch (err) {
        // WebXR session failed — restore backgrounds and fall through.
        transparentizedElsRef.current.forEach((el) => {
          el.style.background = el.dataset.arPrevBg || "";
          delete el.dataset.arPrevBg;
        });
        transparentizedElsRef.current = [];
      }
    }

    // 2. Fallback: camera overlay (no real surface tracking)
    onStatusChange?.("Solicitando acceso a cámara…");
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      streamRef.current = stream;
    } catch (err) {
      setError("No se pudo acceder a la cámara. Verifica los permisos.");
      onStatusChange?.(null);
      return;
    }

    try {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      scene.background = null;
      renderer.setClearColor(0x000000, 0);
      modelGroup.visible = false;
      modelGroup.scale.set(0.3, 0.3, 0.3);
      controls.enabled = false;
      placedRef.current = false;
      setPlaced(false);
      reticleVisibleRef.current = false;
      pendingPoseRef.current = null;
      setSurfaceDetected(false);
      onStatusChange?.("Sin WebXR: abre la app en pantalla completa en Chrome Android con ARCore");
    } catch (err) {
      setError("Error al activar la cámara.");
      onStatusChange?.(null);
    }
  };

  const stopAR = async () => {
    const { renderer, modelGroup, controls, scene, reticle } = threeRef.current;

    // Restore the original backgrounds that were transparentized for the
    // WebXR DOM overlay so the normal page layout looks right again.
    transparentizedElsRef.current.forEach((el) => {
      el.style.background = el.dataset.arPrevBg || "";
      delete el.dataset.arPrevBg;
    });
    transparentizedElsRef.current = [];

    if (hitSourceRef.current) {
      try {
        hitSourceRef.current.cancel();
      } catch {}
      hitSourceRef.current = null;
    }

    const session = renderer?.xr?.getSession();
    if (session) {
      try {
        await session.end();
      } catch {}
      renderer.xr.setSession(null);
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) videoRef.current.srcObject = null;

    if (scene) scene.background = new THREE.Color(0xe5e7eb);
    if (modelGroup) {
      modelGroup.position.set(0, 0, 0);
      modelGroup.scale.set(1, 1, 1);
      modelGroup.visible = true;
    }
    if (reticle) reticle.visible = false;
    if (controls) controls.enabled = true;
    placedRef.current = false;
    setPlaced(false);
    reticleVisibleRef.current = false;
    pendingPoseRef.current = null;
    setSurfaceDetected(false);
    onStatusChange?.(null);
  };

  // Anchor the model to the detected surface (tap-to-place flow).
  const handlePlace = () => {
    const { modelGroup, reticle } = threeRef.current;
    const pose = pendingPoseRef.current;
    if (!pose || !modelGroup) {
      onStatusChange?.("Buscando superficie…");
      return;
    }
    modelGroup.position.copy(pose);
    modelGroup.position.y += modelGroup.scale.x; // rest on the surface
    modelGroup.visible = true;
    placedRef.current = true;
    setPlaced(true);
    if (reticle) reticle.visible = false;
    onStatusChange?.("Modelo fijado a la superficie");
  };

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0"
      style={{ filter: overlayFilter, transition: "filter 0.2s ease-out" }}
    >
      {/* Camera feed background (visible in AR overlay mode) — blurred by aperture */}
      <video
        ref={videoRef}
        playsInline
        muted
        autoPlay
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          arActive ? "opacity-100" : "opacity-0"
        }`}
        style={{ filter: `blur(${blur.toFixed(1)}px)`, transition: "filter 0.2s ease-out" }}
      />
      {/* Three.js canvas */}
      <div ref={containerRef} className="absolute inset-0" />
      {/* Exit AR button (stays visible inside the WebXR dom-overlay) */}
      {arActive && (
        <button
          onClick={() => onARExit?.()}
          className="absolute top-4 right-4 bg-[#374151]/90 text-[#00d3f3] text-xs font-bold px-3 py-1.5 rounded-full active:scale-95 transition-transform"
          style={{ zIndex: 30 }}
        >
          ✕ Salir
        </button>
      )}
      {/* Tap-to-place: surface indicator + placement button */}
      {arActive && !placed && (
        <button
          onClick={handlePlace}
          disabled={!surfaceDetected}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold px-6 py-3 rounded-full shadow-lg active:scale-95 transition-transform disabled:opacity-50"
          style={{ zIndex: 30, backgroundColor: surfaceDetected ? "#04d9d9" : "#4b5563", color: surfaceDetected ? "#0b132b" : "#9ca3af" }}
        >
          {surfaceDetected ? "Colocar modelo" : "Buscando superficie…"}
        </button>
      )}
      {error && (
        <div
          className="absolute bottom-4 left-4 right-4 bg-red-600/90 text-white text-xs font-medium px-3 py-2 rounded-lg"
          style={{ zIndex: 30 }}
        >
          {error}
        </div>
      )}
    </div>
  );
});

export default ThreeDViewer;