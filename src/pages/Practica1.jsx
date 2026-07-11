import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Practica1() {
  const navigate = useNavigate();
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
    <main className="min-h-screen w-full bg-figma-secondary flex flex-col items-center justify-center p-8 overflow-clip">
      <motion.div
        className="w-full max-w-[328px] flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Header Section */}
        <motion.div className="flex flex-col items-center w-full" variants={itemVariants}>
          <h1 className="text-[clamp(16px,7.65vw,30px)] font-bold font-heading leading-[1.2] text-center text-[#04d9d9]">
            ¡EXCELENTE!
          </h1>
          <p className="mt-2 text-figma-20 font-normal font-heading leading-figma-28 text-center text-figma-text-1-3 max-w-[329px]">
            Ahora practica lo aprendido escogiendo un modelo 3D para la RA
          </p>
        </motion.div>

        {/* Interactive Card */}
        <motion.div className="w-full mt-12 mb-8" variants={itemVariants}>
          <button onClick={() => navigate("/Modelo3D")} className="w-full min-h-[262px] bg-[#04d9d9] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),_0px_10px_15px_-3px_rgba(0,0,0,0.10),_inset_0_0_0_1px_#04d9d9] rounded-[24px] p-[clamp(16px,8.4vw,33px)] flex flex-col items-center justify-center gap-4 transition-transform hover:scale-[1.02] active:scale-[0.98]">

            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-figma-accent-3 rounded-[39311300px] shrink-0">
              <div className="w-8 h-8 relative overflow-clip">
                <img
                  className="w-[29px] h-6 absolute top-[5px] left-[3px] z-[1]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/fa96ed982_2fa2c9ba9_2_78.svg"
                  alt="Camera Body"
                />
                <img
                  className="w-[11px] h-[11px] absolute top-[13px] left-3 z-[2]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/934c07030_3b2ca42ec_2_79.svg"
                  alt="Camera Lens"
                />
              </div>
            </div>

            {/* Card Text */}
            <div className="flex flex-col items-center w-full">
              <p className="text-[clamp(14px,6.12vw,24px)] font-bold font-heading leading-[1.3333] text-center text-figma-secondary w-full">
                Practica lo Adquirido con
              </p>
              <div className="mt-1 w-full flex justify-center drop-shadow-[0px_4px_8px_rgba(0,0,0,0.15)]">
                <p className="text-[clamp(26px,12.24vw,48px)] font-black font-heading leading-[1.0] text-center text-figma-secondary">
                  RA
                </p>
              </div>
            </div>

          </button>
        </motion.div>

        {/* Footer Action */}
        <motion.div className="w-full h-11 flex items-center justify-center" variants={itemVariants}>
          <button onClick={() => navigate("/PantallaDeInicio")} className="text-figma-14 font-medium font-heading leading-figma-20 tracking-[0.3px] text-center uppercase text-figma-text-5 hover:text-figma-text-1-3 transition-colors px-4 py-2">
            Volver al inicio
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}