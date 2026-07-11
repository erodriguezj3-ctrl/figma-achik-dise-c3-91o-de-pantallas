import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfundidadDeCampo() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full max-w-[392px] mx-auto min-h-[852px] bg-figma-secondary font-heading relative">
      {/* Header */}
      <header className="flex flex-row items-center gap-2 p-6 w-full border-b border-[#e5e7eb] shrink-0">
        <button
          onClick={() => navigate("/FotografiaIntermedia")}
          className="relative w-5 h-5 shrink-0 hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] rounded-sm"
          aria-label="Volver"
        >
          <img
            className="absolute top-1 left-1 w-[7px] h-[13px] z-[1]"
            src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/11b57f5c4_809bc5d1d_2_769.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="absolute top-2.5 left-1 w-[13px] h-0.5 z-[2]"
            src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/345ae3aaf_848524c5f_2_770.svg"
            alt=""
            aria-hidden="true"
          />
        </button>
        <span className="text-figma-16 font-medium leading-figma-24 text-figma-text-1-3">
          Volver
        </span>
      </header>

      {/* Main Content */}
      <main className="flex flex-col flex-1 p-6 w-full">
        {/* Title Section */}
        <div className="flex flex-col items-center w-full shrink-0 mb-6">
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-center text-figma-text-1-2">
            Profundidad de Campo
          </h1>
          <p className="mt-2 text-figma-16 font-normal leading-figma-24 text-center text-figma-text-5">
            Control de enfoque y desenfoque
          </p>
        </div>

        {/* Interactive / Media Area */}
        <div className="flex flex-col items-center justify-center flex-1 w-full min-h-[320px] py-6">
          <div className="flex flex-col items-center justify-center w-full max-w-[344px] min-h-[320px] p-6 bg-figma-accent rounded-[16px] overflow-clip shadow-sm">
            <p className="text-figma-18 font-medium leading-figma-28 text-center text-[#00d3f3]">
              Profundidad de Campo
            </p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="w-full shrink-0 mt-auto pt-6">
          <button onClick={() => navigate("/Practica", { state: { topic: "profundidad" } })} className="flex items-center justify-center w-full h-14 bg-[#04d9d9] rounded-[39311300px] hover:bg-[#03c2c2] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#04d9d9]/30">
            <span className="text-figma-16 font-medium leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
              Marcar como completado
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}