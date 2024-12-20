import { useState, useEffect } from "react";

import telegramApiClient from "@/libs/api-telegram";

interface UseBotDataReturn {
  bot: IBotData | null;
  error: string;
  isLoading: boolean;
}

export const useBotData = (botId: string): UseBotDataReturn => {
  const [bot, setBot] = useState<IBotData | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBotData = async () => {
      if (!botId) return;

      setIsLoading(true);
      setError("");

      try {
        const response = await telegramApiClient.get(`/bot/${botId}`);
        setBot(response.data.data);
      } catch (error) {
        setError("Failed to load bot details");
        console.error("Error fetching bot:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBotData();
  }, [botId]);

  return { bot, error, isLoading };
};
