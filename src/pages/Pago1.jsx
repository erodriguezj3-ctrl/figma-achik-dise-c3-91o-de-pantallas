import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

export default function Pago1() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    if (processing) return;
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      navigate("/PagoExitoso1");
    }, 1500);
  };

  return (
    <div className="w-full max-w-[392px] mx-auto h-[100dvh] flex flex-col bg-figma-secondary relative overflow-clip font-heading">
      {/* Header */}
      <header className="flex flex-row justify-start items-center gap-3 p-6 border-b-[1px] border-figma-muted-3 w-full bg-figma-secondary z-10 shrink-0">
        <button onClick={() => navigate("/Planes")} className="flex flex-row justify-center items-center h-9 w-9 bg-figma-muted-3 rounded-[39311300px] shrink-0 transition-colors hover:bg-gray-200">
          <div className="shrink-0 w-5 h-5 relative overflow-clip">
            <img className="w-[7px] h-[13px] absolute top-1 left-1 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/713348d26_84a2541ab_2_3518.svg" alt="Back" />
            <img className="w-[13px] h-0.5 absolute top-2.5 left-1 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/df7c99b2f_c92184ab8_2_3519.svg" alt="Back Arrow" />
          </div>
        </button>
        <h1 className="text-figma-18 font-bold leading-figma-28 text-figma-text-1-2 shrink-0">
          Pago seguro
        </h1>
        <div className="flex flex-row justify-end items-center grow">
          <div className="shrink-0 w-4 h-4 relative overflow-clip">
            <img className="w-2 h-[7px] absolute top-px left-[5px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/f7efa3cb6_587587b89_2_3525.svg" alt="Lock Top" />
            <img className="w-[13px] h-[9px] absolute top-[7px] left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1bf015a28_8a8500ddc_2_3524.svg" alt="Lock Body" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto flex flex-col w-full pb-[90px]">
        {/* Plan Summary */}
        <section className="pt-4 px-6 w-full shrink-0">
          <div className="flex flex-row justify-start items-center gap-3 p-4 bg-figma-surface-4 rounded-[24px] w-full shadow-[inset_0_0_0_1px_#04d9d9]">
            <div className="flex flex-row justify-center items-center h-12 w-12 bg-[#04d9d9] rounded-[39311300px] shrink-0">
              <div className="shrink-0 w-6 h-6 relative overflow-clip">
                <img className="w-[22px] h-4 absolute top-[3px] left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/15eb80d4d_c4a54fb37_2_3530.svg" alt="Crown Base" />
                <img className="w-4 h-0.5 absolute top-[21px] left-[5px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/da118e4d3_206bdec87_2_3531.svg" alt="Crown Line" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start grow">
              <p className="text-figma-16 font-bold leading-figma-24 text-figma-text-1-2">
                Plan Mensual
              </p>
              <p className="text-figma-14 font-normal leading-figma-20 text-figma-text-2-3 max-w-[182px]">
                Acceso completo a ACHIK Premium
              </p>
            </div>
            <div className="flex flex-col justify-start items-end shrink-0">
              <p className="text-figma-16 font-bold leading-figma-24 text-right text-figma-text-1-2">
                $9.99
              </p>
              <p className="text-figma-12 font-normal leading-figma-16 text-right text-figma-text-2-3">
                /mes
              </p>
            </div>
          </div>
        </section>

        {/* Payment Form */}
        <section className="pt-5 px-6 w-full flex flex-col shrink-0">
          <div className="flex flex-row justify-start items-center gap-2 min-h-[30px]">
            <div className="shrink-0 w-5 h-5 relative overflow-clip">
              <img className="w-[18px] h-[13px] absolute top-1 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7e53bf7b0_69c61945e_2_3549.svg" alt="Card Icon" />
              <img className="w-[18px] h-0.5 absolute top-2 left-0.5 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/de78f6df3_2d73dbe7e_2_3550.svg" alt="Card Line" />
            </div>
            <h2 className="text-figma-20 font-bold leading-figma-30 text-figma-text-1-3">
              Datos de la tarjeta
            </h2>
          </div>

          <form className="flex flex-col w-full mt-2" onSubmit={handlePayment}>
            {/* Name Input */}
            <div className="flex flex-col w-full relative">
              <label className="text-figma-14 font-medium leading-figma-20 text-figma-text-2-3 ml-1 mb-1">
                Nombre en la tarjeta
              </label>
              <div className="flex flex-col justify-center items-start py-4 px-5 w-full bg-figma-primary-2 rounded-[16px] shadow-[inset_0_0_0_1px_#e5e7eb] min-h-[58px] focus-within:shadow-[inset_0_0_0_1px_#04d9d9] transition-shadow">
                <input
                  type="text"
                  defaultValue="Juan Pérez"
                  className="text-figma-16 font-normal leading-figma-19 text-figma-border-3 w-full bg-transparent outline-none placeholder:text-figma-border-3/50"
                />
              </div>
            </div>

            {/* Card Number Input */}
            <div className="flex flex-col w-full relative mt-3">
              <label className="text-figma-14 font-medium leading-figma-20 text-figma-text-2-3 ml-1 mb-1">
                Número de tarjeta
              </label>
              <div className="flex flex-col justify-center items-start py-4 px-5 w-full bg-figma-primary-2 rounded-[16px] shadow-[inset_0_0_0_1px_#e5e7eb] min-h-[58px] focus-within:shadow-[inset_0_0_0_1px_#04d9d9] transition-shadow">
                <input
                  type="text"
                  defaultValue="1234 5678 9012 3456"
                  className="text-figma-16 font-normal leading-figma-19 tracking-[1.6px] text-figma-border-3 w-full bg-transparent outline-none placeholder:text-figma-border-3/50"
                />
              </div>
            </div>

            {/* Expiry & CVV Row */}
            <div className="grid grid-cols-[220fr_112fr] gap-3 w-full mt-3">
              <div className="flex flex-col w-full relative">
                <label className="text-figma-14 font-medium leading-figma-20 text-figma-text-2-3 ml-1 mb-1">
                  Expiración
                </label>
                <div className="flex flex-col justify-center items-start py-4 px-5 w-full bg-figma-primary-2 rounded-[16px] shadow-[inset_0_0_0_1px_#e5e7eb] min-h-[58px] focus-within:shadow-[inset_0_0_0_1px_#04d9d9] transition-shadow">
                  <input
                    type="text"
                    defaultValue="MM/AA"
                    className="text-figma-16 font-normal leading-figma-19 text-figma-border-3 w-full bg-transparent outline-none placeholder:text-figma-border-3/50"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full relative">
                <label className="text-figma-14 font-medium leading-figma-20 text-figma-text-2-3 ml-1 mb-1">
                  CVV
                </label>
                <div className="flex flex-col justify-center items-start py-4 px-5 w-full bg-figma-primary-2 rounded-[16px] shadow-[inset_0_0_0_1px_#e5e7eb] min-h-[58px] focus-within:shadow-[inset_0_0_0_1px_#04d9d9] transition-shadow">
                  <input
                    type="text"
                    defaultValue="123"
                    className="text-figma-16 font-normal leading-figma-19 text-figma-border-3 w-full bg-transparent outline-none placeholder:text-figma-border-3/50"
                  />
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex flex-row justify-start items-center gap-2 mt-4 min-h-[52px] pb-3">
              <div className="shrink-0 w-3 h-3 relative overflow-clip">
                <img className="w-1.5 h-[5px] absolute top-px left-[3px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0677e4cbe_15d116d19_2_3581.svg" alt="Lock Small Top" />
                <img className="w-2.5 h-1.5 absolute top-[5px] left-px z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/f9222f3a0_5ddc69f03_2_3580.svg" alt="Lock Small Body" />
              </div>
              <p className="text-figma-12 font-normal leading-figma-16 text-figma-text-1">
                Tu información está cifrada y protegida
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={processing}
              className="w-full bg-[#04d9d9] rounded-[39311300px] h-14 flex items-center justify-center mt-3 transition-transform active:scale-[0.98] hover:opacity-90 disabled:opacity-60"
            >
              <span className="text-figma-16 font-bold leading-figma-24 tracking-[0.4px] text-center uppercase text-figma-secondary">
                {processing ? "Procesando..." : "Pagar $9.99"}
              </span>
            </button>
          </form>
        </section>
      </main>

      <BottomNav active="Planes" />
    </div>
  );
}