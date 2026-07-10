import React from "react";
import { motion } from "framer-motion";

export default function RecuperarContrasena() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <main className="min-h-[100dvh] w-full flex flex-col items-center bg-figma-secondary font-heading">
      <div className="w-full max-w-[392px] min-h-[100dvh] flex flex-col p-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col flex-1 w-full"
        >
          {/* Top Navigation */}
          <motion.div variants={itemVariants} className="mb-8">
            <button
              type="button"
              aria-label="Volver"
              className="flex flex-row justify-center items-center h-10 w-10 bg-figma-muted-3 rounded-full hover:bg-black/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-figma-text-1-2"
            >
              <div className="w-5 h-5 relative overflow-clip">
                <img
                  className="w-[7px] h-[13px] absolute top-1 left-1 z-[1]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/f4c007474_47e5b1cc7_2_3023.svg"
                  alt=""
                  aria-hidden="true"
                />
                <img
                  className="w-[13px] h-0.5 absolute top-2.5 left-1 z-[2]"
                  src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/ee1a7aa0a_b27eb0d5e_2_3024.svg"
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </button>
          </motion.div>

          {/* Main Content Wrapper */}
          <div className="flex flex-col flex-1 w-full">
            {/* Header Section */}
            <motion.div variants={itemVariants} className="flex flex-col mb-8">
              <div className="flex flex-row justify-center items-center h-16 w-16 bg-figma-secondary-2 rounded-full mb-4">
                <div className="w-8 h-8 relative overflow-clip">
                  <img
                    className="w-[29px] h-6 absolute top-[5px] left-[3px] z-[1]"
                    src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/c9bccb340_8254d33e1_2_3029.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  <img
                    className="w-[29px] h-[11px] absolute top-[9px] left-[3px] z-[2]"
                    src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/239750176_6d1246e85_2_3030.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-figma-text-1-2 mb-2">
                ¿Olvidaste tu contraseña?
              </h1>
              <p className="text-figma-14 font-normal leading-figma-20 text-figma-text-2-3 max-w-[329px]">
                Ingresa tu correo y te enviaremos un código para recuperarla.
              </p>
            </motion.div>

            {/* Form Section */}
            <motion.div variants={itemVariants} className="flex flex-col mb-6 w-full">
              <label className="flex flex-col w-full relative group">
                <span className="text-figma-14 font-medium leading-figma-20 text-figma-text-5 ml-4 mb-0.5 transition-colors group-focus-within:text-figma-text-1-2">
                  Correo electrónico
                </span>
                <input
                  type="email"
                  defaultValue="correo@ejemplo.com"
                  placeholder="correo@ejemplo.com"
                  className="w-full py-4 px-6 bg-[#04d9d9] rounded-full text-figma-16 font-normal leading-figma-19 text-figma-text-2-2 placeholder:text-figma-text-2-2/70 focus:outline-none focus:ring-2 focus:ring-figma-text-1-2/20 transition-all"
                />
              </label>
            </motion.div>

            {/* Bottom Action Area */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-end flex-1 w-full mt-auto pt-4"
            >
              <button
                type="submit"
                className="flex flex-col justify-center items-center py-4 px-6 w-full bg-figma-accent-4 rounded-full hover:opacity-90 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-figma-accent-4"
              >
                <span className="text-figma-16 font-bold leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
                  Enviar código
                </span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
