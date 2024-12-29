import { useMutation } from "@tanstack/react-query";
import { initDataRaw } from "@telegram-apps/sdk-react";

import telegramApiClient from "@/libs/api-telegram";
import { AxiosResponse } from "axios";

export const useGenerateBotData = () => {
  return useMutation({
    mutationKey: ["generateBotData"],
    mutationFn: async (payload: IGenerateBotData): Promise<AxiosResponse> => {
      try {
        const data = await telegramApiClient.post(
          `/bot/generate-bot-data`,
          payload,
          {
            headers: {
              authorization: `tma ${initDataRaw()}`,
            },
          },
        );

        return data;
      } catch {
        throw new Error("Generate bot data failed");
      }
    },
  });
};
