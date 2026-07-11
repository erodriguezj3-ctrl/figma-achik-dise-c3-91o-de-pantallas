import React from "react";
import { Video } from "lucide-react";

/**
 * Convierte un enlace compartido de Google Drive al formato directo
 * que puede reproducir la etiqueta <video> de HTML5.
 * Acepta:
 *   https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *   https://drive.google.com/open?id=FILE_ID
 */
function getDriveVideoUrl(url) {
  if (!url) return "";
  if (url.includes("uc?export=download")) return url;
  const fileMatch = url.match(/\/file\/d\/([^/]+)/);
  if (fileMatch) return `https://drive.google.com/uc?export=download&id=${fileMatch[1]}`;
  const openMatch = url.match(/[?&]id=([^&]+)/);
  if (openMatch) return `https://drive.google.com/uc?export=download&id=${openMatch[1]}`;
  return url;
}

/**
 * Reproductor de video reutilizable.
 * - Si `src` está vacío, muestra un placeholder con icono.
 * - Si `src` tiene un enlace de Google Drive o .mp4, reproduce el video.
 * - `poster` opcional muestra una imagen de portada antes de reproducir.
 */
export default function VideoPlayer({ src, poster, className = "" }) {
  const videoUrl = getDriveVideoUrl(src);

  if (!videoUrl) {
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
      src={videoUrl}
      poster={poster}
      controls
      playsInline
      preload="metadata"
      className={`w-full h-full object-contain bg-figma-accent rounded-[16px] overflow-clip ${className}`}
    />
  );
}