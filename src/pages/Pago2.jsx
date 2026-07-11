import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pago2() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    if (processing) return;
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      navigate("/PagoExitoso2");
    }, 1500);
  };

  return (
    <div className="w-full max-w-[392px] mx-auto h-[100dvh] flex flex-col bg-figma-secondary relative overflow-clip shadow-xl">
      {/* Header */}
      <header className="flex flex-row justify-between items-center p-6 border-b border-figma-muted-3 shrink-0 bg-figma-secondary z-10">
        <button
          type="button"
          onClick={() => navigate("/Planes")}
          className="flex justify-center items-center w-9 h-9 bg-figma-muted-3 rounded-full shrink-0 transition-colors hover:bg-gray-200 active:scale-95"
          aria-label="Volver"
        >
          <div className="w-5 h-5 relative">
            <img className="w-[7px] h-[13px] absolute top-1 left-1 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/0fc0de416_6e5f8d1ca_2_3690.svg" alt="" aria-hidden="true" />
            <img className="w-[13px] h-0.5 absolute top-2.5 left-1 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/7338bcfad_251d9d25f_2_3691.svg" alt="" aria-hidden="true" />
          </div>
        </button>
        <h1 className="text-figma-18 font-bold font-heading leading-figma-28 text-figma-text-1-2">
          Pago seguro
        </h1>
        <div className="w-9 flex justify-end items-center shrink-0">
          <div className="w-4 h-4 relative">
            <img className="w-2 h-[7px] absolute top-px left-[5px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1e9ee8c5f_6e1641f62_2_3697.svg" alt="" aria-hidden="true" />
            <img className="w-[13px] h-[9px] absolute top-[7px] left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/02e6f0464_0581c0b16_2_3696.svg" alt="" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto pb-24 flex flex-col">
        {/* Plan Summary Card */}
        <div className="mt-5 mx-6 p-5 flex flex-row items-center gap-4 bg-figma-surface-4 rounded-[24px] shadow-[inset_0_0_0_1px_#04d9d9] shrink-0">
          <div className="w-12 h-12 bg-[#04d9d9] rounded-full flex justify-center items-center shrink-0">
            <div className="w-6 h-6 relative">
              <img className="w-[22px] h-4 absolute top-[3px] left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/1370dcce2_d1193b354_2_3702.svg" alt="" aria-hidden="true" />
              <img className="w-4 h-0.5 absolute top-[21px] left-[5px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/9e6ee0d15_8553dbf7a_2_3703.svg" alt="" aria-hidden="true" />
            </div>
          </div>
          <div className="flex flex-col grow">
            <h2 className="text-figma-16 font-bold font-heading leading-figma-24 text-figma-text-1-2">
              Plan Anual
            </h2>
            <p className="text-figma-14 font-normal font-heading leading-figma-20 text-figma-text-2-3">
              Acceso completo a ACHIK Premium
            </p>
          </div>
          <div className="flex flex-col items-end shrink-0">
            <span className="text-figma-16 font-bold font-heading leading-figma-24 text-figma-text-1-2">
              $79.99
            </span>
            <span className="text-figma-12 font-normal font-heading leading-figma-16 text-figma-text-2-3">
              /año
            </span>
          </div>
        </div>

        {/* Payment Form Section */}
        <section className="mt-6 px-6 flex flex-col shrink-0">
          <div className="flex flex-row items-center gap-2 mb-4">
            <div className="w-5 h-5 relative shrink-0">
              <img className="w-[18px] h-[13px] absolute top-1 left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/60d001df7_33b36fad1_2_3721.svg" alt="" aria-hidden="true" />
              <img className="w-[18px] h-0.5 absolute top-2 left-0.5 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/8b0e575ee_6501cc78f_2_3722.svg" alt="" aria-hidden="true" />
            </div>
            <h3 className="text-figma-20 font-bold font-heading leading-figma-30 text-figma-text-1-3">
              Datos de la tarjeta
            </h3>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handlePayment}>
            {/* Cardholder Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="cardName" className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-2-3 ml-1">
                Nombre en la tarjeta
              </label>
              <div className="flex items-center py-4 px-5 bg-figma-primary-2 rounded-[16px] shadow-[inset_0_0_0_1px_#e5e7eb] min-h-[58px] focus-within:shadow-[inset_0_0_0_1px_#04d9d9] transition-shadow">
                <input
                  id="cardName"
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full bg-transparent outline-none text-figma-16 font-normal font-heading leading-figma-19 text-figma-text-1-2 placeholder:text-figma-border-3"
                />
              </div>
            </div>

            {/* Card Number */}
            <div className="flex flex-col gap-1">
              <label htmlFor="cardNumber" className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-2-3 ml-1">
                Número de tarjeta
              </label>
              <div className="flex items-center py-4 px-5 bg-figma-primary-2 rounded-[16px] shadow-[inset_0_0_0_1px_#e5e7eb] min-h-[58px] focus-within:shadow-[inset_0_0_0_1px_#04d9d9] transition-shadow">
                <input
                  id="cardNumber"
                  type="text"
                  inputMode="numeric"
                  placeholder="1234 5678 9012 3456"
                  className="w-full bg-transparent outline-none text-figma-16 font-normal font-heading leading-figma-19 tracking-[1.6px] text-figma-text-1-2 placeholder:text-figma-border-3"
                />
              </div>
            </div>

            {/* Expiry & CVV Row */}
            <div className="grid grid-cols-[220fr_112fr] gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="cardExpiry" className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-2-3 ml-1">
                  Expiración
                </label>
                <div className="flex items-center py-4 px-5 bg-figma-primary-2 rounded-[16px] shadow-[inset_0_0_0_1px_#e5e7eb] min-h-[58px] focus-within:shadow-[inset_0_0_0_1px_#04d9d9] transition-shadow">
                  <input
                    id="cardExpiry"
                    type="text"
                    placeholder="MM/AA"
                    className="w-full bg-transparent outline-none text-figma-16 font-normal font-heading leading-figma-19 text-figma-text-1-2 placeholder:text-figma-border-3"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="cardCvv" className="text-figma-14 font-medium font-heading leading-figma-20 text-figma-text-2-3 ml-1">
                  CVV
                </label>
                <div className="flex items-center py-4 px-5 bg-figma-primary-2 rounded-[16px] shadow-[inset_0_0_0_1px_#e5e7eb] min-h-[58px] focus-within:shadow-[inset_0_0_0_1px_#04d9d9] transition-shadow">
                  <input
                    id="cardCvv"
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="123"
                    className="w-full bg-transparent outline-none text-figma-16 font-normal font-heading leading-figma-19 text-figma-text-1-2 placeholder:text-figma-border-3"
                  />
                </div>
              </div>
            </div>

            {/* Security Note */}
            <div className="flex flex-row items-center gap-2 mt-5 mb-4">
              <div className="w-3 h-3 relative shrink-0">
                <img className="w-1.5 h-[5px] absolute top-px left-[3px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/01595fe78_c7f655a81_2_3753.svg" alt="" aria-hidden="true" />
                <img className="w-2.5 h-1.5 absolute top-[5px] left-px z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/86bd47ab7_e8db26305_2_3752.svg" alt="" aria-hidden="true" />
              </div>
              <p className="text-figma-12 font-normal font-heading leading-figma-16 text-figma-text-1">
                Tu información está cifrada y protegida
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={processing}
              className="w-full h-14 bg-[#04d9d9] rounded-[39311300px] flex justify-center items-center transition-transform active:scale-[0.98] hover:bg-[#03c2c2] disabled:opacity-60"
            >
              <span className="text-figma-16 font-bold font-heading leading-figma-24 tracking-[0.4px] uppercase text-figma-secondary">
                {processing ? "Procesando..." : "Pagar $79.99"}
              </span>
            </button>
          </form>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 w-full h-16 bg-figma-secondary border-t border-[#e5e7eb] grid grid-cols-4 z-20 pb-safe">
        <button onClick={() => navigate("/PantallaDeInicio")} className="flex flex-col justify-center items-center gap-1 h-full hover:bg-gray-50 transition-colors active:bg-gray-100">
          <div className="w-6 h-6 relative">
            <img className="w-5 h-[21px] absolute top-0.5 left-[3px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/b5c0d80fa_b755d508d_2_3770.svg" alt="" aria-hidden="true" />
            <img className="w-2 h-[11px] absolute top-3 left-[9px] z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/39792c3d0_118230756_2_3769.svg" alt="" aria-hidden="true" />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-text-2-3">
            Inicio
          </span>
        </button>
        <button onClick={() => navigate("/Progreso")} className="flex flex-col justify-center items-center gap-1 h-full hover:bg-gray-50 transition-colors active:bg-gray-100">
          <div className="w-6 h-6 relative">
            <img className="w-[22px] h-5 absolute top-[3px] left-0.5 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/2a9c51499_2037bad12_2_3777.svg" alt="" aria-hidden="true" />
            <img className="w-0.5 h-4 absolute top-[7px] left-3 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/9a5d346bc_cf5048d2e_2_3776.svg" alt="" aria-hidden="true" />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-text-2-3">
            Progreso
          </span>
        </button>
        <button onClick={() => navigate("/Planes")} className="flex flex-col justify-center items-center gap-1 h-full hover:bg-gray-50 transition-colors active:bg-gray-100">
          <div className="w-6 h-6 relative">
            <img className="w-[22px] h-4 absolute top-[3px] left-0.5 z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/25afa796d_e20711d4c_2_3783.svg" alt="" aria-hidden="true" />
            <img className="w-4 h-0.5 absolute top-[21px] left-[5px] z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/fd42b0f2d_ee80a0ba7_2_3784.svg" alt="" aria-hidden="true" />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-[#04d9d9]">
            Planes
          </span>
        </button>
        <button onClick={() => navigate("/Perfil")} className="flex flex-col justify-center items-center gap-1 h-full hover:bg-gray-50 transition-colors active:bg-gray-100">
          <div className="w-6 h-6 relative">
            <img className="w-2.5 h-2.5 absolute top-[3px] left-2 z-[2]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/82b39928c_588798cb6_2_3791.svg" alt="" aria-hidden="true" />
            <img className="w-4 h-2 absolute top-[15px] left-[5px] z-[1]" src="https://media.base44.com/images/public/6a4f1af577955f105897f7c2/09dd3323a_d71027afe_2_3790.svg" alt="" aria-hidden="true" />
          </div>
          <span className="text-figma-12 font-medium font-heading leading-figma-16 text-figma-text-2-3">
            Perfil
          </span>
        </button>
      </nav>
    </div>
  );
}