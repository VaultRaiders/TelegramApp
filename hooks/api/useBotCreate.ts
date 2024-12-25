import { useMutation } from "@tanstack/react-query";
import { initDataRaw } from "@telegram-apps/sdk-react";

import telegramApiClient from "@/libs/api-telegram";

export const useBotCreate = () => {
  return useMutation({
    mutationKey: ["botCreate"],
    mutationFn: async (
      payload: IBotCreateData,
    ): Promise<IQueryResponse<any>> => {
      try {
        await telegramApiClient.post(`/bot`, payload, {
          headers: {
            authorization: `tma ${initDataRaw()}`,
          },
        });

        return { message: "success" };
      } catch {
        return {
          message: "error",
        };
      }
    },
  });
};
