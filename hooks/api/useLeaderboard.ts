import { useQuery } from "@tanstack/react-query";
import { initDataRaw } from "@telegram-apps/sdk-react";

import telegramApiClient from "@/libs/api-telegram";

export const useLeaderboard = () => {
  return useQuery({
    queryKey: ["leaderboard"],
    queryFn: async (): Promise<ILeaderboardData> => {
      const response = await telegramApiClient.get("/user/leaderboard?k=100", {
        headers: {
          authorization: `tma ${initDataRaw()}`,
        },
      });
      return response.data.data || {};
    },
  });
};
