import { useState, useEffect, useCallback } from "react";
import { base44 } from "@/api/base44Client";

const BASIC_TOPICS = ["triangulo", "tercios"];

export async function markTopicComplete(topicKey) {
  // Validación única: no incrementar si el tema ya está completado
  const existing = await base44.entities.Progress.filter({ topic_key: topicKey, completed: true });
  if (existing.length > 0) return;

  await base44.entities.Progress.create({ topic_key: topicKey, completed: true });

  // Verificar si se completaron todos los temas → reiniciar y marcar curso
  const allRecords = await base44.entities.Progress.filter({});
  const completedKeys = new Set(
    allRecords
      .filter((r) => BASIC_TOPICS.includes(r.topic_key) && r.completed)
      .map((r) => r.topic_key)
  );
  if (completedKeys.size >= BASIC_TOPICS.length) {
    // Marcar el curso como completado (persiste tras el reinicio)
    const courseExisting = allRecords.filter((r) => r.topic_key === "curso_basico" && r.completed);
    if (courseExisting.length === 0) {
      await base44.entities.Progress.create({ topic_key: "curso_basico", completed: true });
    }
    // Reinicio: eliminar registros de temas completados
    const toDelete = allRecords.filter((r) => BASIC_TOPICS.includes(r.topic_key));
    for (const record of toDelete) {
      await base44.entities.Progress.delete(record.id);
    }
  }
}

export async function incrementPhotoCount() {
  const existing = await base44.entities.Progress.filter({ topic_key: "fotos_capturadas" });
  if (existing.length === 0) {
    await base44.entities.Progress.create({ topic_key: "fotos_capturadas", completed: false, count: 1 });
  } else {
    const record = existing[0];
    await base44.entities.Progress.update(record.id, { count: (record.count || 0) + 1 });
  }
}

export function useBasicProgress() {
  const [completedCount, setCompletedCount] = useState(0);
  const [photoCount, setPhotoCount] = useState(0);
  const [cursosCompletados, setCursosCompletados] = useState(0);

  const refresh = useCallback(async () => {
    try {
      const records = await base44.entities.Progress.filter({});
      // Contar temas únicos completados (deduplicación por topic_key)
      const completedKeys = new Set(
        records
          .filter((r) => BASIC_TOPICS.includes(r.topic_key) && r.completed)
          .map((r) => r.topic_key)
      );
      setCompletedCount(completedKeys.size);
      // Contar cursos completados
      const courses = records.filter((r) => r.topic_key === "curso_basico" && r.completed);
      setCursosCompletados(courses.length);
      // Fotos capturadas
      const photoRecord = records.find((r) => r.topic_key === "fotos_capturadas");
      setPhotoCount(photoRecord?.count || 0);
    } catch {
      setCompletedCount(0);
      setPhotoCount(0);
      setCursosCompletados(0);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    completedCount,
    totalCount: BASIC_TOPICS.length,
    percentage: (completedCount / BASIC_TOPICS.length) * 100,
    cursosCompletados,
    photoCount,
    refresh,
  };
}