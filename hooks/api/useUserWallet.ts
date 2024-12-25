import { useQuery } from "@tanstack/react-query";
import { initDataRaw } from "@telegram-apps/sdk-react";

import telegramApiClient from "@/libs/api-telegram";

export const useUserWallet = () => {
  return useQuery({
    queryKey: ["userWallet"],
    queryFn: async (): Promise<IWalletData> => {
      const response = await telegramApiClient.get("/wallet", {
        headers: {
          authorization: `tma ${initDataRaw()}`,
        },
      });
      return response.data.data || {};
    },
  });
};
