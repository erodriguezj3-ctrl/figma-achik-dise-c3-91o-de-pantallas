import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import { VIDEO_SOURCES } from "@/config/videos";
import { markTopicComplete } from "@/hooks/useProgress";

export default function ReglaDeTercio() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-figma-secondary flex flex-col items-center font-heading">
      <div className="w-full max-w-[392px] flex flex-col flex-1 bg-figma-secondary shadow-sm">

        {/* Header */}
        <header className="w-full p-6 border-b border-[#e5e7eb] flex-shrink-0">
          <button className="flex items-center gap-2 group transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] rounded-md">
            <ArrowLeft className="w-5 h-5 text-figma-text-1-3 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-figma-16 font-medium leading-figma-24 text-figma-text-1-3">
              Volver
            </span>
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col p-6 w-full">

          {/* Title Section */}
          <div className="flex flex-col items-center mb-6 flex-shrink-0">
            <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-center text-figma-text-1-2">
              Regla de los Tercios
            </h1>
            <p className="text-figma-16 font-normal leading-figma-24 text-center text-figma-text-5 mt-2">
              Composición básica
            </p>
          </div>

          {/* Video de la Clase */}
          <div className="flex-1 flex items-center justify-center w-full min-h-[320px] py-4">
            <div className="w-full max-w-[344px] aspect-[344/320]">
              <VideoPlayer src={VIDEO_SOURCES.clase_composicion} className="w-full h-full" />
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-auto pt-6 flex-shrink-0 w-full">
            <button onClick={async () => { await markTopicComplete("tercios"); navigate("/Practica", { state: { topic: "tercios" } }); }} className="w-full h-14 bg-[#04d9d9] rounded-full flex items-center justify-center text-figma-secondary text-figma-16 font-medium tracking-[0.4px] uppercase hover:bg-[#03c2c2] transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#04d9d9]">
              Marcar como completado
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}