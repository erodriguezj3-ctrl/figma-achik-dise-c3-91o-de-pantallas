import { useState, useEffect, useCallback } from "react";
import { base44 } from "@/api/base44Client";

const BASIC_TOPICS = ["triangulo", "tercios"];

export async function markTopicComplete(topicKey) {
  const existing = await base44.entities.Progress.filter({ topic_key: topicKey, completed: true });
  if (existing.length === 0) {
    await base44.entities.Progress.create({ topic_key: topicKey, completed: true });
  }
}

export function useBasicProgress() {
  const [completedCount, setCompletedCount] = useState(0);

  const refresh = useCallback(async () => {
    try {
      const records = await base44.entities.Progress.filter({ completed: true });
      const count = records.filter((r) => BASIC_TOPICS.includes(r.topic_key)).length;
      setCompletedCount(count);
    } catch {
      setCompletedCount(0);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    completedCount,
    totalCount: BASIC_TOPICS.length,
    percentage: (completedCount / BASIC_TOPICS.length) * 100,
    refresh,
  };
}