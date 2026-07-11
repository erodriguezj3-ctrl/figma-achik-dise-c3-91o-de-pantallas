import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CrearCuenta() {
  const navigate = useNavigate();
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!aceptaTerminos) {
      setError("Debes aceptar los términos y condiciones para continuar.");
      return;
    }
    setError("");
    // Continue registration flow
  };

  return (
    <main className="min-h-screen w-full bg-figma-secondary flex flex-col items-center justify-start py-12 px-4 sm:px-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[328px] flex flex-col items-center"
      >
        {/* Header */}
        <div className="w-full mb-6 text-center">
          <h1 className="text-[clamp(14px,6.12vw,24px)] font-medium font-figma-arimo leading-[1.3333] text-figma-text-1-2">
            <span className="font-heading">CREAR CUENTA EN </span>
            <span className="font-heading text-[#04d9d9]">ACHIK</span>
          </h1>
        </div>

        {/* Form */}
        <form className="w-full flex flex-col" onSubmit={handleSubmit}>

          {/* Nombres Completos */}
          <div className="w-full flex flex-col mb-4">
            <label className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-5 ml-4 mb-1.5">
              Nombres Completos
            </label>
            <input
              type="text"
              placeholder="Juan Pérez"
              className="w-full h-14 bg-[#04d9d9] rounded-[39311300px] py-4 px-6 text-figma-16 font-normal font-heading leading-figma-19 text-figma-text-2-2 placeholder:text-figma-text-2-2/90 outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#04d9d9] transition-shadow"
            />
          </div>

          {/* Correo electrónico */}
          <div className="w-full flex flex-col mb-4">
            <label className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-5 ml-4 mb-1.5">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full h-14 bg-[#04d9d9] rounded-[39311300px] py-4 px-6 text-figma-16 font-normal font-heading leading-figma-19 text-figma-text-2-2 placeholder:text-figma-text-2-2/90 outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#04d9d9] transition-shadow"
            />
          </div>

          {/* Contraseña */}
          <div className="w-full flex flex-col mb-4">
            <label className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-5 ml-4 mb-1.5">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-14 bg-[#04d9d9] rounded-[39311300px] py-4 px-6 text-figma-16 font-normal font-heading leading-figma-19 text-figma-text-2-2 placeholder:text-figma-text-2-2/90 outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#04d9d9] transition-shadow tracking-widest"
            />
          </div>

          {/* Confirmar Contraseña */}
          <div className="w-full flex flex-col mb-4">
            <label className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-5 ml-4 mb-1.5">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-14 bg-[#04d9d9] rounded-[39311300px] py-4 px-6 text-figma-16 font-normal font-heading leading-figma-19 text-figma-text-2-2 placeholder:text-figma-text-2-2/90 outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#04d9d9] transition-shadow tracking-widest"
            />
          </div>

          {/* Terms Checkbox */}
          <label className="w-full flex flex-row items-start gap-3 mb-3 cursor-pointer group">
            <div className="pt-0.5 shrink-0 relative flex items-center justify-center">
              <input
                type="checkbox"
                checked={aceptaTerminos}
                onChange={(e) => {
                  setAceptaTerminos(e.target.checked);
                  if (e.target.checked) setError("");
                }}
                className="peer sr-only"
              />
              <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center transition-all duration-200 ${aceptaTerminos ? "bg-[#04d9d9] shadow-[inset_0_0_0_1px_#04d9d9]" : "bg-figma-secondary shadow-[inset_0_0_0_1px_#767676]"}`}>
                <svg className={`w-3 h-3 text-white transition-opacity duration-200 ${aceptaTerminos ? "opacity-100" : "opacity-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <span className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-5 select-none">
              Acepto los Términos y Condiciones y las Políticas de Privacidad.
            </span>
          </label>

          {/* Error message */}
          {error && (
            <p className="text-figma-14 font-medium font-heading leading-figma-20 text-red-500 mb-3 px-1">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-14 bg-[#04d9d9] rounded-[39311300px] flex items-center justify-center hover:bg-[#03c2c2] active:scale-[0.98] transition-all duration-200 mb-6"
          >
            <span className="text-figma-16 font-medium font-heading leading-figma-24 tracking-[0.4px] uppercase text-figma-secondary">
              Registrarse
            </span>
          </button>
        </form>

        {/* Divider */}
        <div className="w-full flex flex-row items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-figma-accent-2" />
          <span className="text-figma-14 font-normal font-heading leading-figma-20 text-figma-text-1">
            o
          </span>
          <div className="flex-1 h-px bg-figma-accent-2" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={() => navigate("/PantallaDeInicio")}
          className="w-full flex flex-row items-center justify-center gap-3 py-4 bg-figma-secondary rounded-[39311300px] shadow-[inset_0_0_0_1px_#e5e7eb] hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 mb-6"
        >
          <div className="w-5 h-5 relative overflow-clip shrink-0">
            <img className="w-3.5 h-[7px] absolute top-px left-0.5 z-[4]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/66ddf96e2_e8986c984_1_208.svg" alt="" aria-hidden="true" />
            <img className="w-1 h-2 absolute top-1.5 left-px z-[3]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/3dfcbe420_c88fa35ac_1_207.svg" alt="" aria-hidden="true" />
            <img className="w-[9px] h-[9px] absolute top-2 left-2.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/4f9bd5f26_24eb67823_1_205.svg" alt="" aria-hidden="true" />
            <img className="w-3.5 h-[7px] absolute top-3 left-0.5 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/827a805af_df8ca17fc_1_206.svg" alt="" aria-hidden="true" />
          </div>
          <span className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-1-3">
            Registrarse con Google
          </span>
        </button>

        {/* Footer Link */}
        <p className="text-figma-14 font-normal font-heading leading-figma-20 text-center text-figma-text-5">
          ¿Ya tienes una cuenta?{" "}
          <button type="button" onClick={() => navigate("/Bienvenida")} className="font-medium text-[#04d9d9] hover:underline focus:outline-none focus:ring-2 focus:ring-[#04d9d9] focus:ring-offset-2 rounded-sm">
            Iniciar sesión
          </button>
        </p>

      </motion.div>
    </main>
  );
}