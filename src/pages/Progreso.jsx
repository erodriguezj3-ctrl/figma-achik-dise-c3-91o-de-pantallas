import React from "react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";

const courses = [
  {
    title: "Fotografía Básica",
    progressText: "0 / 2 módulos",
    progressWidth: "0%",
    modules: [
      { title: "Triángulo de Exposición", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1e0486615_4ba917ef6_2_3204.svg" },
      { title: "Regla de los Tercios", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/b6eb8fc15_5ca928289_2_3210.svg" },
    ],
  },
  {
    title: "Fotografía Intermedia",
    progressText: "0 / 3 módulos",
    progressWidth: "0%",
    modules: [
      { title: "Profundidad de Campo", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/4f59a972c_3bd653cd3_2_3235.svg" },
      { title: "Efecto Bokeh", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/374d8061b_2d0f51872_2_3241.svg" },
      { title: "Puntos de Luz Clave", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/b536a98cc_f051b90b7_2_3247.svg" },
    ],
  },
  {
    title: "Fotografía Avanzada",
    progressText: "0 / 3 módulos",
    progressWidth: "0%",
    modules: [
      { title: "Larga Exposición", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/2dcb624f7_535951c79_2_3273.svg" },
      { title: "Fotografía Nocturna", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/6c171712f_db16c2a56_2_3279.svg" },
      { title: "Alta Velocidad", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/9a101a09b_b72e88b0e_2_3285.svg" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Progreso() {
  return (
    <main className="w-full max-w-[392px] mx-auto min-h-screen bg-figma-secondary flex flex-col relative overflow-clip font-heading">
      {/* Header */}
      <header className="flex flex-col p-6 border-b border-[#e5e7eb] bg-figma-secondary z-10 sticky top-0">
        <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-figma-text-1-2">
          Mi Progreso
        </h1>
        <p className="mt-1 text-figma-14 font-normal leading-figma-20 text-figma-text-5">
          Sigue tu avance en cada curso
        </p>
      </header>

      {/* Main Content */}
      <motion.div
        className="flex-1 flex flex-col p-6 gap-6 pb-[clamp(22px,22.4vw,88px)] overflow-y-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {courses.map((course, idx) => (
          <motion.section
            key={idx}
            variants={itemVariants}
            className="flex flex-col p-5 bg-figma-primary-2 rounded-[24px] w-full"
          >
            {/* Course Header */}
            <div className="flex flex-col w-full">
              <h2 className="text-figma-20 font-bold leading-figma-28 text-figma-text-1-2">
                {course.title}
              </h2>
              <div className="flex flex-row justify-between items-center mt-2 h-7 w-full">
                <span className="text-figma-14 font-normal leading-figma-20 text-figma-text-5">
                  Progreso
                </span>
                <span className="text-figma-14 font-medium leading-figma-20 text-figma-text-1-2">
                  {course.progressText}
                </span>
              </div>
              {/* Progress Bar */}
              <div className="mt-2 w-full bg-figma-border-3 rounded-[39311300px] h-2.5 overflow-clip">
                <div
                  className="bg-[#04d9d9] h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: course.progressWidth }}
                />
              </div>
            </div>

            {/* Modules List */}
            <div className="flex flex-col mt-4 gap-2 w-full">
              {course.modules.map((mod, mIdx) => (
                <div
                  key={mIdx}
                  className="flex flex-row items-center gap-3 p-3 bg-figma-secondary rounded-[16px] w-full"
                >
                  <div className="w-6 h-6 relative shrink-0 overflow-clip">
                    <img
                      className="w-[22px] h-[22px] absolute top-0.5 left-0.5 z-[1]"
                      src={mod.icon}
                      alt=""
                    />
                  </div>
                  <p className="text-figma-14 font-normal leading-figma-20 text-figma-text-2-3">
                    {mod.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </motion.div>

      <BottomNav active="Progreso" />
    </main>
  );
}