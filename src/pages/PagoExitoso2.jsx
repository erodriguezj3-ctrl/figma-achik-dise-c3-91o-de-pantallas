import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";

export default function PagoExitoso() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoHome = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await base44.auth.updateMe({ subscription: "premium", subscription_plan: "annual" });
    } catch (e) {}
    setLoading(false);
    navigate("/PantallaDeInicio");
  };

  return (
    <div className="w-full max-w-[392px] mx-auto min-h-[100dvh] sm:min-h-[853px] flex flex-col bg-figma-secondary relative shadow-2xl sm:rounded-[40px] sm:my-8 overflow-clip font-sans">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 pb-8">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex flex-row justify-center items-center h-24 w-24 bg-figma-secondary-2 rounded-full mb-6"
        >
          <div className="relative w-12 h-12 overflow-clip">
            <img
              className="w-11 h-11 absolute top-1 left-1 z-[1]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/07bc5176e_118aa661a_2_3802.svg"
              alt="Success Circle"
            />
            <motion.img
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-4 h-3 absolute top-5 left-[18px] z-[2]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/46711996f_8d13e0b90_2_3803.svg"
              alt="Checkmark"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-[clamp(14px,6.12vw,24px)] font-bold font-heading leading-[1.3333] text-center text-figma-text-1-2 mb-2"
        >
          ¡Pago exitoso!
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-figma-16 font-normal font-figma-arimo leading-figma-24 text-center text-figma-text-2-3 mb-2"
        >
          <span className="font-heading">Ya eres miembro </span>
          <span className="font-bold font-heading text-[#04d9d9]">Premium</span>
        </motion.p>

        {/* Plan Details */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-figma-14 font-normal font-heading leading-figma-20 text-center text-figma-text-1 mb-8"
        >
          Mensual · $9.99/mes
        </motion.p>

        {/* Action Button */}
        <motion.button
          onClick={handleGoHome}
          disabled={loading}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex flex-col justify-center items-center py-4 px-0 w-full max-w-[328px] bg-[#04d9d9] rounded-[39311300px] cursor-pointer hover:bg-[#03c2c2] transition-colors shadow-sm disabled:opacity-60"
        >
          <span className="text-figma-16 font-bold font-heading leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
            {loading ? "Activando..." : "Ir al inicio"}
          </span>
        </motion.button>
      </main>

      {/* Bottom Navigation */}
      <nav className="w-full h-16 bg-figma-secondary border-t-[1px] border-[#e5e7eb] flex flex-row items-center justify-between px-2 shrink-0 z-10 pb-safe">
        {/* Nav Item: Inicio */}
        <button onClick={() => navigate("/PantallaDeInicio")} className="flex-1 flex flex-col justify-center items-center gap-1 h-full group cursor-pointer">
          <div className="relative w-6 h-6 overflow-clip">
            <img
              className="w-5 h-[21px] absolute top-0.5 left-[3px] z-[2] group-hover:opacity-80 transition-opacity"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/03bdbb025_e8d4f62a8_2_3817.svg"
              alt="Inicio Icon Part 1"
            />
            <img
              className="w-2 h-[11px] absolute top-3 left-[9px] z-[1] group-hover:opacity-80 transition-opacity"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/5ff55798a_eeed4008d_2_3816.svg"
              alt="Inicio Icon Part 2"
            />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-text-3-3 group-hover:text-gray-600 transition-colors">
            Inicio
          </span>
        </button>

        {/* Nav Item: Progreso */}
        <button onClick={() => navigate("/Progreso")} className="flex-1 flex flex-col justify-center items-center gap-1 h-full group cursor-pointer">
          <div className="relative w-6 h-6 overflow-clip">
            <img
              className="w-[22px] h-5 absolute top-[3px] left-0.5 z-[2] group-hover:opacity-80 transition-opacity"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/63abea098_88f789cbc_2_3822.svg"
              alt="Progreso Icon Part 1"
            />
            <img
              className="w-0.5 h-4 absolute top-[7px] left-3 z-[1] group-hover:opacity-80 transition-opacity"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/33d7012ef_5185ae8cc_2_3821.svg"
              alt="Progreso Icon Part 2"
            />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-text-3-3 group-hover:text-gray-600 transition-colors">
            Progreso
          </span>
        </button>

        {/* Nav Item: Planes (Active) */}
        <button onClick={() => navigate("/Planes")} className="flex-1 flex flex-col justify-center items-center gap-1 h-full cursor-pointer">
          <div className="relative w-6 h-6 overflow-clip">
            <img
              className="w-[22px] h-4 absolute top-[3px] left-0.5 z-[1]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/56af908ab_af5925112_2_3826.svg"
              alt="Planes Icon Part 1"
            />
            <img
              className="w-4 h-0.5 absolute top-[21px] left-[5px] z-[2]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0f7dee969_e2f081622_2_3827.svg"
              alt="Planes Icon Part 2"
            />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-center text-[#04d9d9]">
            Planes
          </span>
        </button>

        {/* Nav Item: Perfil */}
        <button onClick={() => navigate("/Perfil")} className="flex-1 flex flex-col justify-center items-center gap-1 h-full group cursor-pointer">
          <div className="relative w-6 h-6 overflow-clip">
            <img
              className="w-2.5 h-2.5 absolute top-[3px] left-2 z-[2] group-hover:opacity-80 transition-opacity"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/d02ef3d7b_2fd53adc2_2_3832.svg"
              alt="Perfil Icon Part 1"
            />
            <img
              className="w-4 h-2 absolute top-[15px] left-[5px] z-[1] group-hover:opacity-80 transition-opacity"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/ffd6d1148_47bafaae4_2_3831.svg"
              alt="Perfil Icon Part 2"
            />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-text-3-3 group-hover:text-gray-600 transition-colors">
            Perfil
          </span>
        </button>
      </nav>
    </div>
  );
}