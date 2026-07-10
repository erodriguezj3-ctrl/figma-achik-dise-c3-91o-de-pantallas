import React from "react";
import { motion } from "framer-motion";

export default function OnboardingScreen() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  // Continuous floating animations for the illustration
  const floatAnimation = {
    y: [-8, 8, -8],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  };

  const pulseAnimation = {
    scale: [0.95, 1.05, 0.95],
    opacity: [0.7, 1, 0.7],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <main className="mx-auto flex min-h-[853px] w-full max-w-[392px] flex-col items-center justify-between bg-figma-secondary overflow-clip">
      {/* Top Visual Section */}
      <div className="flex w-full flex-1 items-center justify-center p-8">
        {/* Scatter Collage Container - Fluid Aspect Ratio */}
        <div className="relative aspect-square w-full max-w-[256px]">

          {/* Top Right Star */}
          <div className="absolute left-[87.5%] top-[-6.25%] z-[1] w-[18.75%] aspect-square">
            <motion.div animate={pulseAnimation} className="relative h-full w-full">
              <img className="absolute left-[8.3%] top-[8.3%] z-[1] h-[89.5%] w-[89.5%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7ac6f84ee_fd780bfcc_1_83.svg" alt="" />
              <img className="absolute left-[83.3%] top-[12.5%] z-[2] h-[22.9%] w-[6.25%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/5e083403c_8d077b8cc_1_84.svg" alt="" />
              <img className="absolute left-[75%] top-[20.8%] z-[3] h-[6.25%] w-[22.9%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/c6c7d94a3_39d49615f_1_85.svg" alt="" />
              <img className="absolute left-[16.6%] top-[70.8%] z-[4] h-[14.5%] w-[6.25%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/014aad7af_fb7ec3389_1_86.svg" alt="" />
              <img className="absolute left-[12.5%] top-[75%] z-[5] h-[6.25%] w-[14.5%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/d111595eb_50d92aea4_1_87.svg" alt="" />
            </motion.div>
          </div>

          {/* Center Rocket */}
          <div className="absolute left-[25%] top-[25%] z-[3] w-[50%] aspect-square">
            <motion.div
              animate={floatAnimation}
              className="flex h-full w-full items-center justify-center rounded-[39311300px] bg-[#04d9d9] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10),_0px_20px_25px_-5px_rgba(0,0,0,0.10)]"
            >
              <div className="relative h-[79.6%] w-[79.6%]">
                <img className="absolute left-[33.3%] top-[23.5%] z-[3] h-[20.5%] w-[28.4%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/74a2ddc9a_5f0453112_1_99.svg" alt="" />
                <img className="absolute left-[37.2%] top-[22.5%] z-[2] h-[28.4%] w-[53.9%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/b569a6643_889b48186_1_98.svg" alt="" />
                <img className="absolute left-[10.7%] top-[38.2%] z-[1] h-[18.6%] w-[26.4%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/11f65f19c_5583be9fb_1_97.svg" alt="" />
                <img className="absolute left-[33.3%] top-[51.9%] z-[4] h-[20.5%] w-[28.4%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/16192997c_91ae7fc27_1_100.svg" alt="" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Left Star */}
          <div className="absolute left-[-6.25%] top-[87.5%] z-[2] w-[25%] aspect-square">
            <motion.div animate={pulseAnimation} style={{ animationDelay: "1s" }} className="relative h-full w-full">
              <img className="absolute left-[7.8%] top-[7.8%] z-[1] h-[89%] w-[89%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/32685cd88_2f0581e7f_1_90.svg" alt="" />
              <img className="absolute left-[82.8%] top-[12.5%] z-[2] h-[23.4%] w-[6.25%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/8d12ccf30_085245cc1_1_91.svg" alt="" />
              <img className="absolute left-[75%] top-[20.3%] z-[3] h-[6.25%] w-[23.4%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/343f6c3a4_b6afa7cc2_1_92.svg" alt="" />
              <img className="absolute left-[17.1%] top-[70.3%] z-[4] h-[14%] w-[6.25%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7d5e8bdba_331a4f40e_1_93.svg" alt="" />
              <img className="absolute left-[12.5%] top-[75%] z-[5] h-[6.25%] w-[14%]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/962d2defc_fcf6e0249_1_94.svg" alt="" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Content Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-[328px] flex-col items-center pb-8"
      >
        {/* Pagination Dots */}
        <motion.div variants={itemVariants} className="flex gap-2">
          <div className="h-2 w-2 shrink-0 rounded-[39311300px] bg-figma-border-3" />
          <div className="h-2 w-2 shrink-0 rounded-[39311300px] bg-figma-border-3" />
          <div className="h-2 w-2 shrink-0 rounded-[39311300px] bg-[#04d9d9]" />
        </motion.div>

        {/* Text Description */}
        <motion.div variants={itemVariants} className="flex w-full justify-center py-6 px-4">
          <p className="font-heading text-figma-16 leading-figma-24 text-figma-text-5 max-w-[297px] text-center font-normal">
            Explora nuevas posibilidades creativas con herramientas intuitivas y potentes
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div variants={itemVariants} className="flex w-full flex-col gap-6">
          <button className="font-heading text-figma-16 leading-figma-24 text-figma-secondary flex h-14 w-full items-center justify-center rounded-[39311300px] bg-[#04d9d9] font-medium uppercase tracking-[0.4px] transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Continuar
          </button>
          <button className="font-heading text-figma-16 leading-figma-24 text-figma-text-1-3 flex h-6 w-full items-center justify-center font-medium uppercase tracking-[0.4px] transition-opacity hover:opacity-70">
            Saltar
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
