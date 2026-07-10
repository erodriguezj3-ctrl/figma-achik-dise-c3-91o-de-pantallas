import React from "react";
import { motion } from "framer-motion";

export default function Bienvenida() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-figma-secondary p-8">
      <motion.div
        className="w-full max-w-[328px] flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Section */}
        <motion.div variants={itemVariants} className="w-full flex justify-center mb-[clamp(16px,16.3vw,64px)]">
          <h1 className="text-[clamp(26px,12.24vw,48px)] font-bold font-heading leading-[1.0] text-center text-[#04d9d9]">
            ACHIK
          </h1>
        </motion.div>

        {/* Actions Section */}
        <motion.div variants={itemVariants} className="w-full flex flex-col gap-4">
          {/* Login Button */}
          <button className="w-full h-14 bg-[#04d9d9] rounded-full flex items-center justify-center text-figma-16 font-medium font-heading leading-figma-24 tracking-[0.4px] uppercase text-figma-secondary transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] focus-visible:ring-offset-2 focus-visible:ring-offset-figma-secondary">
            Iniciar Sesión
          </button>

          {/* Divider */}
          <div className="flex flex-row items-center gap-4 w-full py-2">
            <div className="flex-1 h-px bg-figma-border-3" />
            <span className="text-figma-14 font-normal font-heading leading-figma-20 text-figma-text-2-3">
              or
            </span>
            <div className="flex-1 h-px bg-figma-border-3" />
          </div>

          {/* Register Button */}
          <button className="w-full h-14 bg-[#04d9d9] rounded-full flex items-center justify-center text-figma-16 font-medium font-heading leading-figma-24 tracking-[0.4px] uppercase text-figma-secondary transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] focus-visible:ring-offset-2 focus-visible:ring-offset-figma-secondary">
            Registrarse
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
