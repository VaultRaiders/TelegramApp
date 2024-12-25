import { useQuery } from "@tanstack/react-query";

import { BOT_LIST_PAGE_SIZE } from "@/constants";
import telegramApiClient from "@/libs/api-telegram";

export const useMyBotList = ({
  page,
  pageSize,
  createdBy,
}: {
  page?: number;
  pageSize?: number;
  createdBy?: string;
}) => {
  return useQuery({
    queryKey: ["myBotList", page, pageSize],
    queryFn: async (): Promise<IBotData[]> => {
      const response = await telegramApiClient.get(
        `/bot?isActive=true&orderBy=balance&sort=desc&page=${page || 1}&createdBy=${createdBy}&limit=${pageSize || BOT_LIST_PAGE_SIZE}`,
      );
      return response.data.data || [];
    },
    enabled: !!createdBy,
  });
};
