import React from "react";
import { motion } from "framer-motion";

export default function CamaraAr4() {
  return (
    <main className="w-full max-w-[392px] mx-auto flex flex-col min-h-screen bg-figma-accent relative overflow-clip">
      {/* Viewfinder Section */}
      <div className="relative w-full min-h-[401px] shrink-0 bg-figma-surface overflow-clip z-0">
        {/* Inner Cyan Border */}
        <div className="absolute inset-4 rounded-[10px] shadow-[inset_0_0_0_1px_rgba(0,211,243,0.60)] pointer-events-none z-10" />

        {/* Top Controls */}
        <motion.button
          whileTap={{ scale: 0.95 }}
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

        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col justify-start items-start py-1 px-3 bg-figma-surface-2 rounded-[39311300px]">
          <p className="text-figma-12 font-bold font-heading leading-figma-16 tracking-[1.2px] text-[#00d3f3]">
            MODO RA
          </p>
        </div>

        {/* EV Slider (Right) */}
        <div className="absolute top-16 right-2 z-20 flex flex-col justify-start items-center gap-0.5 p-2 bg-figma-highlight-4 rounded-[14px] w-[33px]">
          <p className="text-figma-12 font-normal font-heading leading-figma-16 text-figma-text-1 mb-1">EV</p>
          {[...Array(7)].map((_, i) => (
            <div key={i} className="bg-figma-color-9 rounded-[6px] shrink-0 grow-0 w-2 h-2" />
          ))}
        </div>

        {/* Lighting Modes (Left) */}
        <div className="absolute top-[57%] left-3 z-20 flex flex-col justify-start items-start gap-2 w-[128px]">
          {[
            { icon: "☀️", label: "Luz Principal" },
            { icon: "🔵", label: "Luz de Relleno" },
            { icon: "🌅", label: "Contraluz" },
          ].map((mode, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.97 }}
              className="flex flex-row justify-start items-center gap-1.5 pt-[8px] pr-[12px] pb-[4px] pl-[12px] w-full bg-figma-accent-5 rounded-[14px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.20)] h-[30px] overflow-clip"
            >
              <p className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-secondary">
                {mode.icon}
              </p>
              <p className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-secondary">
                {mode.label}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Regla de Tercios (Bottom Right) */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-4 right-3 z-20 flex flex-row justify-start items-center gap-1.5 py-2 px-3 bg-figma-highlight-2 rounded-[14px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.20)] w-[140px] h-[34px]"
        >
          <div className="shrink-0 grow-0 w-4 h-4 overflow-clip relative">
            <img className="w-[13px] h-[13px] absolute top-0.5 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/c0333e52a_be42764b8_2_1588.svg" alt="Grid" />
            <img className="w-[13px] h-px absolute top-1.5 left-0.5 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7a9a6d5c6_d26bded4d_2_1589.svg" alt="Grid Line" />
            <img className="w-px h-[13px] absolute top-0.5 left-1.5 z-[4]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/72c20c3cb_3b4f65ed1_2_1591.svg" alt="Grid Line" />
            <img className="w-px h-[13px] absolute top-0.5 left-2.5 z-[5]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/cd738eae0_f70ac8401_2_1592.svg" alt="Grid Line" />
            <img className="w-[13px] h-px absolute top-2.5 left-0.5 z-[3]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/02ed739a9_e3d850614_2_1590.svg" alt="Grid Line" />
          </div>
          <p className="text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-secondary">
            Regla de Tercios
          </p>
        </motion.button>
      </div>

      {/* Camera Controls Section */}
      <div className="flex-1 flex flex-col justify-start items-start p-6 w-full bg-figma-text-1-2 rounded-[24px_24px_0px_0px] z-10 relative gap-6">

        {/* ISO Slider */}
        <div className="flex flex-col justify-start items-start w-full">
          <div className="flex flex-row justify-between items-center pb-[8px] w-full">
            <div className="flex flex-col justify-start items-start py-1 px-3 bg-[#04d9d9] rounded-[4px]">
              <p className="text-figma-12 font-bold font-heading leading-figma-16 text-figma-text-2">ISO</p>
            </div>
            <p className="text-figma-18 font-bold font-heading leading-figma-28 text-figma-secondary">100</p>
          </div>
          <div className="w-full min-h-[27px] relative flex items-center">
            <div className="bg-[linear-gradient(90deg,_rgba(4,217,217,1.00)_0%,_rgba(4,217,217,1.00)_0%,_rgba(75,85,99,1.00)_0%,_rgba(75,85,99,1.00)_100%)] rounded-[39311300px] w-full h-2" />
          </div>
          <div className="flex flex-row justify-between items-start w-full">
            {["100", "400", "1600", "3200", "6400"].map((val) => (
              <p key={val} className="text-figma-12 font-normal font-heading leading-figma-16 text-figma-text-1">
                {val}
              </p>
            ))}
          </div>
        </div>

        {/* OBTURACIÓN Slider */}
        <div className="flex flex-col justify-start items-start w-full">
          <div className="flex flex-row justify-between items-center pb-[8px] w-full">
            <div className="flex flex-col justify-start items-start py-1 px-3 bg-[#04d9d9] rounded-[4px]">
              <p className="text-figma-12 font-bold font-heading leading-figma-16 text-figma-text-2">OBTURACIÓN</p>
            </div>
            <p className="text-figma-18 font-bold font-heading leading-figma-28 text-figma-secondary">1/100</p>
          </div>
          <div className="w-full min-h-[27px] relative flex items-center">
            <div className="bg-[linear-gradient(90deg,_rgba(4,217,217,1.00)_0%,_rgba(4,217,217,1.00)_50%,_rgba(75,85,99,1.00)_50%,_rgba(75,85,99,1.00)_100%)] rounded-[39311300px] w-full h-2" />
          </div>
          <div className="flex flex-row justify-between items-start w-full">
            {["1/2000", "1/500", "1/100", "1/8", '2"'].map((val) => (
              <p key={val} className="text-figma-12 font-normal font-heading leading-figma-16 text-figma-text-1">
                {val}
              </p>
            ))}
          </div>
        </div>

        {/* DIAFRAGMA Slider */}
        <div className="flex flex-col justify-start items-start w-full">
          <div className="flex flex-row justify-between items-center pb-[8px] w-full">
            <div className="flex flex-col justify-start items-start py-1 px-3 bg-[#04d9d9] rounded-[4px]">
              <p className="text-figma-12 font-bold font-heading leading-figma-16 text-figma-text-2">DIAFRAGMA</p>
            </div>
            <p className="text-figma-18 font-bold font-heading leading-figma-28 text-figma-secondary">f/5.6</p>
          </div>
          <div className="w-full min-h-[27px] relative flex items-center">
            <div className="bg-[linear-gradient(90deg,_rgba(4,217,217,1.00)_0%,_rgba(4,217,217,1.00)_50%,_rgba(75,85,99,1.00)_50%,_rgba(75,85,99,1.00)_100%)] rounded-[39311300px] w-full h-2" />
          </div>
          <div className="flex flex-row justify-between items-start w-full">
            {["f/2.8", "f/4", "f/5.6", "f/8", "f/16"].map((val) => (
              <p key={val} className="text-figma-12 font-normal font-heading leading-figma-16 text-figma-text-1">
                {val}
              </p>
            ))}
          </div>
        </div>

        {/* Shutter Button */}
        <div className="flex flex-row justify-center items-start w-full mt-auto pt-4 pb-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex flex-row justify-center items-center h-20 w-20 bg-[#04d9d9] rounded-[39311300px] shadow-[inset_0_0_0_4px_#ffffff]"
          >
            <div className="bg-figma-secondary rounded-[39311300px] w-14 h-14" />
          </motion.button>
        </div>

      </div>
    </main>
  );
}
