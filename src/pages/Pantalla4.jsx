import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function OnboardingScreen() {
  const navigate = useNavigate();
  return (
    <main className="min-h-[100dvh] w-full bg-figma-secondary flex justify-center overflow-clip font-heading">
      <div className="w-full max-w-[392px] flex flex-col justify-between p-8">

        {/* Illustration Section */}
        <div className="flex-1 flex items-center justify-center w-full min-h-[400px]">
          <div className="relative w-full max-w-[256px] min-h-[256px]">

            {/* Top Right Star */}
            <div className="absolute top-[-16px] left-[224px] z-[1]">
              <motion.div
                className="w-12 h-12 relative"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img className="w-[43px] h-[43px] absolute top-1 left-1 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/30735706b_3ba73b2ca_1_83.svg" alt="Star part" />
                <img className="w-[3px] h-[11px] absolute top-1.5 left-10 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/78ca0d5bd_7b8c41e72_1_84.svg" alt="Star part" />
                <img className="w-[11px] h-[3px] absolute top-2.5 left-9 z-[3]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/b4f554b2f_162a151c6_1_85.svg" alt="Star part" />
                <img className="w-[3px] h-[7px] absolute top-[34px] left-2 z-[4]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/66b7b027c_015e6ce78_1_86.svg" alt="Star part" />
                <img className="w-[7px] h-[3px] absolute top-9 left-1.5 z-[5]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/f0bfa663c_fd0c15e87_1_87.svg" alt="Star part" />
              </motion.div>
            </div>

            {/* Center Rocket */}
            <div className="absolute inset-0 m-auto w-[128px] min-h-[128px] z-[3]">
              <motion.div
                className="w-full h-full bg-[#04d9d9] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10),_0px_20px_25px_-5px_rgba(0,0,0,0.10)] rounded-[39311300px] flex items-center justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 15, stiffness: 100 }}
              >
                <motion.div
                  className="relative w-[72px] h-[72px]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-[102px] min-h-[102px] absolute top-[-15px] left-[-15px] z-[1]">
                    <img className="w-[29px] h-[21px] absolute top-6 left-[34px] z-[3]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/76121b1a7_7d7d124fa_1_99.svg" alt="Rocket part" />
                    <img className="w-[55px] h-[29px] absolute top-[23px] left-[38px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/6d42b28b5_ebbf3b0d5_1_98.svg" alt="Rocket part" />
                    <img className="w-[27px] h-[19px] absolute top-[39px] left-[11px] z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/22f5ef662_5767dac9b_1_97.svg" alt="Rocket part" />
                    <img className="w-[29px] h-[21px] absolute top-[53px] left-[34px] z-[4]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0470a8d1d_bd6a19e0d_1_100.svg" alt="Rocket part" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Left Star */}
            <div className="absolute top-[224px] left-[-16px] z-[2]">
              <motion.div
                className="w-16 h-16 relative"
                animate={{
                  y: [0, 6, 0],
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <img className="w-[57px] h-[57px] absolute top-[5px] left-[5px] z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/06e756c31_93cc3672c_1_90.svg" alt="Star part" />
                <img className="w-1 h-[15px] absolute top-2 left-[53px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/ffdf3674a_2fc406235_1_91.svg" alt="Star part" />
                <img className="w-[15px] h-1 absolute top-[13px] left-12 z-[3]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/07019201f_6792faa5f_1_92.svg" alt="Star part" />
                <img className="w-1 h-[9px] absolute top-[45px] left-[11px] z-[4]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/51665a56f_cb884b054_1_93.svg" alt="Star part" />
                <img className="w-[9px] h-1 absolute top-12 left-2 z-[5]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7b3bb6a23_378e90c04_1_94.svg" alt="Star part" />
              </motion.div>
            </div>

          </div>
        </div>

        {/* Content Section */}
        <motion.div
          className="w-full flex flex-col items-center pb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          {/* Pagination Dots */}
          <div className="flex flex-row justify-center items-center gap-2 mb-8">
            <div className="bg-figma-border-3 rounded-[39311300px] w-2 h-2 transition-colors duration-300" />
            <div className="bg-figma-border-3 rounded-[39311300px] w-2 h-2 transition-colors duration-300" />
            <div className="bg-[#04d9d9] rounded-[39311300px] w-2 h-2 transition-colors duration-300" />
          </div>

          {/* Heading / Description */}
          <p className="text-figma-16 font-normal leading-figma-24 text-center text-figma-text-5 max-w-[297px] mb-10">
            Explora nuevas posibilidades creativas con herramientas intuitivas y potentes
          </p>

          {/* Actions */}
          <div className="w-full flex flex-col gap-6">
            <button onClick={() => navigate("/Bienvenida")} className="w-full h-14 bg-[#04d9d9] rounded-[39311300px] flex items-center justify-center hover:bg-[#03c2c2] active:scale-[0.98] transition-all">
              <span className="text-figma-16 font-medium leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
                Continuar
              </span>
            </button>

            <button onClick={() => navigate("/Bienvenida")} className="w-full h-6 flex items-center justify-center hover:opacity-70 active:scale-[0.98] transition-all">
              <span className="text-figma-16 font-medium leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-text-1-3">
                Saltar
              </span>
            </button>
          </div>
        </motion.div>

      </div>
    </main>
  );
}