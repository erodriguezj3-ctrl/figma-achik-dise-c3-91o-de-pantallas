import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";
import { VIDEO_SOURCES } from "@/config/videos";

export default function PuntosDeLuzClave() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-[100dvh] bg-figma-secondary w-full max-w-[392px] mx-auto font-heading relative overflow-clip shadow-2xl">
      {/* Header */}
      <header className="flex items-center p-6 border-b border-[#e5e7eb] w-full bg-figma-secondary sticky top-0 z-20">
        <button onClick={() => navigate("/FotografiaIntermedia")} className="flex items-center gap-2 hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] rounded-md group">
          <div className="relative w-5 h-5 overflow-clip shrink-0 group-hover:-translate-x-0.5 transition-transform">
            <img
              className="absolute top-1 left-1 w-[7px] h-[13px] z-[1]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/24cc40bb2_ee9cef626_2_1162.svg"
              alt="Back arrow part 1"
            />
            <img
              className="absolute top-2.5 left-1 w-[13px] h-0.5 z-[2]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/22d847ec3_6d0c230f0_2_1163.svg"
              alt="Back arrow part 2"
            />
          </div>
          <span className="text-figma-16 font-medium leading-figma-24 text-figma-text-1-3">
            Volver
          </span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col flex-1 p-6 w-full z-10">
        {/* Titles */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center w-full pb-6 shrink-0"
        >
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-center text-figma-text-1-2">
            Condiciones de Luz
          </h1>
          <p className="pt-2 text-figma-16 font-normal leading-figma-24 text-center text-figma-text-5">
            Ajustes según iluminación
          </p>
        </motion.div>

        {/* Central Card Area - Fluidly centered in available space */}
        <div className="flex flex-col flex-1 items-center justify-center w-full pb-6 min-h-[340px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-[344px]"
          >
            <div className="w-full min-h-[320px]">
              <VideoPlayer src={VIDEO_SOURCES.clase_luces} className="w-full h-full min-h-[320px]" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full mt-auto shrink-0"
        >
          <button onClick={() => navigate("/Practica", { state: { topic: "luces" } })} className="w-full h-14 bg-[#04d9d9] rounded-full flex items-center justify-center hover:bg-[#03c8c8] hover:shadow-md transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#04d9d9]">
            <span className="text-figma-16 font-medium leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
              Marcar como completado
            </span>
          </button>
        </motion.div>
      </main>
    </div>
  );
}