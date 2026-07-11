import React from "react";

export default function ReglaDeTercio() {
  return (
    <main className="w-full max-w-[392px] mx-auto flex flex-col min-h-screen bg-figma-secondary font-heading">
      {/* Header */}
      <header className="flex items-center p-6 w-full border-b border-[#e5e7eb] shrink-0">
        <button
          className="flex items-center gap-2 group focus:outline-none rounded-md focus-visible:ring-2 focus-visible:ring-[#04d9d9] focus-visible:ring-offset-2"
          aria-label="Volver"
        >
          <div className="relative w-5 h-5 shrink-0 overflow-clip transition-transform group-hover:-translate-x-1">
            <img
              className="absolute top-1 left-1 w-[7px] h-[13px] z-[1]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/f2708f439_4bd4006d1_2_3976.svg"
              alt=""
              aria-hidden="true"
            />
            <img
              className="absolute top-2.5 left-1 w-[13px] h-[2px] z-[2]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0b22de487_66dff8a96_2_3977.svg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <span className="text-figma-16 font-medium leading-figma-24 text-figma-text-1-3">
            Volver
          </span>
        </button>
      </header>

      {/* Main Content */}
      <section className="flex flex-col flex-1 p-6 w-full">

        {/* Title Group */}
        <div className="flex flex-col items-center w-full pb-6 shrink-0">
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-center text-figma-text-1-2">
            Regla de los Tercios
          </h1>
          <p className="mt-2 text-figma-16 font-normal leading-figma-24 text-center text-figma-text-5">
            Composición básica
          </p>
        </div>

        {/* Media Placeholder Area */}
        <div className="flex-1 flex flex-col items-center justify-center w-full pb-6 min-h-[320px]">
          <div className="w-full max-w-[344px] min-h-[320px] bg-figma-surface rounded-[16px] overflow-clip shrink-0 shadow-sm" />
        </div>

        {/* Action Button */}
        <button
          className="w-full h-14 bg-[#04d9d9] rounded-full flex items-center justify-center shrink-0 transition-all hover:bg-[#03c2c2] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] focus-visible:ring-offset-2"
        >
          <span className="text-figma-16 font-medium leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
            Marcar como completado
          </span>
        </button>

      </section>
    </main>
  );
}
