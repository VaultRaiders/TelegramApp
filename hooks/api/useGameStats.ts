import { useQuery } from "@tanstack/react-query";
import { initDataRaw } from "@telegram-apps/sdk-react";

import telegramApiClient from "@/libs/api-telegram";

export const useGameStats = () => {
  return useQuery({
    queryKey: ["gameStats"],
    queryFn: async (): Promise<IGameStatsData> => {
      const response = await telegramApiClient.get("/bot/stats", {
        headers: {
          authorization: `tma ${initDataRaw()}`,
        },
      });
      return response.data.data || {};
    },
  });
};
