import React from "react";
import { motion } from "framer-motion";

export default function EfectoBokeh() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-figma-secondary font-heading overflow-x-clip">
      {/* Header */}
      <header className="w-full p-6 border-b border-[#e5e7eb] flex items-center bg-figma-secondary sticky top-0 z-10">
        <button className="flex items-center gap-2 hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] rounded-md">
          <div className="relative w-5 h-5 overflow-clip shrink-0">
            <img
              className="absolute top-1 left-1 w-[7px] h-[13px] z-[1]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/87343a2c1_834c5004b_2_1128.svg"
              alt="Back"
            />
            <img
              className="absolute top-2.5 left-1 w-[13px] h-0.5 z-[2]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/242468c9d_8f99fba7d_2_1129.svg"
              alt=""
            />
          </div>
          <span className="text-figma-16 font-medium text-figma-text-1-3 leading-figma-24">
            Volver
          </span>
        </button>
      </header>

      {/* Content */}
      <section className="flex-1 flex flex-col p-6 w-full max-w-2xl mx-auto">
        {/* Title Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pb-6 flex flex-col items-center"
        >
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold text-figma-text-1-2 leading-[1.3333] text-center">
            Efecto Bokeh
          </h1>
          <p className="pt-2 text-figma-16 font-normal text-figma-text-5 leading-figma-24 text-center">
            Desenfoques creativos
          </p>
        </motion.div>

        {/* Visual Area */}
        <div className="flex-1 w-full flex items-center justify-center py-4 min-h-[320px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[344px] aspect-[344/320] bg-figma-accent rounded-[16px] flex items-center justify-center overflow-clip shadow-sm"
          >
            <p className="text-figma-18 font-medium text-[#00d3f3] leading-figma-28 text-center px-6">
              Efecto Bokeh
            </p>
          </motion.div>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center mt-8"
        >
          <button className="w-full max-w-[344px] h-14 bg-[#04d9d9] rounded-full flex items-center justify-center hover:bg-[#03c2c2] hover:shadow-md transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#04d9d9]">
            <span className="text-figma-16 font-medium tracking-[0.4px] text-figma-secondary uppercase leading-figma-24">
              Marcar como completado
            </span>
          </button>
        </motion.div>
      </section>
    </main>
  );
}
