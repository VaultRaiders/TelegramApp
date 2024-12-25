import { useQuery } from "@tanstack/react-query";
import { initDataRaw } from "@telegram-apps/sdk-react";

import telegramApiClient from "@/libs/api-telegram";

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: async (): Promise<IProfileData> => {
      const response = await telegramApiClient.get("/user/me", {
        headers: {
          authorization: `tma ${initDataRaw()}`,
        },
      });
      return response.data.data || {};
    },
  });
};
