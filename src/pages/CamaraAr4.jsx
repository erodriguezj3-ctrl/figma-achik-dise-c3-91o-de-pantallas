import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import ThreeDViewer from "@/components/ThreeDViewer";

const lightModes = [
  { key: "frontal", icon: "☀️", label: "Luz Principal" },
  { key: "fill", icon: "🔵", label: "Luz de Relleno" },
  { key: "back", icon: "🌅", label: "Contraluz" },
];

const isoLabels = ["100", "400", "1600", "3200", "6400"];
const shutterLabels = ["1/2000", "1/500", "1/100", "1/8", '2"'];
const apertureLabels = ["f/2.8", "f/4", "f/5.6", "f/8", "f/16"];

const isoValues = ["100", "400", "1600", "3200", "6400"];
const shutterValues = ["1/2000", "1/500", "1/100", "1/8", '2"'];
const apertureValues = ["f/2.8", "f/4", "f/5.6", "f/8", "f/16"];

export default function CamaraAr4() {
  const navigate = useNavigate();
  const location = useLocation();
  const modelUrl = location.state?.modelUrl;
  const topic = location.state?.topic;
  const shadowsEnabled = ["luces", "larga_exposicion", "nocturna", "alta_velocidad"].includes(topic);

  const viewerRef = useRef(null);
  const [arActive, setArActive] = useState(true);
  const [arStatus, setArStatus] = useState(null);
  const [lights, setLights] = useState({ frontal: true, fill: true, back: true });
  const [iso, setIso] = useState(0);
  const [shutter, setShutter] = useState(50);
  const [aperture, setAperture] = useState(50);
  const [capturing, setCapturing] = useState(false);
  const [flash, setFlash] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  const toggleLight = (key) =>
    setLights((prev) => ({ ...prev, [key]: !prev[key] }));

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

  const handleCapture = async () => {
    if (capturing) return;
    setCapturing(true);
    setFlash(true);
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

  const sliders = [
    { label: "ISO", value: getIsoDisplay(), percentage: iso, onChange: setIso, ticks: isoLabels },
    { label: "OBTURACIÓN", value: getShutterDisplay(), percentage: shutter, onChange: setShutter, ticks: shutterLabels },
    { label: "DIAFRAGMA", value: getApertureDisplay(), percentage: aperture, onChange: setAperture, ticks: apertureLabels },
  ];

  return (
    <main className="w-full max-w-[392px] mx-auto h-[100dvh] flex flex-col overflow-hidden bg-figma-accent relative">
      {/* Viewfinder Section */}
      <div className="relative w-full flex-1 min-h-0 bg-figma-surface overflow-clip z-0 max-h-[55dvh]">
        {/* AR 3D Viewer — rear camera + selected model */}
        <ThreeDViewer
          ref={viewerRef}
          arActive={arActive}
          onStatusChange={setArStatus}
          onARExit={() => setArActive(false)}
          modelUrl={modelUrl}
          lights={lights}
          iso={iso}
          shutter={shutter}
          aperture={aperture}
          shadowsEnabled={shadowsEnabled}
          topic={topic}
        />

        {/* Inner Cyan Border */}
        <div className="absolute inset-4 rounded-[10px] shadow-[inset_0_0_0_1px_rgba(0,211,243,0.60)] pointer-events-none z-10" />

        {/* Rule of Thirds Grid Overlay */}
        {showGrid && (
          <div className="absolute inset-4 rounded-[10px] pointer-events-none z-10 overflow-clip">
            <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/70" />
            <div className="absolute top-0 bottom-0 left-2/3 w-px bg-white/70" />
            <div className="absolute left-0 right-0 top-1/3 h-px bg-white/70" />
            <div className="absolute left-0 right-0 top-2/3 h-px bg-white/70" />
          </div>
        )}

        {/* Capture flash */}
        {flash && (
          <div className="absolute inset-0 bg-white pointer-events-none z-40" />
        )}

        {/* Top Controls - Volver */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-20 flex flex-row justify-start items-center gap-2 py-2 px-4 bg-figma-highlight rounded-[39311300px]"
        >
          <div className="shrink-0 grow-0 w-5 h-5 overflow-clip relative">
            <img className="w-[7px] h-[13px] absolute top-1 left-1 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/11fa27e31_858957c7b_2_1599.svg" alt="Back" />
            <img className="w-[13px] h-0.5 absolute top-2.5 left-1 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/3ef15a26c_a896ddef2_2_1600.svg" alt="Back Arrow" />
          </div>
          <p className="text-figma-16 font-medium font-heading leading-figma-24 text-center text-figma-secondary">
            Volver
          </p>
        </motion.button>

        {/* MODO RA toggle */}
        <button
          onClick={() => setArActive((v) => !v)}
          className={`absolute top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col justify-start items-start py-1 px-3 rounded-[39311300px] transition-colors ${
            arActive ? "bg-[#00d3f3]" : "bg-figma-surface-2"
          }`}
        >
          <p className={`text-figma-12 font-bold font-heading leading-figma-16 tracking-[1.2px] ${
            arActive ? "text-figma-accent" : "text-[#00d3f3]"
          }`}>
            {arActive ? "RA ACTIVA" : "MODO RA"}
          </p>
        </button>

        {/* AR status indicator */}
        {arStatus && (
          <div className="absolute left-4 right-4 z-20 bg-[#111827]/80 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2" style={{ bottom: "60px" }}>
            <span className="w-2 h-2 rounded-full bg-[#00d3f3] animate-pulse" />
            <p className="text-figma-12 font-medium text-[#00d3f3]">{arStatus}</p>
          </div>
        )}

        {/* Lighting Modes (Left) */}
        <div className="absolute top-[57%] left-3 z-20 flex flex-col justify-start items-start gap-2 w-[128px]">
          {lightModes.map((mode, i) => {
            const isOn = lights[mode.key];
            return (
              <motion.button
                key={i}
                whileTap={{ scale: 0.97 }}
                onClick={() => toggleLight(mode.key)}
                className={`flex flex-row justify-start items-center gap-1.5 pt-[8px] pr-[12px] pb-[4px] pl-[12px] w-full rounded-[14px] h-[30px] overflow-clip transition-colors ${
                  isOn
                    ? "bg-[#04d9d9]/20 shadow-[inset_0_0_0_1px_#04d9d9]"
                    : "bg-figma-accent-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.20)]"
                }`}
              >
                <p className={`text-figma-12 font-medium font-heading leading-figma-16 ${isOn ? "text-[#00d3f3]" : "text-figma-secondary"}`}>
                  {mode.icon}
                </p>
                <p className={`text-figma-12 font-medium font-heading leading-figma-16 ${isOn ? "text-[#00d3f3]" : "text-figma-secondary"}`}>
                  {mode.label}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Regla de Tercios (Bottom Right) */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowGrid((v) => !v)}
          className={`absolute bottom-4 right-3 z-20 flex flex-row justify-start items-center gap-1.5 py-2 px-3 rounded-[14px] w-[140px] h-[34px] transition-colors ${
            showGrid
              ? "bg-[#04d9d9] shadow-[inset_0_0_0_1px_#ffffff]"
              : "bg-figma-highlight-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.20)]"
          }`}
        >
          <div className="shrink-0 grow-0 w-4 h-4 overflow-clip relative">
            <img className="w-[13px] h-[13px] absolute top-0.5 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/c0333e52a_be42764b8_2_1588.svg" alt="Grid" />
            <img className="w-[13px] h-px absolute top-1.5 left-0.5 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7a9a6d5c6_d26bded4d_2_1589.svg" alt="Grid Line" />
            <img className="w-px h-[13px] absolute top-0.5 left-1.5 z-[4]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/72c20c3cb_3b4f65ed1_2_1591.svg" alt="Grid Line" />
            <img className="w-px h-[13px] absolute top-0.5 left-2.5 z-[5]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/cd738eae0_f70ac8401_2_1592.svg" alt="Grid Line" />
            <img className="w-[13px] h-px absolute top-2.5 left-0.5 z-[3]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/02ed739a9_e3d850614_2_1590.svg" alt="Grid Line" />
          </div>
          <p className={`text-figma-12 font-medium font-heading leading-figma-16 text-center ${showGrid ? "text-figma-secondary" : "text-figma-secondary/80"}`}>
            Regla de Tercios
          </p>
        </motion.button>
      </div>

      {/* Camera Controls Section */}
      <div className="shrink-0 mt-auto flex flex-col justify-start items-start p-4 w-full bg-[#0f172a] rounded-[24px_24px_0px_0px] z-10 relative gap-1">

        {/* Sliders */}
        {sliders.map((slider, index) => (
          <div key={index} className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center pb-1">
              <div className="py-1 px-3 bg-[#04d9d9] rounded-[4px]">
                <p className="text-figma-12 font-bold font-heading leading-figma-16 text-figma-text-2 uppercase">
                  {slider.label}
                </p>
              </div>
              <p className="text-figma-16 font-bold font-heading leading-figma-24 text-figma-secondary">
                {slider.value}
              </p>
            </div>

            <div className="w-full min-h-[22px] relative cursor-pointer">
              <div className="absolute inset-x-0 top-[9px] h-2 rounded-[39311300px] overflow-clip bg-[#4b5563]">
                <div className="h-full bg-[#04d9d9] rounded-full" style={{ width: `${slider.percentage}%` }} />
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={slider.percentage}
                onChange={(e) => slider.onChange(Number(e.target.value))}
                className="absolute inset-x-0 w-full opacity-0 cursor-pointer h-7"
                style={{ zIndex: 10 }}
              />
            </div>

            <div className="flex flex-row justify-between items-start w-full h-3">
              {slider.ticks.map((tick, i) => (
                <p key={i} className="text-figma-12 font-normal font-heading leading-figma-16 text-figma-text-1">
                  {tick}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Shutter Button */}
        <div className="flex flex-row justify-center items-center w-full pt-1 pb-2 mt-auto">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleCapture}
            disabled={capturing}
            className="flex flex-row justify-center items-center h-16 w-16 bg-[#04d9d9] rounded-[39311300px] shadow-[inset_0_0_0_4px_#ffffff] disabled:opacity-60"
          >
            <div className="bg-figma-secondary rounded-[39311300px] w-11 h-11" />
          </motion.button>
        </div>

      </div>
    </main>
  );
}