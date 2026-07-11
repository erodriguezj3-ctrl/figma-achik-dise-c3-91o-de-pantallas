import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";

export default function Planes() {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const features = [
    { text: "Acceso a todos los cursos", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/ab0d9f9fa_8b57cf123_64_6074.svg" },
    { text: "Fotografía Intermedia completa", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/6bb2d08ab_5543249cf_64_6098.svg" },
    { text: "Certificados de finalización", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/39682d9ea_db9080d68_64_6129.svg" },
    { text: "Práctica ilimitada en RA", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/cd6c1c3f9_e55168856_64_6158.svg" },
    { text: "Todos los modelos 3D", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/30cdddb20_01a45e5a1_64_6193.svg" },
    { text: "Soporte prioritario", icon: "https://media.base44.com/images/public/6a4f1af577955f105897f7c2/d362d5554_0d9cdd35a_64_6222.svg" },
  ];

  return (
    <div className="w-full max-w-[392px] mx-auto bg-figma-secondary min-h-screen flex flex-col relative font-sans text-[#111827] overflow-clip">
      {/* Top Banner */}
      <div className="flex flex-col items-center justify-center py-6 px-4 bg-[linear-gradient(90deg,_rgba(254,252,232,1.00)_0%,_rgba(254,249,194,1.00)_100%)] border-b border-[#e5e7eb] shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative shrink-0">
            <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/34d8599a8_55156c3cb_64_5877.svg" alt="Crown part 1" className="absolute top-[3px] left-px w-[29px] h-[21px] z-[1]" />
            <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/88530599d_b50f4efa6_64_5878.svg" alt="Crown part 2" className="absolute top-[27px] left-[5px] w-[21px] h-[3px] z-[2]" />
          </div>
          <h1 className="text-[22px] font-bold tracking-tight text-[#111827]">Premium</h1>
        </div>
        <p className="text-[13px] text-[#4b5563] mt-1 font-medium">Desbloquea todo el potencial de ACHIK</p>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-[clamp(22px,22.4vw,88px)]">
        <motion.div
          className="p-6 flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Plans Section */}
          <section className="flex flex-col gap-4">
            <motion.h2 variants={itemVariants} className="text-[18px] font-bold text-[#111827]">
              Elige tu plan
            </motion.h2>

            {/* Monthly Plan Card */}
            <motion.div variants={itemVariants} className="flex flex-col items-center p-6 bg-figma-secondary rounded-[24px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),_0px_10px_15px_-3px_rgba(0,0,0,0.10),_inset_0_0_0_1px_#e5e7eb]">
              <h3 className="text-[20px] font-bold text-[#111827]">Mensual</h3>
              <p className="text-[13px] text-[#6b7280] mt-0.5">Perfecto para empezar</p>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-[36px] font-extrabold tracking-tight text-[#111827]">$9.99</span>
                <span className="text-[14px] text-[#6b7280] font-medium">/ mes</span>
              </div>
              <button onClick={() => navigate("/Pago1")} className="mt-5 w-full bg-[#04d9d9] text-white text-[14px] font-bold py-4 rounded-[39311300px] hover:bg-[#03c0c0] transition-colors active:scale-[0.98]">
                SUSCRIBIRME
              </button>
            </motion.div>

            {/* Annual Plan Card */}
            <motion.div variants={itemVariants} className="relative flex flex-col items-center p-6 bg-figma-surface-4 rounded-[24px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),_0px_10px_15px_-3px_rgba(0,0,0,0.10),_inset_0_0_0_1px_#04d9d9] mt-3">
              {/* Badge */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#04d9d9] text-white text-[10px] font-bold px-3 py-1 rounded-[39311300px] flex items-center gap-1.5 uppercase tracking-wider shadow-sm z-10">
                <div className="w-3 h-3 relative shrink-0">
                  <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/74364aa4f_e6dadf02b_64_6036.svg" alt="Star" className="absolute top-0 left-0 w-[11px] h-[11px]" />
                  <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/038ae1baf_b9d645059_64_6037.svg" alt="Star detail" className="absolute top-px left-[9px] w-px h-[3px]" />
                  <img src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/2b35d9a42_0849b0a18_64_6038.svg" alt="Star detail" className="absolute top-0.5 left-2 w-[3px] h-px" />
                </div>
                MÁS POPULAR
              </div>

              <h3 className="text-[20px] font-bold text-[#111827] mt-1">Anual</h3>
              <p className="text-[13px] text-[#6b7280] mt-0.5">Ahorra 33%</p>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-[36px] font-extrabold tracking-tight text-[#111827]">$79.99</span>
                <span className="text-[14px] text-[#6b7280] font-medium">/ año</span>
              </div>
              <button onClick={() => navigate("/Pago2")} className="mt-5 w-full bg-[#04d9d9] text-white text-[14px] font-bold py-4 rounded-[39311300px] hover:bg-[#03c0c0] transition-colors active:scale-[0.98]">
                SUSCRIBIRME
              </button>
            </motion.div>
          </section>

          {/* Features Section */}
          <section className="flex flex-col gap-4">
            <motion.h2 variants={itemVariants} className="text-[18px] font-bold text-[#111827]">
              ¿Qué incluye Premium?
            </motion.h2>

            <motion.ul variants={itemVariants} className="bg-figma-primary-2 rounded-[24px] p-5 flex flex-col gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-[39311300px] bg-[#04d9d9] flex items-center justify-center shrink-0 mt-0.5">
                    <img src={feature.icon} alt="Check" className="w-[13px] h-[9px]" />
                  </div>
                  <span className="text-[15px] text-[#374151] leading-snug pt-0.5">{feature.text}</span>
                </li>
              ))}
            </motion.ul>
          </section>
        </motion.div>
      </div>

      <BottomNav active="Planes" />
    </div>
  );
}