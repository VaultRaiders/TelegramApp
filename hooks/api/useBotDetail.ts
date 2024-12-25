import { useQuery } from "@tanstack/react-query";
import { initDataRaw } from "@telegram-apps/sdk-react";

import telegramApiClient from "@/libs/api-telegram";

export const useBotDetail = ({ botId }: { botId?: string }) => {
  return useQuery({
    queryKey: ["botDetail", botId],
    queryFn: async (): Promise<IBotData> => {
      const response = await telegramApiClient.get(`/bot/${botId}`, {
        headers: {
          authorization: `tma ${initDataRaw()}`,
        },
      });
      return response.data.data || {};
    },
    enabled: !!botId,
  });
};
