import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";

export default function PantallaDeInicio() {
  const navigate = useNavigate();
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    base44.auth.me().then((user) => {
      if (user?.subscription === "premium") setIsPremium(true);
    }).catch(() => {});
  }, []);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[392px] flex-col bg-figma-secondary relative shadow-sm">
      {/* Header */}
      <header className="sticky top-0 z-20 flex w-full shrink-0 items-center justify-between border-b-[1px] border-figma-border-3 bg-figma-secondary p-6">
        <p className="font-heading text-[clamp(16px,7.65vw,30px)] font-bold leading-[1.2] text-figma-accent">
          ACHIK
        </p>
        <button className="flex items-center justify-center rounded-[39311300px] p-2 hover:bg-black/5 transition-colors">
          <div className="relative h-6 w-6 shrink-0 overflow-clip">
            <img
              className="absolute left-2 top-[3px] z-[2] h-2.5 w-2.5"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/ed4c96a0c_a66a090da_1_292.svg"
              alt="User Head"
            />
            <img
              className="absolute left-[5px] top-[15px] z-[1] h-2 w-4"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/2eaaff4e5_934dc2cbe_1_291.svg"
              alt="User Body"
            />
          </div>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex w-full flex-1 flex-col pb-[clamp(20px,20.4vw,80px)]">
        {/* Progress Section */}
        <section className="w-full p-6 pb-0">
          <div className="flex w-full flex-col rounded-[16px] bg-figma-primary-2 p-6">
            <div className="flex w-full items-start justify-between">
              <div className="flex flex-col">
                <p className="font-heading text-figma-14 font-normal leading-figma-20 text-figma-text-5">
                  Nivel Actual
                </p>
                <p className="mt-1 font-heading text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-figma-accent">
                  Fotógrafo Principiante
                </p>
              </div>
              <div className="flex h-16 w-[60px] shrink-0 items-center justify-center rounded-[16px] bg-[#04d9d9]">
                <div className="relative h-10 w-10 shrink-0 overflow-clip">
                  <img
                    className="absolute left-2.5 top-[3px] z-[2] h-[23px] w-[23px]"
                    src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/8d1440617_66ccbde02_1_306.svg"
                    alt="Badge Ribbon Top"
                  />
                  <img
                    className="absolute left-3 top-[21px] z-[1] h-[19px] w-5"
                    src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/2f2e651e1_1152e7b3b_1_305.svg"
                    alt="Badge Ribbon Bottom"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex w-full flex-col gap-2">
              <p className="font-heading text-figma-14 font-medium leading-figma-20 text-figma-text-1-3 uppercase">
                Progreso
              </p>
              <div className="h-3 w-full shrink-0 overflow-clip rounded-[39311300px] bg-figma-border-3">
                <div className="h-full w-0 bg-[#04d9d9] transition-all duration-500 ease-out" />
              </div>
            </div>
          </div>
        </section>

        {/* Course Selection Section */}
        <section className="flex w-full flex-col p-6 pt-8">
          <h2 className="mb-4 font-heading text-figma-20 font-bold leading-figma-28 text-figma-accent uppercase">
            ¿Qué quieres aprender?
          </h2>

          <div className="flex flex-col gap-4">
            {/* Basic Course Card */}
            <button onClick={() => navigate("/FotografiaBasica")} className="relative flex w-full items-start gap-4 rounded-[24px] bg-[#04d9d9] p-[25px] text-left shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),_0px_10px_15px_-3px_rgba(0,0,0,0.10),_inset_0_0_0_1px_#04d9d9] transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <div className="relative mt-1 h-8 w-8 shrink-0 overflow-clip">
                <img
                  className="absolute left-[3px] top-[5px] z-[1] h-6 w-[29px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/bd8b9dd68_ab1b7f544_1_325.svg"
                  alt="Camera Body"
                />
                <img
                  className="absolute left-3 top-[13px] z-[2] h-[11px] w-[11px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/218344849_0a009f7df_1_326.svg"
                  alt="Camera Lens"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading text-figma-20 font-bold leading-figma-28 text-figma-secondary uppercase">
                  Fotografía Básica
                </h3>
                <p className="mt-2 font-heading text-figma-14 font-medium leading-figma-20 text-figma-text-2-4">
                  Triángulo de exposición y composición
                </p>
              </div>
            </button>

            {/* Intermediate Course Card */}
            <button className={`relative flex w-full items-start gap-4 rounded-[24px] bg-figma-accent-4 p-[25px] text-left ${isPremium ? "" : "opacity-[0.85]"} shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),_0px_10px_15px_-3px_rgba(0,0,0,0.10),_inset_0_0_0_1px_#9ca3af] transition-transform hover:scale-[1.02] active:scale-[0.98]`}>
              <div className="relative mt-1 h-8 w-8 shrink-0 overflow-clip">
                <img
                  className="absolute left-[3px] top-[5px] z-[1] h-6 w-[29px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0a02ab324_076a7e8c1_1_347.svg"
                  alt="Camera Body"
                />
                <img
                  className="absolute left-3 top-[13px] z-[2] h-[11px] w-[11px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/20f9489c5_35accf88a_1_348.svg"
                  alt="Camera Lens"
                />
              </div>
              <div className="flex flex-col pr-20">
                <h3 className="font-heading text-figma-20 font-bold leading-figma-28 text-figma-secondary uppercase">
                  Fotografía Intermedia
                </h3>
                <p className="mt-2 font-heading text-figma-14 font-medium leading-figma-20 text-figma-text-2-4">
                  Profundidad de campo y balance de blancos
                </p>
              </div>
              {/* Premium Badge */}
              <div className={`absolute right-[17px] top-[17px] flex h-6 items-center gap-1 rounded-[39311300px] bg-[#fdc700] px-3 py-1 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),_0px_4px_6px_-1px_rgba(0,0,0,0.10)] ${isPremium ? "hidden" : ""}`}>
                <div className="relative h-4 w-4 shrink-0 overflow-clip">
                  <img
                    className="absolute left-px top-0.5 z-[1] h-[11px] w-[15px]"
                    src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/854bbb1e2_fa75e517b_1_339.svg"
                    alt="Crown Top"
                  />
                  <img
                    className="absolute left-[3px] top-3.5 z-[2] h-px w-[11px]"
                    src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/626d7975b_9aaa37ed1_1_340.svg"
                    alt="Crown Base"
                  />
                </div>
                <span className="font-heading text-figma-12 font-bold leading-figma-16 text-figma-accent">
                  PREMIUM
                </span>
              </div>
            </button>

            {/* Advanced Course Card */}
            <button className={`relative flex w-full items-start gap-4 rounded-[24px] bg-figma-accent-4 p-[25px] text-left ${isPremium ? "" : "opacity-[0.85]"} shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),_0px_10px_15px_-3px_rgba(0,0,0,0.10),_inset_0_0_0_1px_#9ca3af] transition-transform hover:scale-[1.02] active:scale-[0.98]`}>
              <div className="relative mt-1 h-8 w-8 shrink-0 overflow-clip">
                <img
                  className="absolute left-[3px] top-[5px] z-[1] h-6 w-[29px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/61f305774_932b628c9_1_369.svg"
                  alt="Camera Body"
                />
                <img
                  className="absolute left-3 top-[13px] z-[2] h-[11px] w-[11px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/ec22e300f_77956e0d3_1_370.svg"
                  alt="Camera Lens"
                />
              </div>
              <div className="flex flex-col pr-20">
                <p className="whitespace-pre-line font-figma-inter text-figma-20 font-semibold leading-figma-28 text-figma-secondary">
                  FOTOGRAFIA{"\n"}AVANZADA{"\n"}
                  <span className="text-figma-12 font-normal">
                    Larga Exposicón y Alta Exposicón
                  </span>
                </p>
              </div>
              {/* Premium Badge */}
              <div className={`absolute right-[17px] top-[17px] flex h-6 items-center gap-1 rounded-[39311300px] bg-[#fdc700] px-3 py-1 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),_0px_4px_6px_-1px_rgba(0,0,0,0.10)] ${isPremium ? "hidden" : ""}`}>
                <div className="relative h-4 w-4 shrink-0 overflow-clip">
                  <img
                    className="absolute left-px top-0.5 z-[1] h-[11px] w-[15px]"
                    src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/dee21ce12_8cbf86628_1_361.svg"
                    alt="Crown Top"
                  />
                  <img
                    className="absolute left-[3px] top-3.5 z-[2] h-px w-[11px]"
                    src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/a7c17a08e_77defd8a4_1_362.svg"
                    alt="Crown Base"
                  />
                </div>
                <span className="font-heading text-figma-12 font-bold leading-figma-16 text-figma-accent">
                  PREMIUM
                </span>
              </div>
            </button>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 z-30 flex h-16 w-full max-w-[392px] items-center justify-between border-t-[1px] border-[#e5e7eb] bg-figma-secondary px-2 pb-safe">
        <button className="flex flex-1 flex-col items-center justify-center gap-1 py-2 hover:bg-black/5 transition-colors rounded-lg">
          <div className="relative h-6 w-6 shrink-0 overflow-clip">
            <img
              className="absolute left-[3px] top-0.5 z-[2] h-[21px] w-5"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/4feaa6209_e1371a8ea_1_386.svg"
              alt="Home Icon"
            />
            <img
              className="absolute left-[9px] top-3 z-[1] h-[11px] w-2"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0c4d7d6e8_ce238c062_1_385.svg"
              alt="Home Door"
            />
          </div>
          <span className="font-heading text-figma-12 font-medium leading-figma-16 text-[#04d9d9]">
            Inicio
          </span>
        </button>

        <button className="flex flex-1 flex-col items-center justify-center gap-1 py-2 hover:bg-black/5 transition-colors rounded-lg">
          <div className="relative h-6 w-6 shrink-0 overflow-clip">
            <img
              className="absolute left-0.5 top-[3px] z-[2] h-5 w-[22px]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/aabd4b098_5f3a69b18_1_393.svg"
              alt="Book Icon"
            />
            <img
              className="absolute left-3 top-[7px] z-[1] h-4 w-0.5"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/49f7e0d4f_5d80a5fa7_1_392.svg"
              alt="Bookmark"
            />
          </div>
          <span className="font-heading text-figma-12 font-medium leading-figma-16 text-figma-text-3-3">
            Progreso
          </span>
        </button>

        <button className="flex flex-1 flex-col items-center justify-center gap-1 py-2 hover:bg-black/5 transition-colors rounded-lg">
          <div className="relative h-6 w-6 shrink-0 overflow-clip">
            <img
              className="absolute left-0.5 top-[3px] z-[1] h-4 w-[22px]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/00e85871c_2cfbb8815_1_399.svg"
              alt="Plans Icon Top"
            />
            <img
              className="absolute left-[5px] top-[21px] z-[2] h-0.5 w-4"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/4aa3d81ea_b53f5fc83_1_400.svg"
              alt="Plans Icon Bottom"
            />
          </div>
          <span className="font-heading text-figma-12 font-medium leading-figma-16 text-figma-text-3-3">
            Planes
          </span>
        </button>

        <button className="flex flex-1 flex-col items-center justify-center gap-1 py-2 hover:bg-black/5 transition-colors rounded-lg">
          <div className="relative h-6 w-6 shrink-0 overflow-clip">
            <img
              className="absolute left-2 top-[3px] z-[2] h-2.5 w-2.5"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1e18f9914_ebfc310f6_1_407.svg"
              alt="Profile Head"
            />
            <img
              className="absolute left-[5px] top-[15px] z-[1] h-2 w-4"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/fc2418a43_41cd20347_1_406.svg"
              alt="Profile Body"
            />
          </div>
          <span className="font-heading text-figma-12 font-medium leading-figma-16 text-figma-text-3-3">
            Perfil
          </span>
        </button>
      </nav>
    </div>
  );
}