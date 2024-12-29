import { useState } from "react";
import telegramApiClient from "@/libs/api-telegram";
import { initDataRaw, miniApp } from "@telegram-apps/sdk-react";

interface UseStartChatReturn {
  startChat: () => Promise<void>;
  isStarting: boolean;
  error: string | null;
}

export const useStartChat = (botId: string): UseStartChatReturn => {
  const [isStarting, setIsStarting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startChat = async () => {
    setIsStarting(true);
    setError(null);

    try {
      await telegramApiClient.post(
        `/bot/${botId}/start`,
        {},
        {
          headers: {
            authorization: `tma ${initDataRaw()}`,
          },
        },
      );

      miniApp.close();
    } catch (err) {
      setError("Failed to start chat. Please try again.");
      console.error("Error starting chat:", err);
    } finally {
      setIsStarting(false);
    }
  };

  return { startChat, isStarting, error };
};
