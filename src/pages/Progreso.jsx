import React from "react";
import { motion } from "framer-motion";

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

const navItems = [
  {
    label: "Inicio",
    active: false,
    color: "text-figma-text-2-3",
    icons: [
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/21c93400f_900aeb8bd_2_3299.svg", className: "w-5 h-[21px] absolute top-0.5 left-[3px] z-[2]" },
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/930169f23_05d9684e9_2_3298.svg", className: "w-2 h-[11px] absolute top-3 left-[9px] z-[1]" },
    ],
  },
  {
    label: "Progreso",
    active: true,
    color: "text-[#04d9d9]",
    icons: [
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/b1b071e0e_31fba6e97_2_3306.svg", className: "w-[22px] h-5 absolute top-[3px] left-0.5 z-[2]" },
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/e8b6f5d52_708163040_2_3305.svg", className: "w-0.5 h-4 absolute top-[7px] left-3 z-[1]" },
    ],
  },
  {
    label: "Planes",
    active: false,
    color: "text-figma-text-2-3",
    icons: [
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/a5e7a226e_6d6e940dc_2_3312.svg", className: "w-[22px] h-4 absolute top-[3px] left-0.5 z-[1]" },
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1ba4b61ff_6d6adeced_2_3313.svg", className: "w-4 h-0.5 absolute top-[21px] left-[5px] z-[2]" },
    ],
  },
  {
    label: "Perfil",
    active: false,
    color: "text-figma-text-2-3",
    icons: [
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/242f7149a_981051299_2_3320.svg", className: "w-2.5 h-2.5 absolute top-[3px] left-2 z-[2]" },
      { src: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/bfc57da52_e28d3941e_2_3319.svg", className: "w-4 h-2 absolute top-[15px] left-[5px] z-[1]" },
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

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-[392px] bg-figma-secondary border-t border-[#e5e7eb] h-16 z-50 flex flex-row">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            className="flex-1 flex flex-col justify-center items-center gap-1 h-full"
          >
            <div className="w-6 h-6 relative shrink-0 overflow-clip">
              {item.icons.map((icon, iIdx) => (
                <img key={iIdx} className={icon.className} src={icon.src} alt="" />
              ))}
            </div>
            <span className={`text-figma-12 font-medium leading-figma-16 text-center ${item.color}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </main>
  );
}
