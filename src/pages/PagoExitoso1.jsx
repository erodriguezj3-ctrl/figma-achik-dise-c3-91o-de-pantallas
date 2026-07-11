import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import BottomNav from "@/components/BottomNav";

export default function PagoExitoso() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoHome = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await base44.auth.updateMe({ subscription: "premium", subscription_plan: "monthly" });
    } catch (e) {}
    setLoading(false);
    navigate("/PantallaDeInicio");
  };

  return (
    <div className="min-h-screen w-full bg-figma-secondary flex flex-col items-center justify-between font-sans">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-[392px] px-8 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Success Icon */}
          <div className="flex flex-row justify-center items-center h-24 w-24 bg-figma-secondary-2 rounded-full mb-6 shrink-0">
            <div className="shrink-0 grow-0 w-12 h-12 overflow-clip relative">
              <img
                className="w-11 h-11 absolute top-1 left-1 z-[1]"
                src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/925140772_1a2aca1be_2_3633.svg"
                alt="Success Checkmark Base"
              />
              <img
                className="w-4 h-3 absolute top-5 left-[18px] z-[2]"
                src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/a717d79c0_ed27ac1b1_2_3634.svg"
                alt="Success Checkmark Tick"
              />
            </div>
          </div>

          {/* Typography */}
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold font-heading leading-[1.3333] text-center text-figma-text-1-2 mb-2">
            ¡Pago exitoso!
          </h1>

          <p className="text-figma-16 font-normal font-figma-arimo leading-figma-24 text-center text-figma-text-2-3 mb-2">
            <span className="font-heading">Ya eres miembro </span>
            <span className="font-bold font-heading text-[#04d9d9]">Premium</span>
          </p>

          <p className="text-figma-14 font-normal font-heading leading-figma-20 text-center text-figma-text-1 mb-8">
            Mensual · $9.99/mes
          </p>

          {/* Action Button */}
          <motion.button
            onClick={handleGoHome}
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col justify-center items-center py-4 px-0 w-full max-w-[328px] bg-[#04d9d9] rounded-full shadow-sm transition-colors hover:bg-[#03c4c4] disabled:opacity-60"
          >
            <span className="text-figma-16 font-bold font-heading leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
              {loading ? "Activando..." : "Ir al inicio"}
            </span>
          </motion.button>
        </motion.div>
      </main>

      <BottomNav active="Planes" />
    </div>
  );
}