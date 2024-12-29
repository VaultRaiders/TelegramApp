import { useMutation } from "@tanstack/react-query";
import { initDataRaw } from "@telegram-apps/sdk-react";

import telegramApiClient from "@/libs/api-telegram";
import { AxiosResponse } from "axios";
import { useLoadingStore } from "@/store/loading";

export const useGenerateBotData = () => {
  const setLoading = useLoadingStore((state: any) => state.toggleLoading);
  const mutation = useMutation({
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

  if (mutation.isPending) {
    setLoading(true);
  }
  if (mutation.isSuccess) {
    setLoading(false);
  }
  return mutation;
};
