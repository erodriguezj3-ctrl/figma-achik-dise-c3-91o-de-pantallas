import { useState, useEffect, useCallback } from "react";
import { base44 } from "@/api/base44Client";

const BASIC_TOPICS = ["triangulo", "tercios"];

export async function markTopicComplete(topicKey) {
  const existing = await base44.entities.Progress.filter({ topic_key: topicKey, completed: true });
  if (existing.length === 0) {
    await base44.entities.Progress.create({ topic_key: topicKey, completed: true });
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

  const refresh = useCallback(async () => {
    try {
      const records = await base44.entities.Progress.filter({});
      const topics = records.filter((r) => BASIC_TOPICS.includes(r.topic_key) && r.completed);
      setCompletedCount(topics.length);
      const photoRecord = records.find((r) => r.topic_key === "fotos_capturadas");
      setPhotoCount(photoRecord?.count || 0);
    } catch {
      setCompletedCount(0);
      setPhotoCount(0);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const cursosCompletados = completedCount === BASIC_TOPICS.length ? 1 : 0;

  return {
    completedCount,
    totalCount: BASIC_TOPICS.length,
    percentage: (completedCount / BASIC_TOPICS.length) * 100,
    cursosCompletados,
    photoCount,
    refresh,
  };
}