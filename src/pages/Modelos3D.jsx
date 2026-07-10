import React from "react";
import { motion } from "framer-motion";

export default function Modelos3D() {
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

  return (
    <div className="max-w-[405px] mx-auto w-full min-h-screen flex flex-col bg-figma-secondary relative shadow-2xl overflow-clip">
      {/* Header */}
      <header className="pt-[clamp(16px,13.6vw,55px)] px-6 pb-6 border-b border-figma-accent-2 shrink-0 bg-figma-secondary z-10 relative">
        <h1 className="text-[clamp(14px,5.93vw,24px)] font-bold font-heading leading-[1.3333] text-figma-text-1-2">
          Modelos 3D
        </h1>
        <p className="text-figma-14 font-normal font-heading leading-figma-20 text-figma-text-5 mt-1">
          Explora modelos de productos en 3D para tu practica con RA
        </p>
      </header>

      {/* Main Content Grid */}
      <main className="flex-1 overflow-y-auto overflow-x-clip">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4 pt-6 pr-6 pb-24 pl-[29px]"
        >
          {/* Card 1: Free */}
          <motion.article variants={itemVariants} className="bg-figma-primary-2 rounded-[16px] p-4 flex flex-col items-center h-full">
            <div className="bg-figma-accent-2 rounded-[14px] w-full aspect-square max-h-[119px] relative flex justify-center items-center overflow-clip">
              <img
                src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/cd89c323b_089040562_b73de6330e5a604e77326e2500c526f288485659.png"
                alt="Hoodie"
                className="w-[103px] h-[103px] object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-[#04d9d9] rounded-[4px] px-1.5 py-0.5 z-10">
                <span className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-secondary">
                  3D
                </span>
              </div>
            </div>
            <h3 className="text-figma-14 font-bold font-heading leading-figma-20 text-center text-figma-text-1-2 mt-3 w-full truncate">
              Hoodie
            </h3>
            <p className="text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-text-2-3 mt-1">
              Ropa
            </p>
          </motion.article>

          {/* Card 2: Free */}
          <motion.article variants={itemVariants} className="bg-figma-primary-2 rounded-[16px] p-4 flex flex-col items-center h-full">
            <div className="bg-figma-accent-2 rounded-[14px] w-full aspect-square max-h-[119px] relative flex justify-center items-center">
              <span className="text-[clamp(26px,11.85vw,48px)] font-medium font-heading leading-[1.0] text-figma-text-4">
                🛹
              </span>
              <div className="absolute bottom-2 right-2 bg-[#04d9d9] rounded-[4px] px-1.5 py-0.5 z-10">
                <span className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-secondary">
                  3D
                </span>
              </div>
            </div>
            <h3 className="text-figma-14 font-bold font-heading leading-figma-20 text-center text-figma-text-1-2 mt-3 w-full truncate">
              Lente 50mm f/1.8
            </h3>
            <p className="text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-text-2-3 mt-1">
              Lentes
            </p>
          </motion.article>

          {/* Card 3: Free */}
          <motion.article variants={itemVariants} className="bg-figma-primary-2 rounded-[16px] p-4 flex flex-col items-center h-full">
            <div className="bg-figma-accent-2 rounded-[14px] w-full aspect-square max-h-[119px] relative flex justify-center items-center">
              <span className="text-[clamp(26px,11.85vw,48px)] font-medium font-heading leading-[1.0] text-figma-text-4">
                🖥️
              </span>
              <div className="absolute bottom-2 right-2 bg-[#04d9d9] rounded-[4px] px-1.5 py-0.5 z-10">
                <span className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-secondary">
                  3D
                </span>
              </div>
            </div>
            <h3 className="text-figma-14 font-bold font-heading leading-figma-20 text-center text-figma-text-1-2 mt-3 w-full">
              Trípode Profesional
            </h3>
            <p className="text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-text-2-3 mt-1">
              Accesorios
            </p>
          </motion.article>

          {/* Card 4: Premium */}
          <motion.article variants={itemVariants} className="bg-figma-primary-2 rounded-[16px] p-4 flex flex-col items-center shadow-[inset_0_0_0_1px_#ffdf20] opacity-[0.9] relative h-full mt-2">
            <div className="absolute -top-2.5 right-3 bg-figma-border-2 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),_0px_1px_3px_0px_rgba(0,0,0,0.10)] rounded-[39311300px] px-2 py-0.5 z-20">
              <span className="text-figma-12 font-bold font-heading leading-figma-16 text-figma-secondary">
                ★ Premium
              </span>
            </div>
            <div className="bg-figma-surface-3 rounded-[14px] w-full aspect-square max-h-[119px] flex justify-center items-center relative z-10">
              <div className="w-10 h-10 relative">
                <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/10e4b512b_43ab31e86_82_150.svg" className="absolute top-[3px] left-3 w-5 h-[18px] z-[2]" alt="" />
                <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/3cec104c3_8a2a18f9d_82_149.svg" className="absolute top-[18px] left-[5px] w-[33px] h-[22px] z-[1]" alt="" />
              </div>
            </div>
            <h3 className="[filter:blur(16px)] text-figma-14 font-bold font-heading leading-figma-20 text-center text-figma-text-1-2 mt-3 w-full truncate">
              Flash Speedlite
            </h3>
            <p className="[filter:blur(16px)] text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-text-2-3 mt-1">
              Iluminación
            </p>
          </motion.article>

          {/* Card 5: Premium */}
          <motion.article variants={itemVariants} className="bg-figma-primary-2 rounded-[16px] p-4 flex flex-col items-center shadow-[inset_0_0_0_1px_#ffdf20] opacity-[0.9] relative h-full mt-2">
            <div className="absolute -top-2.5 right-3 bg-figma-border-2 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),_0px_1px_3px_0px_rgba(0,0,0,0.10)] rounded-[39311300px] px-2 py-0.5 z-20">
              <span className="text-figma-12 font-bold font-heading leading-figma-16 text-figma-secondary">
                ★ Premium
              </span>
            </div>
            <div className="bg-figma-surface-3 rounded-[14px] w-full aspect-square max-h-[119px] flex justify-center items-center relative z-10">
              <div className="w-10 h-10 relative">
                <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/66dae0608_c7c9f0adf_82_164.svg" className="absolute top-[3px] left-3 w-5 h-[18px] z-[2]" alt="" />
                <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/e8e4edc3a_720671773_82_163.svg" className="absolute top-[18px] left-[5px] w-[33px] h-[22px] z-[1]" alt="" />
              </div>
            </div>
            <h3 className="[filter:blur(16px)] text-figma-14 font-bold font-heading leading-figma-20 text-center text-figma-text-1-2 mt-3 w-full">
              Cámara Mirrorless Sony
            </h3>
            <p className="[filter:blur(16px)] text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-text-2-3 mt-1">
              Cámaras
            </p>
          </motion.article>

          {/* Card 6: Premium */}
          <motion.article variants={itemVariants} className="bg-figma-primary-2 rounded-[16px] p-4 flex flex-col items-center shadow-[inset_0_0_0_1px_#ffdf20] opacity-[0.9] relative h-full mt-2">
            <div className="absolute -top-2.5 right-3 bg-figma-border-2 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),_0px_1px_3px_0px_rgba(0,0,0,0.10)] rounded-[39311300px] px-2 py-0.5 z-20">
              <span className="text-figma-12 font-bold font-heading leading-figma-16 text-figma-secondary">
                ★ Premium
              </span>
            </div>
            <div className="bg-figma-surface-3 rounded-[14px] w-full aspect-square max-h-[119px] flex justify-center items-center relative z-10">
              <div className="w-10 h-10 relative">
                <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/ddc577142_f9e793355_82_178.svg" className="absolute top-[3px] left-3 w-5 h-[18px] z-[2]" alt="" />
                <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1134fddcb_671b9275e_82_177.svg" className="absolute top-[18px] left-[5px] w-[33px] h-[22px] z-[1]" alt="" />
              </div>
            </div>
            <h3 className="[filter:blur(16px)] text-figma-14 font-bold font-heading leading-figma-20 text-center text-figma-text-1-2 mt-3 w-full">
              Lente Gran Angular 24mm
            </h3>
            <p className="[filter:blur(16px)] text-figma-12 font-medium font-heading leading-figma-16 text-center text-figma-text-2-3 mt-1">
              Lentes
            </p>
          </motion.article>
        </motion.div>
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 w-full bg-figma-secondary border-t border-figma-accent-2 h-16 flex flex-row z-30 pb-safe">
        <button className="flex-1 flex flex-col justify-center items-center gap-1 hover:bg-black/5 transition-colors active:bg-black/10">
          <div className="w-6 h-6 relative">
            <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/e023dfea5_3c78f52f7_82_192.svg" className="absolute top-0.5 left-[3px] w-5 h-[21px] z-[2]" alt="" />
            <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/03ce8d060_92e80dec9_82_191.svg" className="absolute top-3 left-[9px] w-2 h-[11px] z-[1]" alt="" />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-text-2-3">
            Inicio
          </span>
        </button>

        <button className="flex-1 flex flex-col justify-center items-center gap-1 hover:bg-black/5 transition-colors active:bg-black/10">
          <div className="w-6 h-6 relative">
            <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/50ace05fd_9b39216e0_82_198.svg" className="absolute top-[3px] left-0.5 w-[22px] h-5 z-[2]" alt="" />
            <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/edf3dff8c_244488f83_82_197.svg" className="absolute top-[7px] left-3 w-0.5 h-4 z-[1]" alt="" />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-text-2-3">
            Progreso
          </span>
        </button>

        <button className="flex-1 flex flex-col justify-center items-center gap-1 hover:bg-black/5 transition-colors active:bg-black/10">
          <div className="w-6 h-6 relative">
            <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/a7c4ff141_89a8b8bb0_82_203.svg" className="absolute top-[3px] left-0.5 w-[22px] h-4 z-[1]" alt="" />
            <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/502a73217_1411e45fc_82_204.svg" className="absolute top-[21px] left-[5px] w-4 h-0.5 z-[2]" alt="" />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-text-2-3">
            Premium
          </span>
        </button>

        <button className="flex-1 flex flex-col justify-center items-center gap-1 hover:bg-black/5 transition-colors active:bg-black/10">
          <div className="w-6 h-6 relative">
            <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/368ee0ea4_97638d296_82_210.svg" className="absolute top-[3px] left-2 w-2.5 h-2.5 z-[2]" alt="" />
            <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/6122d8612_dc177679c_82_209.svg" className="absolute top-[15px] left-[5px] w-4 h-2 z-[1]" alt="" />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-text-2-3">
            Perfil
          </span>
        </button>
      </nav>
    </div>
  );
}
