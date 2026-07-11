import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const MODEL_URLS = {
  patineta: "https://media.base44.com/files/public/6a4f1af577955f105897f7c2/63c27d6bb_PATINETAGLB.glb",
  melocoton: "https://media.base44.com/files/public/6a4f1af577955f105897f7c2/6fda1ba20_MELOCOTON.glb",
  computadora: "https://media.base44.com/files/public/6a4f1af577955f105897f7c2/e65f8803f_COMPUTADORAGLB.glb",
  astronauta: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
};

const models = [
  {
    id: 1,
    title: "Patineta",
    category: "Objeto",
    emoji: "🛹",
    isPremium: false,
    modelKey: "patineta",
  },
  {
    id: 2,
    title: "Melocotón",
    category: "Fruta",
    emoji: "🍑",
    isPremium: false,
    modelKey: "melocoton",
  },
  {
    id: 3,
    title: "Computadora",
    category: "Portátil",
    emoji: "🖥️",
    isPremium: false,
    modelKey: "computadora",
  },
  {
    id: 7,
    title: "Astronauta",
    category: "Espacio",
    emoji: "🧑‍🚀",
    isPremium: false,
    modelKey: "astronauta",
  },
  {
    id: 4,
    title: "Flash Speedlite",
    category: "Iluminación",
    isPremium: true,
    icons: ["https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1386e3871_56d40bd70_1_614.svg", "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1d04cf215_087dea2a8_1_613.svg"],
  },
  {
    id: 5,
    title: "Cámara Mirrorless Sony",
    category: "Cámaras",
    isPremium: true,
    icons: ["https://media.base44.com/images/public/6a4f1af577955f105897f7c2/ad154eb87_333295ed7_1_631.svg", "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/9318bfbc0_c0c5b0be6_1_630.svg"],
  },
  {
    id: 6,
    title: "Lente Gran Angular 24mm",
    category: "Lentes",
    isPremium: true,
    icons: ["https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7179a2ebd_402e307b5_1_648.svg", "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/240202d52_c1832b06b_1_647.svg"],
  },
];

const navItems = [
  { label: "Inicio", icons: ["https://media.base44.com/images/public/6a4f1af577955f105897f7c2/540285dc1_3aca3d825_1_662.svg", "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/b203f87db_a0d9b4e9d_1_661.svg"] },
  { label: "Progreso", icons: ["https://media.base44.com/images/public/6a4f1af577955f105897f7c2/e172ae5ea_2f09fbe5b_1_669.svg", "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/5137ff67f_b70009ae5_1_668.svg"] },
  { label: "Planes", icons: ["https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7d328eaa2_edaf5ef76_1_675.svg", "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/78e8a36fe_665184e30_1_676.svg"] },
  { label: "Perfil", icons: ["https://media.base44.com/images/public/6a4f1af577955f105897f7c2/ac6154563_970f7d48a_1_683.svg", "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/cc600577b_26aaa530b_1_682.svg"] },
];

