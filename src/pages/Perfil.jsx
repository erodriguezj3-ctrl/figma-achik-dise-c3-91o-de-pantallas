import React from "react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";

export default function Perfil() {
  return (
    <div className="flex flex-col min-h-screen bg-figma-secondary w-full max-w-[392px] mx-auto relative font-heading">
      {/* Header */}
      <header className="sticky top-0 z-20 flex flex-col justify-center p-6 w-full border-b border-[#e5e7eb] bg-figma-secondary">
        <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-figma-text-1-2">
          Mi Perfil
        </h1>
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 flex flex-col pb-[clamp(22px,22.4vw,88px)]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col w-full"
        >
          {/* Profile Card Section */}
          <section className="p-6 w-full">
            <div className="flex flex-col items-center p-6 w-full bg-figma-primary-2 rounded-[24px]">
              {/* Avatar */}
              <div className="flex justify-center items-center h-24 w-24 bg-[#04d9d9] rounded-full mb-4">
                <div className="w-12 h-12 relative overflow-clip">
                  <img className="w-5 h-5 absolute top-1.5 left-4 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/fd93352ef_98561d51f_2_3849.svg" alt="" aria-hidden="true" />
                  <img className="w-8 h-4 absolute top-[30px] left-2.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/4e4ea4847_fcbe66a43_2_3848.svg" alt="" aria-hidden="true" />
                </div>
              </div>

              {/* Name */}
              <h2 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-center text-figma-accent mb-2">
                Usuario ACHIK
              </h2>

              {/* Badge */}
              <div className="flex flex-row justify-center items-center gap-2 py-2 px-4 bg-figma-secondary rounded-full">
                <div className="w-5 h-5 relative overflow-clip shrink-0">
                  <img className="w-3 h-3 absolute top-0.5 left-[5px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/bd7e32ed9_6cba2025b_2_3856.svg" alt="" aria-hidden="true" />
                  <img className="w-2.5 h-[9px] absolute top-[11px] left-1.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/d0ecc3c21_ff3cdeccc_2_3855.svg" alt="" aria-hidden="true" />
                </div>
                <span className="text-figma-16 font-medium leading-figma-24 text-center text-figma-text-1-3">
                  Fotógrafo Principiante
                </span>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="px-6 pb-6 w-full">
            <h3 className="text-figma-18 font-bold leading-figma-28 text-figma-text-1-2 mb-4">
              Estadísticas
            </h3>
            <div className="flex flex-col gap-3 w-full">
              {/* Stat Item 1 - Progress Bar */}
              <div className="flex flex-col p-4 bg-figma-primary-2 rounded-[16px] w-full gap-3">
                <div className="flex flex-row items-center gap-3">
                  <div className="flex justify-center items-center h-10 w-10 bg-[#04d9d9] rounded-full shrink-0">
                    <div className="w-5 h-5 relative overflow-clip">
                      <img className="w-3 h-3 absolute top-0.5 left-[5px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7ef961ebc_2ff782f74_2_3873.svg" alt="" aria-hidden="true" />
                      <img className="w-2.5 h-[9px] absolute top-[11px] left-1.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/91a121287_0eb5d9855_2_3872.svg" alt="" aria-hidden="true" />
                    </div>
                  </div>
                  <span className="text-figma-16 font-normal leading-figma-24 text-figma-text-1-3">
                    Puntos Totales
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="bg-gray-100 h-3 w-full rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-3 rounded-full w-0 transition-all duration-500" />
                  </div>
                  <span className="text-figma-12 font-medium leading-figma-16 text-figma-text-1-3">
                    0 temas completados
                  </span>
                </div>
              </div>

              {/* Stat Item 2 */}
              <div className="flex flex-row justify-between items-center p-4 bg-figma-primary-2 rounded-[16px] w-full">
                <div className="flex flex-row items-center gap-3">
                  <div className="flex justify-center items-center h-10 w-10 bg-[#04d9d9] rounded-full shrink-0">
                    <div className="w-5 h-5 relative overflow-clip">
                      <img className="w-[18px] h-[17px] absolute top-0.5 left-0.5 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0f2ca5007_7c6066a1c_2_3885.svg" alt="" aria-hidden="true" />
                      <img className="w-0.5 h-[13px] absolute top-1.5 left-2.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1aafabb3e_6b57fa04b_2_3884.svg" alt="" aria-hidden="true" />
                    </div>
                  </div>
                  <span className="text-figma-16 font-normal leading-figma-24 text-figma-text-1-3">
                    Cursos Completados
                  </span>
                </div>
                <span className="text-figma-16 font-bold leading-figma-24 text-figma-accent">
                  0
                </span>
              </div>

              {/* Stat Item 3 */}
              <div className="flex flex-row justify-between items-center p-4 bg-figma-primary-2 rounded-[16px] w-full">
                <div className="flex flex-row items-center gap-3">
                  <div className="flex justify-center items-center h-10 w-10 bg-[#04d9d9] rounded-full shrink-0">
                    <div className="w-5 h-5 relative overflow-clip">
                      <img className="w-[18px] h-[15px] absolute top-[3px] left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/af4adae2b_b75311714_2_3896.svg" alt="" aria-hidden="true" />
                      <img className="w-[7px] h-[7px] absolute top-2 left-[7px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/ced6a9a70_6bb957306_2_3897.svg" alt="" aria-hidden="true" />
                    </div>
                  </div>
                  <span className="text-figma-16 font-normal leading-figma-24 text-figma-text-1-3">
                    Fotos Capturadas
                  </span>
                </div>
                <span className="text-figma-16 font-bold leading-figma-24 text-figma-accent">
                  0
                </span>
              </div>
            </div>
          </section>

          {/* Logout Button Section */}
          <section className="px-6 w-full">
            <motion.button
              whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-row justify-center items-center gap-3 p-4 w-full rounded-[16px] shadow-[inset_0_0_0_1px_#d1d5dc] bg-transparent transition-colors"
            >
              <div className="w-5 h-5 relative overflow-clip shrink-0">
                <img className="w-[7px] h-[17px] absolute top-0.5 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/3f24e5b56_6b971baa4_2_3910.svg" alt="" aria-hidden="true" />
                <img className="w-1.5 h-2.5 absolute top-1.5 left-[13px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0e1913c64_a75277b32_2_3911.svg" alt="" aria-hidden="true" />
                <img className="w-3 h-0.5 absolute top-2.5 left-[7px] z-[3]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/f8ed2dcc2_8cb5cf89d_2_3912.svg" alt="" aria-hidden="true" />
              </div>
              <span className="text-figma-16 font-medium leading-figma-24 text-center text-figma-text-1-3">
                Cerrar Sesión
              </span>
            </motion.button>
          </section>
        </motion.div>
      </main>

      <BottomNav active="Perfil" />
    </div>
  );
}