import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { incrementPhotoCount } from "@/hooks/useProgress";

const PLACEHOLDER = "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/6a0eb88c1_c98fceb85_8a602125f68c0779100cc5a8ea21704227e09b28.png";

export default function Captura2() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { image, iso, shutter, aperture, topic } = state || {};
  const dateStr = format(new Date(), "d MMM yyyy", { locale: es });
  const metadata = image
    ? `ISO ${iso} · ${shutter} · ${aperture}`
    : "ISO 100 · 1/100 · f/5.6";
  const photoSrc = image || PLACEHOLDER;

  useEffect(() => {
    if (image) {
      incrementPhotoCount();
    }
  }, [image]);

  return (
    <main className="w-full max-w-[392px] mx-auto h-screen bg-figma-accent flex flex-col relative overflow-hidden font-heading">
      {/* Top Navigation */}
      <header className="flex justify-between items-center p-4 relative z-20 shrink-0">
        <button onClick={() => navigate("/Home")} className="flex items-center gap-2 py-2 px-4 bg-figma-highlight rounded-[39311300px] transition-opacity hover:opacity-80">
          <div className="shrink-0 w-5 h-5 relative overflow-clip">
            <img
              className="absolute top-1 left-1 w-[7px] h-[13px]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/f01ddac20_806e408c1_61_493.svg"
              alt="Back"
            />
            <img
              className="absolute top-2.5 left-1 w-[13px] h-[2px]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/b7ad699fa_7b3d69fe3_61_494.svg"
              alt=""
            />
          </div>
          <span className="text-figma-16 font-medium leading-figma-24 text-figma-secondary">
            Volver
          </span>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 py-1 px-3 bg-figma-surface-2 rounded-[39311300px]">
          <span className="text-figma-12 font-bold leading-figma-16 tracking-[1.2px] text-[#00d3f3]">
            MODO RA
          </span>
        </div>
      </header>

      {/* Main Content Card */}
      <div className="flex-1 flex flex-col mx-4 mb-6 rounded-[10px] shadow-[inset_0_0_0_1px_rgba(0,211,243,0.60)] bg-figma-border relative z-10 overflow-hidden">
        {/* Card Header */}
        <div className="flex justify-between items-center pt-4 px-4 pb-3 shrink-0">
          <h1 className="text-figma-16 font-bold leading-figma-24 text-figma-secondary">
            Foto capturada
          </h1>
          <div className="bg-figma-highlight-2 rounded-[39311300px] py-1 px-3 flex items-center justify-center">
            <span className="text-figma-12 font-bold leading-figma-16 text-[#04d9d9]">
              ACHIK · RA
            </span>
          </div>
        </div>

        {/* Photo Area */}
        <div className="px-4 flex-1 flex flex-col min-h-0">
          <div className="relative flex-1 rounded-[16px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.20)] overflow-clip w-full bg-figma-surface">
            {/* Captured photo */}
            <img
              className="absolute inset-0 w-full h-full object-cover object-center z-0"
              src={photoSrc}
              alt="Captured 3D Render"
            />

            {/* Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.20)_0%,_rgba(0,0,0,0.00)_25%,_rgba(0,0,0,0.00)_75%,_rgba(0,0,0,0.35)_100%)] z-10 pointer-events-none" />

            {/* Photo Metadata */}
            <div className="absolute top-4 right-4 z-20">
              <span className="text-figma-12 font-normal leading-figma-16 text-figma-text-3-2">
                {dateStr}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-figma-12 font-normal leading-figma-16 text-figma-text-2-2">
                {metadata}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 flex flex-col gap-3 shrink-0">
          {/* Primary Actions Row */}
          <div className="flex gap-3">
            <button className="flex-1 flex justify-center items-center gap-2 py-3 bg-figma-primary rounded-[16px] transition-transform active:scale-95">
              <div className="shrink-0 w-5 h-5 relative overflow-clip">
                <img
                  className="absolute top-0.5 left-2.5 w-0.5 h-3"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/9cb4831a2_57806892e_61_470.svg"
                  alt=""
                />
                <img
                  className="absolute top-2 left-1.5 w-2.5 h-1.5"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/e9992413a_429d9a059_61_469.svg"
                  alt=""
                />
                <img
                  className="absolute top-3 left-0.5 w-[17px] h-[7px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/bfd614e74_ba984135e_61_468.svg"
                  alt=""
                />
              </div>
              <span className="text-figma-14 font-medium leading-figma-20 text-figma-secondary">
                Guardar
              </span>
            </button>
            <button className="flex-1 flex justify-center items-center gap-2 py-3 bg-figma-primary rounded-[16px] transition-transform active:scale-95">
              <div className="shrink-0 w-5 h-5 relative overflow-clip">
                <img
                  className="absolute top-0.5 left-3 w-[7px] h-[7px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/38c939d54_4eaa0b115_61_475.svg"
                  alt=""
                />
                <img
                  className="absolute top-[5px] left-[7px] w-[7px] h-[5px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/acb4eb4ed_d6859a89e_61_479.svg"
                  alt=""
                />
                <img
                  className="absolute top-[7px] left-0.5 w-[7px] h-[7px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/8114aa36b_1780abbe2_61_476.svg"
                  alt=""
                />
                <img
                  className="absolute top-[11px] left-[7px] w-[7px] h-[5px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/8b248e98c_67d44bf5c_61_478.svg"
                  alt=""
                />
                <img
                  className="absolute top-[13px] left-3 w-[7px] h-[7px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/c7020e75b_5f94ef897_61_477.svg"
                  alt=""
                />
              </div>
              <span className="text-figma-14 font-medium leading-figma-20 text-figma-secondary">
                Compartir
              </span>
            </button>
          </div>

          {/* Secondary Actions Row */}
          <div className="flex gap-3">
            <button onClick={() => navigate(-1)} className="flex-1 flex justify-center items-center gap-2 py-4 bg-[#04d9d9] rounded-[16px] transition-transform active:scale-95">
              <div className="shrink-0 w-4 h-4 relative overflow-clip">
                <img
                  className="absolute top-0.5 left-0.5 w-[13px] h-[13px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/99bcc4231_02cf30247_61_485.svg"
                  alt=""
                />
                <img
                  className="absolute top-0.5 left-0.5 w-[5px] h-[5px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/4d91ca895_305f67450_61_486.svg"
                  alt=""
                />
              </div>
              <span className="text-figma-16 font-bold leading-figma-24 text-figma-secondary">
                Otra foto
              </span>
            </button>
            <button onClick={() => {
              if (topic === "luces" || topic === "alta_velocidad") {
                navigate("/PantallaDeInicio", { state: {} });
                return;
              }
              navigate(topic === "profundidad" || topic === "bokeh" ? "/FotografiaIntermedia" : topic === "tercios" ? "/PantallaDeInicio" : (topic === "larga_exposicion" || topic === "nocturna") ? "/FotografiaAvanzada" : "/FotografiaBasica");
            }} className="flex-1 flex justify-center items-center gap-2 py-4 bg-figma-color-9 rounded-[16px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.30)] transition-transform active:scale-95 hover:bg-white/5">
              <span className="text-figma-16 font-bold leading-figma-24 text-figma-secondary">
                Siguiente →
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}