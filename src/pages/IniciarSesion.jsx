import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";

export default function IniciarSesion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const resetProgress = async () => {
    try {
      localStorage.clear();
      const records = await base44.entities.Progress.filter({});
      for (const record of records) {
        await base44.entities.Progress.delete(record.id);
      }
    } catch (e) {
      // si no hay sesión previa, no hay nada que limpiar
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Por favor completa todos los campos");
      return;
    }
    setLoading(true);
    await resetProgress();
    setTimeout(() => {
      setLoading(false);
      navigate("/PantallaDeInicio");
    }, 600);
  };

  const handleGoogle = async () => {
    await resetProgress();
    base44.auth.loginWithProvider("google", "/PantallaDeInicio");
  };

  return (
    <main className="w-full max-w-[392px] mx-auto flex flex-col items-center justify-center bg-figma-secondary min-h-screen py-12 px-8">
      <div className="w-full flex flex-col">
        {/* Header */}
        <h1 className="text-[clamp(14px,6.12vw,24px)] font-medium font-figma-arimo leading-[1.3333] text-center text-figma-text-1-2">
          <span className="font-heading">INICIAR SESIÓN EN </span>
          <span className="font-heading text-[#04d9d9]">ACHIK</span>
        </h1>

        {/* Form Area */}
        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-8">
          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-5 ml-4">
              Usuario/Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              className="w-full py-4 px-6 bg-[#04d9d9] rounded-[39311300px] text-figma-16 font-normal font-heading leading-figma-19 text-figma-text-2-2 placeholder:text-figma-text-2-2/70 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#04d9d9] transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1 mt-4">
            <label className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-5 ml-4">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full py-4 px-6 bg-[#04d9d9] rounded-[39311300px] text-figma-16 font-normal font-heading leading-figma-19 text-figma-text-2-2 placeholder:text-figma-text-2-2/70 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#04d9d9] transition-all"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-figma-14 font-medium font-heading leading-figma-20 text-red-500 mt-3 text-center">
              {error}
            </p>
          )}

          {/* Forgot Password */}
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={() => navigate("/RecuperarContraseA")}
              className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-5 hover:text-[#04d9d9] transition-colors"
            >
              ¿Has olvidado tu contraseña?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-6 bg-[#04d9d9] rounded-[39311300px] text-figma-16 font-medium font-heading leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-60"
          >
            {loading ? "Validando..." : "Iniciar Sesión"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 w-full mt-8">
          <div className="h-px bg-figma-accent-2 flex-1" />
          <span className="text-figma-14 font-normal font-heading leading-figma-20 text-figma-text-1">
            o
          </span>
          <div className="h-px bg-figma-accent-2 flex-1" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogle}
          className="flex items-center justify-center gap-3 w-full py-4 mt-8 bg-figma-secondary rounded-[39311300px] shadow-[inset_0_0_0_1px_#e5e7eb] hover:bg-gray-50 active:scale-[0.98] transition-all"
        >
          <div className="relative w-5 h-5 shrink-0">
            <img
              className="w-3.5 h-[7px] absolute top-px left-0.5 z-[4]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/6c243d85b_374bfb983_1_266.svg"
              alt="Google Logo Part 1"
            />
            <img
              className="w-1 h-2 absolute top-1.5 left-px z-[3]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/9fbf0c1d1_fc4966de1_1_265.svg"
              alt="Google Logo Part 2"
            />
            <img
              className="w-[9px] h-[9px] absolute top-2 left-2.5 z-[1]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/230d5af8a_1eb61e03f_1_263.svg"
              alt="Google Logo Part 3"
            />
            <img
              className="w-3.5 h-[7px] absolute top-3 left-0.5 z-[2]"
              src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/42b3f1f98_f149e2c6a_1_264.svg"
              alt="Google Logo Part 4"
            />
          </div>
          <span className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-1-3">
            Iniciar sesión con Google
          </span>
        </button>

        {/* Register Link */}
        <div className="flex justify-center w-full mt-8">
          <button
            type="button"
            onClick={() => navigate("/CrearCuenta")}
            className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-5 hover:text-[#04d9d9] transition-colors"
          >
            Registrarse
          </button>
        </div>
      </div>
    </main>
  );
}