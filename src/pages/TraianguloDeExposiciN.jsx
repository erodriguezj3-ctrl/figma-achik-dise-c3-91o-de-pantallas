import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";
import { VIDEO_SOURCES } from "@/config/videos";
import { markTopicComplete } from "@/hooks/useProgress";

export default function TraianguloDeExposiciN() {
  const navigate = useNavigate();
  return (
    <main className="w-full max-w-[392px] mx-auto min-h-screen flex flex-col bg-figma-secondary font-heading">
      {/* Header */}
      <header className="flex items-center p-6 border-b border-[#e5e7eb] w-full shrink-0">
        <button onClick={() => navigate("/FotografiaBasica")} className="flex items-center gap-2 hover:opacity-70 transition-opacity focus:outline-none">
          <ArrowLeft className="w-5 h-5 text-figma-text-1-3" />
          <span className="text-figma-16 font-medium leading-figma-24 text-figma-text-1-3">
            Volver
          </span>
        </button>
      </header>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-6 w-full">
        {/* Title Group */}
        <div className="flex flex-col items-center pb-6 w-full shrink-0">
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-center text-figma-text-1-2">
            Triángulo de Exposición
          </h1>
          <p className="pt-2 text-figma-16 font-normal leading-figma-24 text-center text-figma-text-5">
            Triángulo de Exposición
          </p>
        </div>

        {/* Video de la Clase */}
        <div className="flex-grow flex items-center justify-center pb-6 w-full">
          <div className="w-full max-w-[344px] min-h-[320px]">
            <VideoPlayer src={VIDEO_SOURCES.clase_triangulo} className="w-full h-full min-h-[320px]" />
          </div>
        </div>

        {/* Bottom Action */}
        <div className="w-full shrink-0 mt-auto">
          <button onClick={async () => { await markTopicComplete("triangulo"); navigate("/Practica", { state: { topic: "triangulo" } }); }} className="w-full h-14 bg-[#04d9d9] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#04d9d9]">
            <span className="text-figma-16 font-medium leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
              Marcar como completado
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}