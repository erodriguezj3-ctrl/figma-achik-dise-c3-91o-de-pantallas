import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Pantalla3() {
  const navigate = useNavigate();
  return (
    <main className="w-full max-w-[392px] mx-auto min-h-screen flex flex-col bg-figma-secondary overflow-clip">
      {/* Top Graphic Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center w-full max-w-[256px] h-[256px]"
        >
          {/* Book Background */}
          <div className="absolute inset-0 flex items-center justify-center z-[1]">
            <div className="relative w-[192px] min-h-[192px] overflow-clip">
              <img
                className="absolute top-6 left-4 w-[168px] h-[152px] z-[2]"
                src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/67f7910a7_5b6a1de58_1_52.svg"
                alt=""
              />
              <img
                className="absolute top-14 left-24 w-2 h-[120px] z-[1]"
                src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/c4de20b11_19d7ef0d1_1_51.svg"
                alt=""
              />
            </div>
          </div>

          {/* Play Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-[2] flex items-center justify-center w-[112px] h-[112px] bg-[#04d9d9] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10),_0px_20px_25px_-5px_rgba(0,0,0,0.10)] rounded-[39311300px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#04d9d9]/50"
            aria-label="Reproducir video introductorio"
          >
            <div className="pl-1 flex items-center justify-center">
              <div className="relative w-14 h-14 overflow-clip">
                <img
                  className="absolute top-[7px] left-3.5 w-[37px] h-[47px] z-[1]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/5a76fb2bc_8ff4c0f50_1_55.svg"
                  alt=""
                />
              </div>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Content Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center w-full px-8 pb-8"
      >
        {/* Pagination Dots */}
        <div className="flex flex-row justify-center items-center gap-2 mb-6">
          <div className="bg-figma-border-3 rounded-[39311300px] w-2 h-2 transition-colors" />
          <div className="bg-[#04d9d9] rounded-[39311300px] w-2 h-2 transition-colors" />
          <div className="bg-figma-border-3 rounded-[39311300px] w-2 h-2 transition-colors" />
        </div>

        {/* Text */}
        <p className="text-figma-16 font-normal font-heading leading-figma-24 text-center text-figma-text-5 max-w-[297px] mb-10">
          El aprendizaje interactivo que transforma tu forma de capturar momentos
        </p>

        {/* Buttons */}
        <div className="flex flex-col w-full gap-6">
          <button onClick={() => navigate("/Pantalla4")} className="w-full h-14 bg-[#04d9d9] rounded-[39311300px] flex items-center justify-center text-figma-16 font-medium font-heading leading-figma-24 tracking-[0.4px] uppercase text-figma-secondary transition-all hover:bg-[#03c2c2] active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#04d9d9]/50 shadow-sm">
            Continuar
          </button>
          <button onClick={() => navigate("/Bienvenida")} className="w-full h-6 flex items-center justify-center text-figma-16 font-medium font-heading leading-figma-24 tracking-[0.4px] uppercase text-figma-text-1-3 transition-opacity hover:opacity-70 active:scale-[0.98] focus:outline-none focus-visible:underline">
            Saltar
          </button>
        </div>
      </motion.div>
    </main>
  );
}