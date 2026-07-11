import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CamaraAr1() {
  const [gridActive, setGridActive] = useState(true);

  const sliders = [
    {
      label: "ISO",
      value: "100",
      percentage: 0,
      ticks: ["100", "400", "1600", "3200", "6400"],
    },
    {
      label: "OBTURACIÓN",
      value: "1/100",
      percentage: 50,
      ticks: ["1/2000", "1/500", "1/100", "1/8", '2"'],
    },
    {
      label: "DIAFRAGMA",
      value: "f/5.6",
      percentage: 50,
      ticks: ["f/2.8", "f/4", "f/5.6", "f/8", "f/16"],
    },
  ];

  return (
    <main className="min-h-screen w-full bg-figma-secondary flex justify-center items-start">
      <div className="w-full max-w-[392px] bg-figma-accent min-h-[853px] flex flex-col relative overflow-clip shadow-2xl">

        {/* Viewfinder Area */}
        <div className="flex-1 relative bg-figma-surface min-h-[401px] w-full overflow-clip">
          {/* Active Area Border */}
          <div className="absolute inset-4 rounded-[10px] shadow-[inset_0_0_0_1px_rgba(0,211,243,0.60)] pointer-events-none z-10" />

          {/* Top Bar Controls */}
          <div className="absolute top-4 left-4 z-20">
            <button className="flex flex-row justify-start items-center gap-2 py-2 px-4 bg-figma-highlight rounded-[39311300px] hover:bg-white/20 transition-colors">
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

          {/* EV Slider (Vertical) */}
          <div className="absolute top-16 right-2 flex flex-col justify-start items-center gap-0.5 p-2 bg-figma-highlight-4 rounded-[14px] w-[33px] z-20">
            <p className="text-figma-12 font-normal font-heading leading-figma-16 text-figma-text-1 mb-1">
              EV
            </p>
            {[...Array(7)].map((_, i) => (
              <div key={i} className="bg-figma-color-9 rounded-[6px] shrink-0 grow-0 w-2 h-2" />
            ))}
          </div>

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
        <div className="w-full bg-figma-text-1-2 rounded-[24px_24px_0px_0px] p-6 flex flex-col gap-6 z-30 relative">

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
                <div
                  className="w-full h-2 rounded-[39311300px] absolute top-[11px] left-0"
                  style={{
                    background: `linear-gradient(90deg, rgba(4,217,217,1.00) 0%, rgba(4,217,217,1.00) ${slider.percentage}%, rgba(75,85,99,1.00) ${slider.percentage}%, rgba(75,85,99,1.00) 100%)`
                  }}
                />
              </div>

              <div className="flex flex-row justify-between items-start w-full">
                {slider.ticks.map((tick, i) => (
                  <p key={i} className="text-figma-12 font-normal font-heading leading-figma-16 text-figma-text-1">
                    {tick}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Shutter Button */}
          <div className="flex justify-center items-center mt-4 mb-2 w-full">
            <motion.button
              whileTap={{ scale: 0.92 }}
              className="flex justify-center items-center w-20 h-20 bg-[#04d9d9] rounded-[39311300px] shadow-[inset_0_0_0_4px_#ffffff] focus:outline-none"
            >
              <div className="bg-figma-secondary rounded-[39311300px] w-14 h-14" />
            </motion.button>
          </div>

        </div>
      </div>
    </main>
  );
}
