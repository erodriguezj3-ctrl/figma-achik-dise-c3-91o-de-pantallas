import React from "react";
import { motion } from "framer-motion";

export default function Pantalla1() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-figma-secondary overflow-clip">
      <div className="flex flex-col items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(33px,15.31vw,60px)] font-bold font-heading leading-[1.0] tracking-[-0.025em] text-[#04d9d9] text-center"
        >
          ACHIK
        </motion.h1>
      </div>
    </main>
  );
}
