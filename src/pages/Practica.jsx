import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function Practica() {
  const navigate = useNavigate();
  const location = useLocation();
  const topic = location.state?.topic;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-figma-secondary p-8 font-heading">
      <motion.div
        className="flex w-full max-w-[328px] flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col items-center gap-2 text-center"
        >
          <h1 className="text-[clamp(16px,7.65vw,30px)] font-bold leading-[1.2] text-[#04d9d9]">
            ¡EXCELENTE!
          </h1>
          <p className="text-figma-20 font-normal leading-figma-28 text-figma-text-1-3">
            Ahora practica lo aprendido escogiendo un modelo 3D para la RA
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div variants={itemVariants} className="mt-12 w-full">
          <button onClick={() => navigate("/Modelo3D", { state: { topic } })} className="group relative flex aspect-[328/262] w-full flex-col items-center justify-center gap-4 rounded-[24px] bg-[#04d9d9] p-8 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),_0px_10px_15px_-3px_rgba(0,0,0,0.10),_inset_0_0_0_1px_#04d9d9] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
            {/* Icon Circle */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-figma-accent-3 transition-transform duration-500 group-hover:rotate-12">
              <div className="relative h-8 w-8 overflow-clip">
                <img
                  className="absolute left-[3px] top-[5px] z-[1] h-6 w-[29px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/44694b1fe_c51a6eebb_1_523.svg"
                  alt="Camera Body"
                />
                <img
                  className="absolute left-3 top-[13px] z-[2] h-[11px] w-[11px]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/9cc3d21e0_4ac7a671d_1_524.svg"
                  alt="Camera Lens"
                />
              </div>
            </div>

            {/* Card Text */}
            <div className="flex flex-col items-center text-center">
              <p className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-figma-secondary">
                Practica lo Adquirido con
              </p>
              <div className="mt-1 flex flex-col items-center justify-start">
                <p
                  className="text-[clamp(26px,12.24vw,48px)] font-black leading-[1.0] text-figma-secondary"
                  style={{ textShadow: "0px 4px 8px rgba(0,0,0,0.15)" }}
                >
                  RA
                </p>
              </div>
            </div>
          </button>
        </motion.div>

        {/* Footer Action */}
        <motion.div variants={itemVariants} className="mt-8">
          <button onClick={() => navigate("/PantallaDeInicio")} className="text-figma-14 font-medium uppercase leading-figma-20 tracking-[0.3px] text-figma-text-5 transition-colors hover:text-figma-text-1-3">
            Volver al inicio
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}