import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThreeDViewer from "@/components/ThreeDViewer";

export default function Home() {
  const [iso, setIso] = useState(0);
  const [shutter, setShutter] = useState(50);
  const [aperture, setAperture] = useState(50);
  const [arActive, setArActive] = useState(false);
  const [arStatus, setArStatus] = useState(null);
  const [capturing, setCapturing] = useState(false);
  const [flash, setFlash] = useState(false);
  const viewerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const modelUrl = location.state?.modelUrl;
  const topic = location.state?.topic;
  const shadowsEnabled = ["luces", "larga_exposicion", "nocturna", "alta_velocidad"].includes(topic);

  const handleCapture = async () => {
    if (capturing) return;
    setCapturing(true);
    setFlash(true);
    // Allow one frame to render before grabbing the buffer
    await new Promise((r) => setTimeout(r, 120));
    const image = viewerRef.current?.capture();
    setFlash(false);
    setCapturing(false);
    navigate("/Captura2", {
      state: {
        image,
        iso: getIsoDisplay(),
        shutter: getShutterDisplay(),
        aperture: getApertureDisplay(),
        topic,
      },
    });
  };

  const isoLabels = ["100", "400", "1600", "3200", "6400"];
  const shutterLabels = ["1/2000", "1/500", "1/100", "1/8", '2"'];
  const apertureLabels = ["f/2.8", "f/4", "f/5.6", "f/8", "f/16"];

  const isoValues = ["100", "400", "1600", "3200", "6400"];
  const shutterValues = ["1/2000", "1/500", "1/100", "1/8", '2"'];
  const apertureValues = ["f/2.8", "f/4", "f/5.6", "f/8", "f/16"];

  const getIsoDisplay = () => {
    const idx = Math.round((iso / 100) * (isoValues.length - 1));
    return isoValues[idx];
  };

  const getShutterDisplay = () => {
    const idx = Math.round((shutter / 100) * (shutterValues.length - 1));
    return shutterValues[idx];
  };

  const getApertureDisplay = () => {
    const idx = Math.round((aperture / 100) * (apertureValues.length - 1));
    return apertureValues[idx];
  };

  return (
    <main className="max-w-[392px] w-full mx-auto h-[100dvh] flex flex-col bg-[#1f2937] overflow-hidden relative">
      {/* Camera viewfinder area */}
      <div className="relative w-full flex-1 min-h-0 overflow-clip max-h-[55dvh]">
        {/* 3D Viewer / AR surface */}
        <ThreeDViewer
          ref={viewerRef}
          arActive={arActive}
          onStatusChange={setArStatus}
          onARExit={() => setArActive(false)}
          iso={iso}
          aperture={aperture}
          modelUrl={modelUrl}
          shadowsEnabled={shadowsEnabled}
        />
        {/* Rounded border overlay */}
        <div
          className="absolute rounded-[10px]"
          style={{
            top: "16px",
            left: "16px",
            right: "16px",
            bottom: "16px",
            boxShadow: "inset 0 0 0 1px rgba(0,211,243,0.60)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        {/* MODO RA button */}
        <button
          onClick={() => setArActive((v) => !v)}
          className={`absolute flex items-center py-1 px-3 rounded-full transition-all active:scale-95 ${
            arActive ? "bg-[#00d3f3]" : "bg-[#374151]"
          }`}
          style={{ top: "24px", left: "50%", transform: "translateX(-50%)", zIndex: 20 }}
        >
          <p
            className={`text-xs font-bold leading-4 tracking-[1.2px] whitespace-nowrap ${
              arActive ? "text-[#111827]" : "text-[#00d3f3]"
            }`}
            style={{ fontFamily: "inherit" }}
          >
            {arActive ? "RA ACTIVA" : "MODO RA"}
          </p>
        </button>
        {/* AR status indicator */}
        {arStatus && (
          <div
            className="absolute left-4 right-4 bg-[#111827]/80 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2"
            style={{ bottom: "24px", zIndex: 20 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00d3f3] animate-pulse" />
            <p className="text-xs text-[#00d3f3] font-medium">{arStatus}</p>
          </div>
        )}
        {/* Volver button */}
        <div className="absolute top-4 left-4" style={{ zIndex: 20 }}>
          <button onClick={() => navigate("/Modelo3D")} className="flex flex-row justify-start items-center gap-2 py-2 px-4 bg-[#374151] rounded-full">
            <div className="w-5 h-5 flex items-center justify-center relative overflow-clip shrink-0">
              <img className="w-[7px] h-[13px] absolute top-1 left-1 z-10" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/45eb07579_98d0ba261_15_2639.svg" alt="Vector" />
              <img className="w-[13px] h-0.5 absolute top-2.5 left-1 z-20" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/8b6a6e071_8e1f0c5d7_15_2640.svg" alt="Vector" />
            </div>
            <p className="text-base font-medium leading-6 text-center text-[#9ca3af] whitespace-nowrap">
              Volver
            </p>
          </button>
        </div>
        {/* Capture flash */}
        {flash && (
          <div className="absolute inset-0 bg-white pointer-events-none" style={{ zIndex: 40 }} />
        )}
      </div>

      {/* Controls panel */}
      <div className="shrink-0 mt-auto flex flex-col px-4 pt-2 pb-4 w-full bg-[#111827] rounded-[24px_24px_0px_0px] gap-1">
        {/* ISO Slider */}
        <SliderControl
          label="ISO"
          value={iso}
          onChange={setIso}
          display={getIsoDisplay()}
          labels={isoLabels}
        />

        {/* Shutter Slider */}
        <SliderControl
          label="OBTURACIÓN"
          value={shutter}
          onChange={setShutter}
          display={getShutterDisplay()}
          labels={shutterLabels}
          className="mt-0.5"
        />

        {/* Aperture Slider */}
        <SliderControl
          label="DIAFRAGMA"
          value={aperture}
          onChange={setAperture}
          display={getApertureDisplay()}
          labels={apertureLabels}
          className="mt-0.5"
        />

        {/* Shutter button */}
        <div className="flex flex-row justify-center items-center w-full pt-1 pb-2 mt-auto">
          <button
            onClick={handleCapture}
            disabled={capturing}
            className="flex items-center justify-center w-20 h-20 bg-[#04d9d9] rounded-full focus:outline-none active:scale-95 transition-transform disabled:opacity-60"
            style={{ boxShadow: "inset 0 0 0 4px #ffffff" }}
            aria-label="Take photo"
          >
            <div className="bg-[#9ca3af] rounded-full w-14 h-14" />
          </button>
        </div>
      </div>
    </main>
  );
}

function SliderControl({
  label,
  value,
  onChange,
  display,
  labels,
  className="",
}) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {/* Label row */}
      <div className="flex flex-row justify-between items-center pb-2 w-full">
        <div className="bg-[#04d9d9] rounded-[4px] px-3 py-0.5 flex items-center h-6">
          <p className="text-xs font-bold leading-4 text-[#111827] whitespace-nowrap">
            {label}
          </p>
        </div>
        <p className="text-lg font-bold leading-7 text-[#9ca3af]">{display}</p>
      </div>

      {/* Slider track */}
      <div className="relative w-full min-h-[27px] flex items-center">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 rounded-full overflow-clip bg-[#4b5563]">
          <div
            className="h-full bg-[#04d9d9] rounded-full"
            style={{ width: `${value}%` }}
          />
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-x-0 w-full opacity-0 cursor-pointer h-8"
          style={{ zIndex: 10 }}
        />
      </div>

      {/* Scale labels */}
      <div className="flex flex-row justify-between items-start w-full h-4">
        {labels.map((l) => (
          <p
            key={l}
            className="text-xs font-normal leading-4 text-[#6b7280] whitespace-nowrap"
          >
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}