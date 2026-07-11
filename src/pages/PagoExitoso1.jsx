import React from "react";
import { motion } from "framer-motion";

export default function PagoExitoso() {
  const navItems = [
    {
      label: "Inicio",
      active: false,
      images: [
        { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/35d82bd79_e0aa1e6f6_2_3652.svg", className: "w-5 h-[21px] absolute top-0.5 left-[3px] z-[2]" },
        { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/9cd4c1a35_6c26b321a_2_3651.svg", className: "w-2 h-[11px] absolute top-3 left-[9px] z-[1]" },
      ],
    },
    {
      label: "Progreso",
      active: false,
      images: [
        { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/027a99953_34a29d0ce_2_3659.svg", className: "w-[22px] h-5 absolute top-[3px] left-0.5 z-[2]" },
        { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/143f14e6b_ae84604dc_2_3658.svg", className: "w-0.5 h-4 absolute top-[7px] left-3 z-[1]" },
      ],
    },
    {
      label: "Planes",
      active: true,
      images: [
        { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/2f920f30c_87c3cf439_2_3665.svg", className: "w-[22px] h-4 absolute top-[3px] left-0.5 z-[1]" },
        { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0fc6d32ad_983e7ee08_2_3666.svg", className: "w-4 h-0.5 absolute top-[21px] left-[5px] z-[2]" },
      ],
    },
    {
      label: "Perfil",
      active: false,
      images: [
        { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/e1a855370_8bca61dfe_2_3673.svg", className: "w-2.5 h-2.5 absolute top-[3px] left-2 z-[2]" },
        { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/fb1d30d6f_f5ab5440f_2_3672.svg", className: "w-4 h-2 absolute top-[15px] left-[5px] z-[1]" },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-figma-secondary flex flex-col items-center justify-between font-sans">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-[392px] px-8 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Success Icon */}
          <div className="flex flex-row justify-center items-center h-24 w-24 bg-figma-secondary-2 rounded-full mb-6 shrink-0">
            <div className="shrink-0 grow-0 w-12 h-12 overflow-clip relative">
              <img
                className="w-11 h-11 absolute top-1 left-1 z-[1]"
                src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/925140772_1a2aca1be_2_3633.svg"
                alt="Success Checkmark Base"
              />
              <img
                className="w-4 h-3 absolute top-5 left-[18px] z-[2]"
                src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/a717d79c0_ed27ac1b1_2_3634.svg"
                alt="Success Checkmark Tick"
              />
            </div>
          </div>

          {/* Typography */}
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold font-heading leading-[1.3333] text-center text-figma-text-1-2 mb-2">
            ¡Pago exitoso!
          </h1>

          <p className="text-figma-16 font-normal font-figma-arimo leading-figma-24 text-center text-figma-text-2-3 mb-2">
            <span className="font-heading">Ya eres miembro </span>
            <span className="font-bold font-heading text-[#04d9d9]">Premium</span>
          </p>

          <p className="text-figma-14 font-normal font-heading leading-figma-20 text-center text-figma-text-1 mb-8">
            Mensual · $9.99/mes
          </p>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col justify-center items-center py-4 px-0 w-full max-w-[328px] bg-[#04d9d9] rounded-full shadow-sm transition-colors hover:bg-[#03c4c4]"
          >
            <span className="text-figma-16 font-bold font-heading leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
              Ir al inicio
            </span>
          </motion.button>
        </motion.div>
      </main>

      {/* Bottom Navigation */}
      <nav className="w-full bg-figma-secondary border-t border-[#e5e7eb] sticky bottom-0 z-50 pb-safe">
        <div className="grid grid-cols-4 h-16 w-full max-w-[392px] mx-auto">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="flex flex-col justify-center items-center gap-1 w-full h-full focus:outline-none group"
            >
              <div className="shrink-0 grow-0 w-6 h-6 overflow-clip relative transition-transform group-hover:scale-110 group-active:scale-95">
                {item.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    className={img.className}
                    src={img.src}
                    alt={`${item.label} icon part ${imgIndex + 1}`}
                  />
                ))}
              </div>
              <span
                className={`text-figma-12 font-medium font-heading leading-figma-16 text-center transition-colors ${
                  item.active ? "text-[#04d9d9]" : "text-figma-text-3-3 group-hover:text-gray-600"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
