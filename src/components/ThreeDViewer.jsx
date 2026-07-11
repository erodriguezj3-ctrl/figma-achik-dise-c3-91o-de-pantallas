import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Default GLB model — overridden by the modelUrl prop when a model is selected.
const DEFAULT_MODEL_URL = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

const ThreeDViewer = forwardRef(function ThreeDViewer({ arActive, onStatusChange, onARExit, iso = 0, aperture = 50, modelUrl = DEFAULT_MODEL_URL, lights = { frontal: true, fill: false, back: true } }, ref) {
  const overlayRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const threeRef = useRef({});
  const streamRef = useRef(null);
  const hitSourceRef = useRef(null);
  const [error, setError] = useState(null);

  // ISO → brightness (higher ISO = brighter image): 0.6x → 1.6x
  const brightness = 0.6 + (iso / 100) * 1.0;
  // Aperture → background blur (lower f-stop = shallower depth of field): 10px → 0px
  const blur = (1 - aperture / 100) * 10;
  const overlayFilter = `brightness(${brightness.toFixed(2)})`;

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
    container.appendChild(renderer.domElement);

    // Lighting — frontal (key), fill (lateral), and back (rim/contraluz)
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.3);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xddeeff, 0.5);
    fillLight.position.set(-6, 3, 4);
    scene.add(fillLight);
    const rimLight = new THREE.DirectionalLight(0x00d3f3, 0.6);
    rimLight.position.set(-4, 2, -5);
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
    modelGroup.add(new THREE.Mesh(geo, mat));
    const wireGeo = new THREE.IcosahedronGeometry(1.03, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00d3f3,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    modelGroup.add(new THREE.Mesh(wireGeo, wireMat));
    scene.add(modelGroup);

    // Reticle for AR hit-testing (shows where the model will be placed)
    const reticle = new THREE.Mesh(
      new THREE.RingGeometry(0.08, 0.1, 32),
      new THREE.MeshBasicMaterial({ color: 0x00d3f3, transparent: true, opacity: 0.8 })
    );
    reticle.rotation.x = -Math.PI / 2;
    reticle.visible = false;
    scene.add(reticle);

    // Orbit controls for the non-AR view
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 2;
    controls.maxDistance = 8;

    threeRef.current = { scene, camera, renderer, modelGroup, controls, reticle, keyLight, fillLight, rimLight };

    // Render loop (works for both regular and WebXR)
    renderer.setAnimationLoop((time, frame) => {
      modelGroup.rotation.y += 0.004;
      if (controls.enabled) controls.update();

      // WebXR hit-testing: position the model on detected surfaces
      if (frame && hitSourceRef.current) {
        const refSpace = renderer.xr.getReferenceSpace();
        if (refSpace) {
          const hits = frame.getHitTestResults(hitSourceRef.current);
          if (hits.length > 0) {
            const pose = hits[0].getPose(refSpace);
            if (pose) {
              reticle.visible = true;
              reticle.position.copy(pose.transform.position);
              modelGroup.position.copy(pose.transform.position);
              modelGroup.position.y += 0.5;
            }
          } else {
            reticle.visible = false;
          }
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
      [geo, mat, wireGeo, wireMat].forEach((d) => d.dispose());
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

  // Expose capture() so the shutter button can grab a composite of the
  // camera feed + 3D render, with the current ISO/aperture filters baked in.
  useImperativeHandle(ref, () => ({
    capture: () => {
      const { renderer } = threeRef.current;
      const video = videoRef.current;
      const container = containerRef.current;
      if (!renderer || !container) return null;

      const w = container.clientWidth || 360;
      const h = container.clientHeight || 490;
      const out = document.createElement("canvas");
      out.width = w;
      out.height = h;
      const ctx = out.getContext("2d");

      // Background: live camera feed (blurred by aperture) or the scene color
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

      // Foreground: the 3D render (brightness from ISO), composited on top
      ctx.save();
      ctx.filter = `brightness(${brightness.toFixed(2)})`;
      ctx.drawImage(renderer.domElement, 0, 0, w, h);
      ctx.restore();

      return out.toDataURL("image/png");
    },
  }), [brightness, blur, arActive]);

  const startAR = async () => {
    const { renderer, modelGroup, controls, scene } = threeRef.current;
    if (!renderer) return;
    setError(null);
    onStatusChange?.("Solicitando acceso a cámara...");

    // 1. Request camera permission + rear camera
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

    // 2. Try WebXR immersive-ar (true AR with surface detection)
    if (navigator.xr) {
      const supported = await navigator.xr
        .isSessionSupported("immersive-ar")
        .catch(() => false);
      if (supported) {
        // Release getUserMedia — WebXR manages its own camera
        stream.getTracks().forEach((t) => t.stop());
        streamRef.current = null;

        try {
          const session = await navigator.xr.requestSession("immersive-ar", {
            optionalFeatures: ["local-floor", "dom-overlay", "hit-test"],
            domOverlay: { root: overlayRef.current },
          });
          session.addEventListener("end", () => {
            hitSourceRef.current = null;
            onStatusChange?.(null);
            onARExit?.();
          });
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
          controls.enabled = false;
          onStatusChange?.("RA WebXR activa — apunta a una superficie");
          return;
        } catch (err) {
          // Re-acquire camera for the overlay fallback
          try {
            stream = await navigator.mediaDevices.getUserMedia({
              video: { facingMode: "environment" },
              audio: false,
            });
            streamRef.current = stream;
          } catch {
            setError("Error al activar RA.");
            onStatusChange?.(null);
            return;
          }
        }
      }
    }

    // 3. Fallback: camera overlay (works on all devices)
    try {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      scene.background = null;
      renderer.setClearColor(0x000000, 0);
      onStatusChange?.("RA activa — mueve para explorar");
    } catch (err) {
      setError("Error al activar la cámara.");
      onStatusChange?.(null);
    }
  };

  const stopAR = async () => {
    const { renderer, modelGroup, controls, scene, reticle } = threeRef.current;

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
    }
    if (reticle) reticle.visible = false;
    if (controls) controls.enabled = true;
    onStatusChange?.(null);
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