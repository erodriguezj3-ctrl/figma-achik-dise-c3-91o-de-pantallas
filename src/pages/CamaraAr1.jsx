import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import ThreeDViewer from "@/components/ThreeDViewer";

export default function CamaraAr1() {
  const navigate = useNavigate();
  const location = useLocation();
  const modelUrl = location.state?.modelUrl;
  const topic = location.state?.topic;
  const shadowsEnabled = ["luces", "larga_exposicion", "nocturna", "alta_velocidad"].includes(topic);
  const [gridActive, setGridActive] = useState(true);
  const [iso, setIso] = useState(0);
  const [shutter, setShutter] = useState(50);
  const [aperture, setAperture] = useState(topic === "bokeh" ? 0 : 50);
  const [arActive, setArActive] = useState(true);
  const [arStatus, setArStatus] = useState(null);
  const [capturing, setCapturing] = useState(false);
  const [flash, setFlash] = useState(false);
  const viewerRef = useRef(null);

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
    <main className="h-[100dvh] w-full bg-figma-secondary flex justify-center overflow-hidden">
      <div className="w-full max-w-[392px] bg-figma-accent h-[100dvh] flex flex-col relative overflow-hidden shadow-2xl">

        {/* Viewfinder Area */}
        <div className="relative w-full flex-1 min-h-0 bg-figma-surface overflow-clip max-h-[55dvh]">
          {/* 3D Viewer / AR surface */}
          <ThreeDViewer
            ref={viewerRef}
            arActive={arActive}
            onStatusChange={setArStatus}
            onARExit={() => setArActive(false)}
            iso={iso}
            aperture={aperture}
            modelUrl={modelUrl}
            deepBokeh={topic === "bokeh"}
            shadowsEnabled={shadowsEnabled}
          />

          {/* Active Area Border */}
          <div className="absolute inset-4 rounded-[10px] shadow-[inset_0_0_0_1px_rgba(0,211,243,0.60)] pointer-events-none z-10" />

          {/* 3x3 Rule of Thirds Grid */}
          {gridActive && (
            <div className="absolute inset-4 rounded-[10px] pointer-events-none z-10 overflow-clip">
              <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/50" />
              <div className="absolute top-0 bottom-0 left-2/3 w-px bg-white/50" />
              <div className="absolute left-0 right-0 top-1/3 h-px bg-white/50" />
              <div className="absolute left-0 right-0 top-2/3 h-px bg-white/50" />
            </div>
          )}

          {/* Capture flash */}
          {flash && (
            <div className="absolute inset-0 bg-white pointer-events-none z-40" />
          )}

          {/* Top Bar Controls */}
          <div className="absolute top-4 left-4 z-20">
            <button onClick={() => navigate("/Modelo3D", { state: { topic } })} className="flex flex-row justify-start items-center gap-2 py-2 px-4 bg-figma-highlight rounded-[39311300px] hover:bg-white/20 transition-colors">
              <div className="shrink-0 grow-0 w-5 h-5 overflow-clip relative">
                <img className="w-[7px] h-[13px] absolute top-1 left-1 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/916bcb6fc_42c97639d_2_535.svg" alt="Back Arrow Part 1" />
                <img className="w-[13px] h-0.5 absolute top-2.5 left-1 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/d73607472_9ec2f3555_2_536.svg" alt="Back Arrow Part 2" />
              </div>
              <p className="text-figma-16 font-medium font-heading leading-figma-24 text-center text-figma-secondary">
                Volver
              </p>
            </button>
          </div>

          {/* AR Mode Badge */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 py-1 px-3 bg-figma-surface-2 rounded-[39311300px] z-20">
            <p className="text-figma-12 font-bold font-heading leading-figma-16 tracking-[1.2px] text-[#00d3f3]">
              MODO RA
            </p>
          </div>

          {/* AR status indicator */}
          {arStatus && (
            <div className="absolute left-4 right-4 bg-figma-accent/80 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 z-20" style={{ bottom: "60px" }}>
              <span className="w-2 h-2 rounded-full bg-[#00d3f3] animate-pulse" />
              <p className="text-figma-12 text-[#00d3f3] font-medium">{arStatus}</p>
            </div>
          )}

          {/* Rule of Thirds Toggle */}
          <button
            onClick={() => setGridActive(!gridActive)}
            className={`absolute bottom-4 right-3 flex flex-row justify-start items-center gap-1.5 py-2 px-3 rounded-[14px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.20)] z-20 transition-colors ${gridActive ? 'bg-figma-highlight-2' : 'bg-black/40'}`}
          >
            <div className="shrink-0 grow-0 w-4 h-4 overflow-clip relative">
              <img className="w-[13px] h-[13px] absolute top-0.5 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0a86d628c_efe3f8511_2_524.svg" alt="Grid Outer" />
              <img className="w-[13px] h-px absolute top-1.5 left-0.5 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7c5a643f1_74b165e05_2_525.svg" alt="Grid Line H1" />
              <img className="w-px h-[13px] absolute top-0.5 left-1.5 z-[4]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/67f944f78_556158309_2_527.svg" alt="Grid Line V1" />
              <img className="w-px h-[13px] absolute top-0.5 left-2.5 z-[5]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/d7f2390a0_1a86659ba_2_528.svg" alt="Grid Line V2" />
              <img className="w-[13px] h-px absolute top-2.5 left-0.5 z-[3]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/22707932e_e33c0b222_2_526.svg" alt="Grid Line H2" />
            </div>
            <p className="text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-secondary">
              Regla de Tercios
            </p>
          </button>
        </div>

        {/* Camera Controls Bottom Sheet */}
        <div className="shrink-0 mt-auto flex flex-col justify-start items-start p-4 w-full bg-[#0f172a] rounded-[24px_24px_0px_0px] z-10 relative gap-1">

          {/* Sliders */}
          {sliders.map((slider, index) => (
            <div key={index} className="flex flex-col w-full">
              <div className="flex flex-row justify-between items-center pb-2">
                <div className="py-1 px-3 bg-[#04d9d9] rounded-[4px]">
                  <p className="text-figma-12 font-bold font-heading leading-figma-16 text-figma-text-2 uppercase">
                    {slider.label}
                  </p>
                </div>
                <p className="text-figma-18 font-bold font-heading leading-figma-28 text-figma-secondary">
                  {slider.value}
                </p>
              </div>

              <div className="w-full min-h-[27px] relative cursor-pointer">
                <div className="absolute inset-x-0 top-[11px] h-2 rounded-[39311300px] overflow-clip bg-[#4b5563]">
                  <div className="h-full bg-[#04d9d9] rounded-full" style={{ width: `${slider.percentage}%` }} />
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={slider.percentage}
                  onChange={(e) => slider.onChange(Number(e.target.value))}
                  className="absolute inset-x-0 w-full opacity-0 cursor-pointer h-8"
                  style={{ zIndex: 10 }}
                />
              </div>

              <div className="flex flex-row justify-between items-start w-full h-4">
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
              onClick={handleCapture}
              disabled={capturing}
              whileTap={{ scale: 0.92 }}
              className="flex justify-center items-center w-20 h-20 bg-[#04d9d9] rounded-[39311300px] shadow-[inset_0_0_0_4px_#ffffff] focus:outline-none disabled:opacity-60"
            >
              <div className="bg-figma-secondary rounded-[39311300px] w-14 h-14" />
            </motion.button>
          </div>

        </div>
      </div>
    </main>
  );
}