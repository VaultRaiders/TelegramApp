import { useMutation } from "@tanstack/react-query";
import { initDataRaw } from "@telegram-apps/sdk-react";

import telegramApiClient from "@/libs/api-telegram";

export const useBotBuyTicket = () => {
  return useMutation({
    mutationKey: ["botBuyTicket"],
    mutationFn: async ({
      botId,
      password,
    }: {
      botId: string;
      password: string;
    }): Promise<IQueryResponse<any>> => {
      try {
        await telegramApiClient.post(
          `/bot/${botId}/buy-ticket`,
          {
            password,
          },
          {
            headers: {
              authorization: `tma ${initDataRaw()}`,
            },
          },
        );

        return { message: "success" };
      } catch {
        return {
          message: "error",
        };
      }
    },
  });
};
