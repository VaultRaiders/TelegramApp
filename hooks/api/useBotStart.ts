import { useMutation } from "@tanstack/react-query";
import { initDataRaw } from "@telegram-apps/sdk-react";

import telegramApiClient from "@/libs/api-telegram";

export const useBotStart = () => {
  return useMutation({
    mutationKey: ["botStart"],
    mutationFn: async ({
      botId,
    }: {
      botId: string;
    }): Promise<IQueryResponse<any>> => {
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

        return { message: "success" };
      } catch {
        return {
          message: "error",
        };
      }
    },
  });
};
