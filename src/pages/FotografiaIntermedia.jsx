import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";
import { VIDEO_SOURCES } from "@/config/videos";

export default function FotografiaIntermedia() {
  const navigate = useNavigate();
  return (
    <main className="w-full max-w-[392px] mx-auto min-h-screen bg-figma-secondary flex flex-col font-heading">
      {/* Header */}
      <header className="flex items-center p-6 border-b border-[#e5e7eb] w-full shrink-0">
        <button onClick={() => navigate("/PantallaDeInicio")} className="flex items-center gap-2 hover:opacity-70 transition-opacity focus:outline-none rounded-md focus-visible:ring-2 focus-visible:ring-[#04d9d9] focus-visible:ring-offset-2">
          <ArrowLeft className="w-5 h-5 text-figma-text-1-3" strokeWidth={2} />
          <span className="text-figma-16 font-medium leading-figma-24 text-figma-text-1-3">
            Volver
          </span>
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col p-6 w-full grow">
        {/* Title Section */}
        <section className="flex flex-col items-center mb-6 w-full">
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-center text-figma-text-1-2">
            FOTOGRAFÍA INTERMEDIA
          </h1>
          <p className="text-figma-16 font-normal leading-figma-24 text-center text-figma-text-5 mt-2">
            Profundidad de Campo y Puntos de Luz Clave
          </p>
        </section>

        {/* Video Introductorio */}
        <section className="w-full mb-6">
          <div className="w-full aspect-[344/194] rounded-[16px] overflow-clip shadow-sm">
            <VideoPlayer
              src={VIDEO_SOURCES.intro_intermedia}
              poster="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/984dce783_93152e8d4_5c19ad9595102b399436f3b8733c7165e433c894.png"
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Course Topics */}
        <section className="flex flex-col w-full">
          <h2 className="text-figma-18 font-bold leading-figma-28 text-figma-text-1-2 mb-3">
            Temas del curso:
          </h2>

          <div className="flex flex-col gap-3 w-full">
            {/* Topic Card 1 */}
            <button onClick={() => navigate("/ProfundidadDeCampo", { state: { topic: "profundidad" } })} className="flex flex-col justify-center p-[17px] bg-figma-secondary rounded-[16px] shadow-[inset_0_0_0_1px_#04d9d9] w-full text-left hover:bg-[#04d9d9]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] focus-visible:ring-offset-2 group">
              <h3 className="text-figma-16 font-bold leading-figma-24 text-figma-text-1-2 group-hover:text-[#04d9d9] transition-colors">
                Profundidad de Campo
              </h3>
              <p className="text-figma-14 font-medium leading-figma-20 text-figma-text-5 mt-1">
                Control de enfoque y desenfoque
              </p>
            </button>

            {/* Topic Card 2 */}
            <button onClick={() => navigate("/EfectoBokeh", { state: { topic: "bokeh" } })} className="flex flex-col justify-center p-[17px] bg-figma-secondary rounded-[16px] shadow-[inset_0_0_0_1px_#04d9d9] w-full text-left hover:bg-[#04d9d9]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] focus-visible:ring-offset-2 group">
              <h3 className="text-figma-16 font-bold leading-figma-24 text-figma-text-1-2 group-hover:text-[#04d9d9] transition-colors">
                Efecto Bokeh
              </h3>
              <p className="text-figma-14 font-medium leading-figma-20 text-figma-text-5 mt-1">
                Desenfoques creativos
              </p>
            </button>

            {/* Topic Card 3 */}
            <button onClick={() => navigate("/PuntosDeLuzClave", { state: { topic: "luces" } })} className="flex flex-col justify-center p-[17px] bg-figma-secondary rounded-[16px] shadow-[inset_0_0_0_1px_#04d9d9] w-full text-left hover:bg-[#04d9d9]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] focus-visible:ring-offset-2 group">
              <h3 className="text-figma-16 font-bold leading-figma-24 text-figma-text-1-2 group-hover:text-[#04d9d9] transition-colors">
                Puntos de Luz Clave
              </h3>
              <p className="text-figma-14 font-medium leading-figma-20 text-figma-text-5 mt-1">
                Ajustes según iluminación
              </p>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}