export default function Modelo3D() {
  const navigate = useNavigate();
  const location = useLocation();
  const topic = location.state?.topic;
  const [modelo_seleccionado, setModeloSeleccionado] = useState(null);

  const handleSelectModel = (modelKey) => {
    setModeloSeleccionado(modelKey);
    const target = topic === "profundidad" || topic === "tercios" ? "/CamaraAr1" : "/Home";
    navigate(target, { state: { modelUrl: MODEL_URLS[modelKey], modelKey, topic } });
  };

  return (
    <div className="w-full max-w-[392px] mx-auto min-h-screen bg-figma-secondary flex flex-col relative pb-16 overflow-clip shadow-xl">
      {/* Header */}
      <header className="p-6 border-b border-figma-accent-2 flex flex-col gap-1 bg-figma-secondary z-10">
        <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold font-heading leading-[1.3333] text-figma-text-1-2">
          Modelos 3D
        </h1>
        <p className="text-figma-14 font-normal font-heading leading-figma-20 text-figma-text-5 max-w-[345px]">
          Explora modelos de productos en 3D para tu practica con RA
        </p>
      </header>

      {/* Content Grid */}
      <main className="p-6 grid grid-cols-2 gap-4 flex-1 content-start bg-figma-secondary">
        {models.map((model, i) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            onClick={!model.isPremium ? () => handleSelectModel(model.modelKey) : undefined}
            className={`flex flex-col items-center p-4 bg-figma-primary-2 rounded-[16px] relative w-full ${
              model.isPremium
                ? "shadow-[inset_0_0_0_1px_#ffdf20] opacity-[0.9] min-h-[236px]"
                : `shadow-[inset_0_0_0_1px_rgba(0,0,0,0.00)] min-h-[216px] cursor-pointer active:scale-95 transition-transform ${
                    modelo_seleccionado === model.modelKey
                      ? "shadow-[inset_0_0_0_2px_#04d9d9]"
                      : ""
                  }`
            }`}
          >
            {/* Premium Badge */}
            {model.isPremium && (
              <div className="absolute -top-[7px] -right-[10px] flex flex-row justify-start items-center gap-1 py-0.5 px-2 bg-figma-border-2 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),_0px_1px_3px_0px_rgba(0,0,0,0.10)] rounded-[39311300px] h-5 z-20">
                <p className="text-figma-12 font-bold font-heading leading-figma-16 text-center text-figma-secondary whitespace-nowrap">
                  ★ Premium
                </p>
              </div>
            )}

            {/* Image Container */}
            <div
              className={`w-full max-w-[130px] aspect-square rounded-[14px] flex items-center justify-center relative overflow-hidden shrink-0 ${
                model.isPremium ? "bg-figma-surface-3" : "bg-figma-accent-2"
              }`}
            >
              {!model.isPremium ? (
                <>
                  <span className="text-[clamp(26px,12.24vw,48px)] font-medium font-heading leading-[1.0] text-figma-text-4">
                    {model.emoji}
                  </span>
                  <div className="absolute bottom-2 right-2 py-1 px-2 bg-[#04d9d9] rounded-[4px] z-10">
                    <p className="text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-secondary">
                      3D
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-10 h-10 relative">
                  <img
                    className="w-5 h-[18px] absolute top-[3px] left-3 z-[2]"
                    src={model.icons[0]}
                    alt="Lock Top"
                  />
                  <img
                    className="w-[33px] h-[22px] absolute top-[18px] left-[5px] z-[1]"
                    src={model.icons[1]}
                    alt="Lock Base"
                  />
                </div>
              )}
            </div>

            {/* Text Content */}
            <div className="mt-3 flex flex-col items-center w-full relative z-10">
              <p
                className={`text-figma-14 font-bold font-heading leading-figma-20 text-center text-figma-text-1-2 w-full ${
                  model.isPremium ? "[filter:blur(16px)]" : ""
                }`}
              >
                {model.title}
              </p>
              <p
                className={`mt-1 text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-text-2-3 w-full ${
                  model.isPremium ? "[filter:blur(16px)]" : ""
                }`}
              >
                {model.category}
              </p>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full bg-figma-secondary border-t border-figma-accent-2 h-16 grid grid-cols-4 z-50">
        {navItems.map((item, i) => (
          <button
            key={i}
            className="flex flex-col items-center justify-center gap-1 h-full w-full hover:bg-black/5 active:bg-black/10 transition-colors"
          >
            <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
              {i === 0 && (
                <>
                  <img
                    className="w-5 h-[21px] absolute top-0.5 left-[3px] z-[2]"
                    src={item.icons[0]}
                    alt=""
                  />
                  <img
                    className="w-2 h-[11px] absolute top-3 left-[9px] z-[1]"
                    src={item.icons[1]}
                    alt=""
                  />
                </>
              )}
              {i === 1 && (
                <>
                  <img
                    className="w-[22px] h-5 absolute top-[3px] left-0.5 z-[2]"
                    src={item.icons[0]}
                    alt=""
                  />
                  <img
                    className="w-0.5 h-4 absolute top-[7px] left-3 z-[1]"
                    src={item.icons[1]}
                    alt=""
                  />
                </>
              )}
              {i === 2 && (
                <>
                  <img
                    className="w-[22px] h-4 absolute top-[3px] left-0.5 z-[1]"
                    src={item.icons[0]}
                    alt=""
                  />
                  <img
                    className="w-4 h-0.5 absolute top-[21px] left-[5px] z-[2]"
                    src={item.icons[1]}
                    alt=""
                  />
                </>
              )}
              {i === 3 && (
                <>
                  <img
                    className="w-2.5 h-2.5 absolute top-[3px] left-2 z-[2]"
                    src={item.icons[0]}
                    alt=""
                  />
                  <img
                    className="w-4 h-2 absolute top-[15px] left-[5px] z-[1]"
                    src={item.icons[1]}
                    alt=""
                  />
                </>
              )}
            </div>
            <span className="text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-text-2-3">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}