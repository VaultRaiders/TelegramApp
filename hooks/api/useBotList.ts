import { useQuery } from "@tanstack/react-query";

import { BOT_LIST_PAGE_SIZE } from "@/constants";
import telegramApiClient from "@/libs/api-telegram";

export const useBotList = ({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}) => {
  return useQuery({
    queryKey: ["botList", page, pageSize],
    queryFn: async (): Promise<IBotData[]> => {
      const response = await telegramApiClient.get(
        `/bot?isActive=true&orderBy=balance&sort=desc&page=${page || 1}&limit=${pageSize || BOT_LIST_PAGE_SIZE}`,
      );
      return response.data.data || [];
    },
  });
};
