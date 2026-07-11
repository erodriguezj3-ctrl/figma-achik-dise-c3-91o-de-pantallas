import React from "react";
import { useNavigate } from "react-router-dom";

export default function LargaExposicion() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full min-h-screen bg-figma-secondary font-sans mx-auto max-w-md shadow-sm">
      {/* Header */}
      <header className="flex flex-row justify-start items-center gap-2 p-6 w-full border-b border-[#e5e7eb] shrink-0">
        <button onClick={() => navigate("/FotografiaAvanzada")} className="flex flex-row items-center gap-2 group cursor-pointer transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] rounded-md">
          <div className="relative w-5 h-5 overflow-clip shrink-0">
            <img
              className="absolute top-1 left-1 w-[7px] h-[13px] z-[1] transition-transform group-hover:-translate-x-0.5"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/3825da6bd_43917187a_2_2016.svg"
              alt="Back arrow part 1"
            />
            <img
              className="absolute top-2.5 left-1 w-[13px] h-0.5 z-[2] transition-transform group-hover:-translate-x-0.5"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/09ce62ded_d9b925ad3_2_2017.svg"
              alt="Back arrow part 2"
            />
          </div>
          <span className="text-figma-16 font-medium font-heading leading-figma-24 text-figma-text-1-3">
            Volver
          </span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col flex-1 p-6 w-full">
        {/* Title Section */}
        <section className="flex flex-col items-center pb-6 w-full shrink-0">
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold font-heading leading-[1.3333] text-center text-figma-text-1-2">
            Larga Exposición
          </h1>
          <p className="pt-2 text-figma-16 font-normal font-heading leading-figma-24 text-center text-figma-text-5">
            Técnicas de exposición prolongada
          </p>
        </section>

        {/* Card Section - Flex-1 allows it to fill space and center the card vertically */}
        <section className="flex-1 flex flex-col justify-center items-center pb-6 w-full min-h-[320px]">
          <div className="flex flex-col justify-center items-center w-full max-w-[344px] aspect-[344/320] bg-figma-accent rounded-[16px] overflow-clip px-6 transition-transform duration-500 hover:scale-[1.02]">
            <p className="text-figma-18 font-medium font-heading leading-figma-28 text-center text-[#00d3f3]">
              Larga Exposición
            </p>
          </div>
        </section>

        {/* Action Button */}
        <section className="w-full shrink-0 mt-auto">
          <button onClick={() => navigate("/Practica", { state: { topic: "larga_exposicion" } })} className="w-full h-14 bg-[#04d9d9] rounded-[39311300px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#03c2c2] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#04d9d9]/50 active:translate-y-0 active:shadow-md">
            <span className="text-figma-16 font-medium font-heading leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
              Marcar como completado
            </span>
          </button>
        </section>
      </main>
    </div>
  );
}