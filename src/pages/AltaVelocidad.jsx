import React from "react";
import { motion } from "framer-motion";

export default function AltaVelocidad() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-figma-secondary font-heading">
      {/* Header */}
      <header className="flex items-center p-6 w-full border-b border-[#e5e7eb] bg-figma-secondary sticky top-0 z-10">
        <button className="flex items-center gap-2 hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] rounded-md">
          <div className="shrink-0 grow-0 w-5 h-5 overflow-clip relative">
            <img
              className="w-[7px] h-[13px] absolute top-1 left-1 z-[1]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/4b772d637_fd2e1c568_2_2084.svg"
              alt=""
              aria-hidden="true"
            />
            <img
              className="w-[13px] h-0.5 absolute top-2.5 left-1 z-[2]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/39e4ec44b_3917b3834_2_2085.svg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <span className="text-figma-16 font-medium font-heading leading-figma-24 text-center text-figma-text-1-3">
            Volver
          </span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col flex-1 p-6 w-full max-w-3xl mx-auto">
        {/* Title Section */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center pb-6 w-full"
        >
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold font-heading leading-[1.3333] text-center text-figma-text-1-2">
            Alta Velocidad
          </h1>
          <p className="pt-2 text-figma-16 font-normal font-heading leading-figma-24 text-center text-figma-text-5">
            Congelación del movimiento
          </p>
        </motion.section>

        {/* Card Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col flex-1 justify-center items-center pb-6 w-full min-h-[320px]"
        >
          <div className="flex justify-center items-center w-full max-w-[344px] min-h-[320px] bg-figma-accent rounded-[16px] overflow-clip shadow-sm hover:shadow-md transition-shadow">
            <span className="text-figma-18 font-medium font-heading leading-figma-28 text-center text-[#00d3f3] px-6">
              Alta Velocidad
            </span>
          </div>
        </motion.section>

        {/* Footer / Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="w-full mt-auto pt-4"
        >
          <button className="w-full h-14 bg-[#04d9d9] rounded-[39311300px] flex items-center justify-center hover:bg-[#03c2c2] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#04d9d9]/50">
            <span className="text-figma-16 font-medium font-heading leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
              Marcar como completado
            </span>
          </button>
        </motion.section>
      </main>
    </div>
  );
}
