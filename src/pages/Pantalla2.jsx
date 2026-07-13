import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function OnboardingScreen() {
  const navigate = useNavigate();
  return (
    <main className="h-screen w-full overflow-hidden bg-figma-secondary flex flex-col justify-around font-heading">
      {/* Top Illustration Area */}
      <div className="flex items-center justify-center p-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 0.85, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center w-full max-w-[256px] h-[256px]"
        >
          {/* Phone Outline */}
          <div className="w-[128px] min-h-[224px] rounded-[24px] shadow-[inset_0_0_0_4px_#d1d5dc] flex items-center justify-center z-[1]">
            <div className="bg-figma-muted-3 rounded-[16px] w-24 h-24" />
          </div>

          {/* Camera Circle */}
          <div className="absolute w-[112px] min-h-[112px] bg-[#04d9d9] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10),_0px_20px_25px_-5px_rgba(0,0,0,0.10)] rounded-[39311300px] flex items-center justify-center z-[2]">
            <div className="w-16 h-16 relative overflow-clip">
              <img
                className="w-[59px] h-12 absolute top-[11px] left-[5px] z-[1]"
                src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/05cacef0e_9af360559_1_23.svg"
                alt="Camera Body"
              />
              <img
                className="w-[21px] h-[21px] absolute top-[27px] left-6 z-[2]"
                src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/64dbe66fe_47ebe97e1_1_24.svg"
                alt="Camera Lens"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Content Area */}
      <div className="shrink-0 w-full flex justify-center pb-5">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-[328px] flex flex-col items-center gap-4"
        >
          {/* Pagination */}
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="bg-[#04d9d9] rounded-[39311300px] w-2 h-2" />
            <div className="bg-figma-border-3 rounded-[39311300px] w-2 h-2" />
            <div className="bg-figma-border-3 rounded-[39311300px] w-2 h-2" />
          </div>

          {/* Text */}
          <div className="px-4">
            <p className="text-figma-16 font-normal leading-figma-24 text-center text-figma-text-5 max-w-[297px]">
              La capacidad de simular una cámara profesional en el bolsillo
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col items-center gap-3">
            <button onClick={() => navigate("/Pantalla3")} className="w-full h-14 bg-[#04d9d9] rounded-[39311300px] flex items-center justify-center transition-transform active:scale-[0.98] hover:bg-[#03c2c2]">
              <span className="text-figma-16 font-medium leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
                Continuar
              </span>
            </button>
            <button onClick={() => navigate("/Bienvenida")} className="h-6 flex items-center justify-center transition-opacity hover:opacity-70">
              <span className="text-figma-16 font-medium leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-text-1-3">
                Saltar
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}