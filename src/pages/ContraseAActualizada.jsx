import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContrasenaActualizada() {
  const navigate = useNavigate();
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-figma-secondary px-4 py-8">
      <div className="flex w-full max-w-[392px] flex-col items-center">
        {/* Success Icon */}
        <div className="mb-6 flex h-24 w-24 shrink-0 items-center justify-center rounded-[39311300px] bg-figma-secondary-2">
          <div className="relative h-12 w-12 overflow-clip">
            <img
              className="absolute left-1 top-1 z-[1] h-11 w-11"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/5f0d6c97f_e521d60d5_2_3156.svg"
              alt="Success Circle"
            />
            <img
              className="absolute left-[18px] top-5 z-[2] h-3 w-4"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/b8104acce_5ce980d9a_2_3157.svg"
              alt="Checkmark"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-center font-heading text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-figma-text-1-2">
          ¡Contraseña actualizada!
        </h1>

        {/* Subtitle */}
        <p className="mb-8 max-w-[329px] text-center font-heading text-figma-16 font-normal leading-figma-24 text-figma-text-2-3">
          Tu contraseña fue cambiada correctamente. Ya puedes iniciar sesión.
        </p>

        {/* Action Button */}
        <button onClick={() => navigate("/IniciarSesion")} className="flex w-full max-w-[328px] items-center justify-center rounded-[39311300px] bg-[#04d9d9] py-4 transition-transform hover:scale-[1.02] active:scale-[0.98]">
          <span className="text-center font-heading text-figma-16 font-bold uppercase leading-figma-24 tracking-[0.4px] text-figma-secondary">
            Iniciar sesión
          </span>
        </button>
      </div>
    </main>
  );
}