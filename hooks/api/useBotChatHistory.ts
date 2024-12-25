import { useQuery } from "@tanstack/react-query";
import { initDataRaw } from "@telegram-apps/sdk-react";

import telegramApiClient from "@/libs/api-telegram";

export const useBotChatHistory = ({ botId }: { botId?: string }) => {
  return useQuery({
    queryKey: ["botChatHistory", botId],
    queryFn: async (): Promise<IBotChatMessageData[]> => {
      const response = await telegramApiClient.get(
        `/bot/${botId}/chat-history`,
        {
          headers: {
            authorization: `tma ${initDataRaw()}`,
          },
        },
      );
      return response.data.data || [];
    },
    enabled: !!botId,
  });
};
