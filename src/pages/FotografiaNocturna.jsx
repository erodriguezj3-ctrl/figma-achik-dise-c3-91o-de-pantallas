import React from "react";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";
import { VIDEO_SOURCES } from "@/config/videos";

export default function FotografiaNocturna() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col min-h-[100dvh] bg-figma-secondary w-full max-w-[392px] mx-auto font-heading relative overflow-clip shadow-2xl">
      {/* Header */}
      <header className="flex items-center p-6 w-full border-b border-[#e5e7eb] shrink-0">
        <button onClick={() => navigate("/FotografiaAvanzada")} className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none">
          <div className="relative w-5 h-5 shrink-0 overflow-clip">
            <img
              className="absolute top-1 left-1 w-[7px] h-[13px] z-[1]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/59ffec2b2_2a956c565_2_2050.svg"
              alt="Back"
            />
            <img
              className="absolute top-2.5 left-1 w-[13px] h-0.5 z-[2]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/984e1928f_5a74b8709_2_2051.svg"
              alt=""
            />
          </div>
          <span className="text-figma-16 font-medium leading-figma-24 text-figma-text-1-3">
            Volver
          </span>
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-6 w-full">
        {/* Title Section */}
        <div className="flex flex-col items-center pb-6 shrink-0 w-full">
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-center text-figma-text-1-2">
            Fotografía Nocturna
          </h1>
          <p className="text-figma-16 font-normal leading-figma-24 text-center text-figma-text-5 pt-2">
            Captura en condiciones de baja luz
          </p>
        </div>

        {/* Video de la Clase (placeholder) */}
        <div className="flex flex-col flex-1 items-center justify-center w-full pb-6 min-h-[340px]">
          <div className="w-full max-w-[344px]">
            <div className="w-full min-h-[320px]">
              <VideoPlayer src={VIDEO_SOURCES.clase_nocturna} className="w-full h-full min-h-[320px]" />
            </div>
          </div>
        </div>

        {/* Action Section */}
        <button onClick={() => navigate("/Practica", { state: { topic: "nocturna" } })} className="w-full h-14 bg-[#04d9d9] hover:bg-[#03c2c2] transition-colors rounded-[39311300px] flex items-center justify-center shrink-0 mt-auto focus:outline-none focus:ring-2 focus:ring-[#04d9d9] focus:ring-offset-2">
          <span className="text-figma-16 font-medium leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
            Marcar como completado
          </span>
        </button>
      </div>
    </main>
  );
}