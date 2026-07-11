import React from "react";
import { motion } from "framer-motion";

export default function FotografiaAvanzada() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const courseTopics = [
    {
      title: "Larga Exposición",
      description: "Técnicas de exposición prolongada",
    },
    {
      title: "Fotografía Nocturna",
      description: "Captura en condiciones de baja luz",
    },
    {
      title: "Alta Velocidad",
      description: "Congelación del movimiento",
    },
  ];

  return (
    <main className="w-full max-w-md mx-auto min-h-screen bg-figma-secondary flex flex-col font-heading">
      {/* Header */}
      <header className="flex items-center p-6 w-full border-b border-[#e5e7eb] shrink-0 bg-figma-secondary sticky top-0 z-10">
        <button className="flex items-center gap-2 hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] rounded-md">
          <div className="shrink-0 w-5 h-5 relative overflow-clip">
            <img
              className="w-[7px] h-[13px] absolute top-1 left-1 z-[1]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/077fb4899_840521dc8_2_1942.svg"
              alt=""
              aria-hidden="true"
            />
            <img
              className="w-[13px] h-0.5 absolute top-2.5 left-1 z-[2]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/4770caa30_bb069bf99_2_1943.svg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <span className="text-figma-16 font-medium leading-figma-24 text-figma-text-1-3">
            Volver
          </span>
        </button>
      </header>

      {/* Main Content */}
      <motion.div
        className="flex flex-col p-6 w-full grow"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title Section */}
        <motion.section variants={itemVariants} className="flex flex-col items-center mb-6 w-full">
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-center text-figma-text-1-2">
            FOTOGRAFÍA AVANZADA
          </h1>
          <p className="mt-2 text-figma-16 font-normal leading-figma-24 text-center text-figma-text-5">
            Larga Exposición y Alta Velocidad
          </p>
        </motion.section>

        {/* Hero Media */}
        <motion.section variants={itemVariants} className="w-full mb-6">
          <div className="w-full aspect-[344/194] bg-figma-accent rounded-[16px] overflow-clip shadow-sm relative group cursor-pointer">
            <img
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1eea09981_52931c677_ce6a26a88401c55139833af1f167da166cb4f27e.png"
              alt="Larga Exposición"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-transparent" />
          </div>
        </motion.section>

        {/* Course Topics List */}
        <motion.section variants={itemVariants} className="flex flex-col w-full">
          <h2 className="text-figma-18 font-bold leading-figma-28 text-figma-text-1-2 mb-3">
            Temas del curso:
          </h2>

          <div className="flex flex-col gap-3 w-full">
            {courseTopics.map((topic, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.015, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col justify-center text-left bg-figma-secondary rounded-[16px] shadow-[inset_0_0_0_1px_#04d9d9] w-full p-[17px] gap-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04d9d9] focus-visible:ring-offset-2"
              >
                <h3 className="text-figma-16 font-bold leading-figma-24 text-figma-text-1-2">
                  {topic.title}
                </h3>
                <p className="text-figma-14 font-medium leading-figma-20 text-figma-text-5">
                  {topic.description}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
