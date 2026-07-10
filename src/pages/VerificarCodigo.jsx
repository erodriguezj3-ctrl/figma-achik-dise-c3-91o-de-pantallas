import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function VerificarCodigo() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance to next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <main className="min-h-[100dvh] w-full flex flex-col items-center bg-figma-secondary font-sans selection:bg-[#04d9d9] selection:text-white">
      <div className="w-full max-w-[392px] p-8 flex flex-col flex-1">

        {/* Header / Navigation */}
        <div className="pb-[clamp(16px,8.2vw,32px)] w-full flex justify-start">
          <button
            onClick={() => navigate("/RecuperarContraseA")}
            className="flex flex-row justify-center items-center h-10 w-10 bg-figma-muted-3 rounded-[39311300px] hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#04d9d9] focus:ring-offset-2 focus:ring-offset-figma-secondary"
            aria-label="Volver"
          >
            <div className="shrink-0 grow-0 w-5 h-5 overflow-clip relative">
              <img className="w-[7px] h-[13px] absolute top-1 left-1 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/d2ad71482_c2a50d23c_2_3060.svg" alt="" aria-hidden="true" />
              <img className="w-[13px] h-0.5 absolute top-2.5 left-1 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/38af1fd4b_3b9ee7fc1_2_3061.svg" alt="" aria-hidden="true" />
            </div>
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full flex-1"
        >
          {/* Title & Context */}
          <motion.div variants={itemVariants} className="flex flex-col pb-[clamp(16px,8.2vw,32px)] w-full">
            <div className="flex flex-row justify-center items-center h-16 w-16 bg-figma-secondary-2 rounded-[39311300px] mb-4">
              <div className="shrink-0 grow-0 w-8 h-8 overflow-clip relative">
                <img className="w-[29px] h-6 absolute top-[5px] left-[3px] z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0c9c5321e_63fd194b4_2_3066.svg" alt="" aria-hidden="true" />
                <img className="w-[29px] h-[11px] absolute top-[9px] left-[3px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/af0ff5ffd_ea6e06db4_2_3067.svg" alt="" aria-hidden="true" />
              </div>
            </div>

            <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold font-heading leading-[1.3333] text-figma-text-1-2 mb-2">
              Revisa tu correo
            </h1>

            <p className="text-figma-14 font-normal font-figma-arimo leading-figma-20 text-figma-text-2-3">
              <span className="font-heading">Enviamos un código de 4 dígitos a </span>
              <span className="font-medium font-heading text-[#364153]">ecrj0808@gmail.com</span>
            </p>
          </motion.div>

          {/* OTP Input Grid */}
          <motion.div variants={itemVariants} className="flex flex-row justify-between gap-4 pb-[clamp(16px,8.2vw,32px)] w-full">
            {[0, 1, 2, 3].map((i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={otp[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                aria-label={`Dígito ${i + 1} del código`}
                className="flex-1 aspect-square max-w-[64px] rounded-[16px] shadow-[inset_0_0_0_1px_#e5e7eb] bg-transparent text-center text-2xl font-heading font-bold text-figma-text-1-2 focus:outline-none focus:shadow-[inset_0_0_0_2px_#04d9d9] transition-shadow"
              />
            ))}
          </motion.div>

          {/* Primary Action */}
          <motion.div variants={itemVariants} className="w-full">
            <button
              onClick={() => navigate("/NuevaContraseA")}
              className="w-full flex flex-col justify-center items-center py-4 px-0 bg-figma-accent-4 rounded-[39311300px] hover:opacity-90 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#04d9d9] focus:ring-offset-2 focus:ring-offset-figma-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={otp.some(val => val === "")}
            >
              <span className="text-figma-16 font-bold font-heading leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
                Verificar código
              </span>
            </button>
          </motion.div>

          {/* Secondary Action / Footer */}
          <motion.div variants={itemVariants} className="pt-[16px] w-full flex justify-center">
            <p className="text-figma-14 font-medium font-figma-arimo leading-figma-20 text-center text-figma-text-2-3">
              <span className="font-heading">¿No recibiste el código? </span>
              <button className="font-heading text-[#04d9d9] hover:underline focus:outline-none focus:ring-2 focus:ring-[#04d9d9] focus:ring-offset-2 focus:ring-offset-figma-secondary rounded-sm px-1 -mx-1 transition-all">
                Reenviar
              </button>
            </p>
          </motion.div>
        </motion.div>

      </div>
    </main>
  );
}