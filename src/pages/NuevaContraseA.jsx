import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordReset() {
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <main className="w-full h-screen overflow-hidden bg-figma-secondary flex justify-center font-heading">
      <div className="w-full max-w-[392px] flex flex-col p-8 h-screen">

        {/* Top Navigation */}
        <div className="mb-6 shrink-0">
          <button
            type="button"
            onClick={() => navigate("/VerificarCodigo")}
            className="w-10 h-10 bg-figma-muted-3 rounded-[39311300px] flex justify-center items-center transition-colors hover:bg-black/5"
            aria-label="Go back"
          >
            <div className="w-5 h-5 relative">
              <img className="w-[7px] h-[13px] absolute top-1 left-1 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/ea4baab74_978361d29_2_3099.svg" alt="" aria-hidden="true" />
              <img className="w-[13px] h-0.5 absolute top-2.5 left-1 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1a7f85eaf_981cdec4e_2_3100.svg" alt="" aria-hidden="true" />
            </div>
          </button>
        </div>

        {/* Header Section */}
        <div className="flex flex-col mb-6 shrink-0">
          <div className="w-16 h-16 bg-figma-secondary-2 rounded-[39311300px] flex justify-center items-center mb-4">
            <div className="w-8 h-8 relative">
              <img className="w-4 h-[15px] absolute top-[3px] left-[9px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/c7bd6a60f_00641f2e5_2_3106.svg" alt="" aria-hidden="true" />
              <img className="w-[27px] h-[17px] absolute top-[15px] left-1 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/5b009885c_5098cbb9c_2_3105.svg" alt="" aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-bold leading-[1.3333] text-figma-text-1-2 mb-2">
            Nueva contraseña
          </h1>
          <p className="text-figma-14 font-normal leading-figma-20 text-figma-text-2-3">
            Crea una contraseña segura para tu cuenta.
          </p>
        </div>

        {/* Form Section */}
        <form className="flex flex-col gap-4 shrink-0" onSubmit={(e) => e.preventDefault()}>

          {/* Password Input 1 */}
          <div className="flex flex-col gap-1">
            <label className="pl-4 text-figma-14 font-medium leading-figma-20 text-figma-text-5">
              Nueva contraseña
            </label>
            <div className="relative w-full h-14 bg-[#04d9d9] rounded-[39311300px] flex items-center px-6 overflow-clip focus-within:ring-2 focus-within:ring-black/10 transition-shadow">
              <input
                type={showPassword1 ? "text" : "password"}
                defaultValue="••••••••"
                className="bg-transparent outline-none w-full h-full text-figma-16 font-normal leading-figma-19 text-figma-text-2-2 pr-10"
                aria-label="Nueva contraseña"
              />
              <button
                type="button"
                onClick={() => setShowPassword1(!showPassword1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity"
                aria-label={showPassword1 ? "Hide password" : "Show password"}
              >
                <div className="w-full h-full relative">
                  <img className="w-[18px] h-[13px] absolute top-1 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7cf5423ec_a2a7432e1_2_3125.svg" alt="" aria-hidden="true" />
                  <img className="w-[7px] h-[7px] absolute top-[7px] left-[7px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/3cf21deac_418d867c5_2_3126.svg" alt="" aria-hidden="true" />
                </div>
              </button>
            </div>
          </div>

          {/* Password Input 2 */}
          <div className="flex flex-col gap-1">
            <label className="pl-4 text-figma-14 font-medium leading-figma-20 text-figma-text-5">
              Confirmar contraseña
            </label>
            <div className="relative w-full h-14 bg-[#04d9d9] rounded-[39311300px] flex items-center px-6 overflow-clip focus-within:ring-2 focus-within:ring-black/10 transition-shadow">
              <input
                type={showPassword2 ? "text" : "password"}
                defaultValue="••••••••"
                className="bg-transparent outline-none w-full h-full text-figma-16 font-normal leading-figma-19 text-figma-text-2-2 pr-10"
                aria-label="Confirmar contraseña"
              />
              <button
                type="button"
                onClick={() => setShowPassword2(!showPassword2)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity"
                aria-label={showPassword2 ? "Hide password" : "Show password"}
              >
                <div className="w-full h-full relative">
                  <img className="w-[18px] h-[13px] absolute top-1 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/01265a64b_4c0039649_2_3137.svg" alt="" aria-hidden="true" />
                  <img className="w-[7px] h-[7px] absolute top-[7px] left-[7px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/79b4322ba_1c882f827_2_3138.svg" alt="" aria-hidden="true" />
                </div>
              </button>
            </div>
          </div>

        </form>

        {/* Flexible Spacer to push button to bottom */}
        <div className="flex-grow min-h-[8px]"></div>

        {/* Bottom Action */}
        <div className="mt-auto shrink-0">
          <button
            type="submit"
            onClick={() => navigate("/ContraseAActualizada")}
            className="w-full h-14 bg-figma-accent-4 rounded-[39311300px] flex justify-center items-center transition-transform active:scale-[0.98] hover:opacity-90"
          >
            <span className="text-figma-16 font-bold leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
              Cambiar contraseña
            </span>
          </button>
        </div>

      </div>
    </main>
  );
}