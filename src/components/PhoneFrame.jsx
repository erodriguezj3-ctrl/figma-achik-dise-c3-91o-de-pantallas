import React from "react";

/**
 * Marco global tipo teléfono: envuelve toda la app para que
 * la interfaz se vea delimitada como un móvil (392px de ancho,
 * esquinas redondeadas, sombra) centrado sobre el fondo oscuro.
 */
export default function PhoneFrame({ children }) {
  return (
    <div className="flex h-screen w-full justify-center overflow-hidden bg-[#0b132b]">
      <div className="relative w-[392px] h-screen overflow-hidden bg-figma-secondary shadow-2xl">
        {children}
      </div>
    </div>
  );
}