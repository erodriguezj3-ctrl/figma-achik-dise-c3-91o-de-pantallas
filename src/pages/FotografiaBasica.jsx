import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";
import { VIDEO_SOURCES } from "@/config/videos";

export default function FotografiaBasica() {
  const navigate = useNavigate();
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
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="w-full min-h-screen bg-figma-secondary flex justify-center">
      <motion.main
        className="w-full max-w-[392px] flex flex-col bg-figma-secondary shadow-sm overflow-clip"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.header
          variants={itemVariants}
          className="flex flex-row justify-start items-center gap-2 p-6 w-full border-b border-[#e5e7eb] bg-figma-secondary z-10 sticky top-0"
        >
          <button onClick={() => navigate("/PantallaDeInicio")} className="flex items-center justify-center w-5 h-5 relative overflow-clip hover:opacity-70 transition-opacity cursor-pointer">
            <img
              className="w-[7px] h-[13px] absolute top-1 left-1 z-[1]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/8eff3cbcb_025d55880_1_422.svg"
              alt="Back arrow part 1"
            />
            <img
              className="w-[13px] h-0.5 absolute top-2.5 left-1 z-[2]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/89c47ec90_f1de0bb18_1_423.svg"
              alt="Back arrow part 2"
            />
          </button>
          <p className="text-figma-16 font-medium font-heading leading-figma-24 text-figma-text-1-3">
            Volver
          </p>
        </motion.header>

        {/* Main Content */}
        <div className="flex flex-col p-6 w-full">
          {/* Title Section */}
          <motion.section
            variants={itemVariants}
            className="flex flex-col items-center w-full pb-6"
          >
            <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold font-heading leading-[1.3333] text-center text-figma-text-1-2">
              FOTOGRAFÍA BÁSICA
            </h1>
            <p className="text-figma-16 font-normal font-heading leading-figma-24 text-center text-figma-text-5 mt-2">
              Triángulo de Exposición y Composición
            </p>
          </motion.section>

          {/* Video Introductorio */}
          <motion.section variants={itemVariants} className="w-full pb-6">
            <div className="w-full aspect-[344/280] rounded-[16px] overflow-clip">
              <VideoPlayer src={VIDEO_SOURCES.intro_basica} className="w-full h-full" />
            </div>
          </motion.section>

          {/* Course Topics */}
          <motion.section variants={itemVariants} className="flex flex-col w-full">
            <h2 className="text-figma-18 font-bold font-heading leading-figma-28 text-figma-text-1-2 pb-3">
              Temas del curso:
            </h2>

            <div className="flex flex-col gap-3 w-full">
              {/* Topic Card 1 (Expanded/Active State) */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => navigate("/TraianguloDeExposiciN", { state: { topic: "triangulo" } })}
                className="flex flex-col w-full bg-figma-surface-4 rounded-[16px] shadow-[inset_0_0_0_1px_#04d9d9] p-[17px] gap-2 cursor-pointer transition-colors hover:bg-figma-surface-4/80"
              >
                <h3 className="text-figma-16 font-bold font-heading leading-figma-24 text-figma-text-1-2">
                  Triángulo de Exposición
                </h3>
                <div className="flex flex-row flex-wrap gap-2">
                  <span className="py-1 px-2 bg-[#04d9d9] rounded-[39311300px] text-figma-12 font-medium font-heading leading-figma-16 text-figma-secondary">
                    ISO
                  </span>
                  <span className="py-1 px-2 bg-[#04d9d9] rounded-[39311300px] text-figma-12 font-medium font-heading leading-figma-16 text-figma-secondary">
                    Obturación
                  </span>
                  <span className="py-1 px-2 bg-[#04d9d9] rounded-[39311300px] text-figma-12 font-medium font-heading leading-figma-16 text-figma-secondary">
                    Diafragma
                  </span>
                </div>
                <p className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-5 mt-1">
                  ISO, velocidad de obturación y apertura del diafragma
                </p>
              </motion.div>

              {/* Topic Card 2 (Collapsed/Inactive State) */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => navigate("/ReglaDeTercio", { state: { topic: "tercios" } })}
                className="flex flex-col w-full bg-figma-secondary rounded-[16px] shadow-[inset_0_0_0_1px_#04d9d9] p-[17px] gap-1 cursor-pointer transition-colors hover:bg-gray-50"
              >
                <h3 className="text-figma-16 font-bold font-heading leading-figma-24 text-figma-text-1-2">
                  Regla de los Tercios
                </h3>
                <p className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-5">
                  Composición básica
                </p>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </motion.main>
    </div>
  );
}