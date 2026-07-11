import React from "react";
import { useNavigate } from "react-router-dom";

const tabs = [
  {
    label: "Inicio",
    path: "/PantallaDeInicio",
    icons: [
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/4feaa6209_e1371a8ea_1_386.svg", className: "absolute left-[3px] top-0.5 z-[2] h-[21px] w-5" },
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0c4d7d6e8_ce238c062_1_385.svg", className: "absolute left-[9px] top-3 z-[1] h-[11px] w-2" },
    ],
  },
  {
    label: "Progreso",
    path: "/Progreso",
    icons: [
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/aabd4b098_5f3a69b18_1_393.svg", className: "absolute left-0.5 top-[3px] z-[2] h-5 w-[22px]" },
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/49f7e0d4f_5d80a5fa7_1_392.svg", className: "absolute left-3 top-[7px] z-[1] h-4 w-0.5" },
    ],
  },
  {
    label: "Planes",
    path: "/Planes",
    icons: [
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/00e85871c_2cfbb8815_1_399.svg", className: "absolute left-0.5 top-[3px] z-[1] h-4 w-[22px]" },
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/4aa3d81ea_b53f5fc83_1_400.svg", className: "absolute left-[5px] top-[21px] z-[2] h-0.5 w-4" },
    ],
  },
  {
    label: "Perfil",
    path: "/Perfil",
    icons: [
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1e18f9914_ebfc310f6_1_407.svg", className: "absolute left-2 top-[3px] z-[2] h-2.5 w-2.5" },
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/fc2418a43_41cd20347_1_406.svg", className: "absolute left-[5px] top-[15px] z-[1] h-2 w-4" },
    ],
  },
];

export default function BottomNav({ active }) {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-30 flex h-16 w-full max-w-[392px] items-center justify-between border-t-[1px] border-[#e5e7eb] bg-figma-secondary px-2 pb-safe">
      {tabs.map((tab) => {
        const isActive = active === tab.label;
        return (
          <button
            key={tab.label}
            onClick={() => navigate(tab.path)}
            className="flex flex-1 flex-col items-center justify-center gap-1 py-2 hover:bg-black/5 transition-colors rounded-lg"
          >
            <div className="relative h-6 w-6 shrink-0 overflow-clip">
              {tab.icons.map((icon, i) => (
                <img key={i} className={icon.className} src={icon.src} alt={tab.label} />
              ))}
            </div>
            <span
              className={`font-heading text-figma-12 font-medium leading-figma-16 ${
                isActive ? "text-[#04d9d9]" : "text-figma-text-3-3"
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}