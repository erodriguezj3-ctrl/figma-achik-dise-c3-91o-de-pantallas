import React from "react";
import { Video } from "lucide-react";

/**
 * Reproductor de video reutilizable.
 * - Si `src` está vacío, muestra un placeholder con icono.
 * - Si `src` tiene una ruta local (ej. "/videos/intro_basica.mp4"),
 *   reproduce el video directamente desde los archivos del proyecto.
 * - `poster` opcional muestra una imagen de portada antes de reproducir.
 */
export default function VideoPlayer({ src, poster, className = "" }) {
  if (!src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-figma-accent rounded-[16px] overflow-clip ${className}`}
      >
        <Video className="w-8 h-8 text-[#00d3f3]/50" strokeWidth={1.5} />
        <span className="text-figma-12 font-medium text-[#00d3f3]/50">
          Video próximamente
        </span>
      </div>
    );
  }

  return (
    <video
      src={src}
      poster={poster}
      controls
      playsInline
      preload="metadata"
      className={`w-full h-full object-contain bg-figma-accent rounded-[16px] overflow-clip ${className}`}
    />
  );
}