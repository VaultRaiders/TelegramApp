import { useQuery } from "@tanstack/react-query";

import telegramApiClient from "@/libs/api-telegram";
import { initDataRaw } from "@telegram-apps/sdk";

export const useGenerateBotAvatar = ({
  avatarDescription,
}: {
  avatarDescription: string;
}) => {
  return useQuery({
    queryKey: ["generateBotAvatar", avatarDescription],
    queryFn: async (): Promise<IGenerateBotAvatar> => {
      const response = await telegramApiClient.post(
        `/bot/generate-bot-avatar`,
        {
          avatarDescription,
        },
        {
          headers: {
            authorization: `tma test`,
          },
        },
      );

      return response.data.data || {};
    },
    staleTime: 0,
  });
};
