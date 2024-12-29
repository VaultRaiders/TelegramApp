import { QueryClient, useQuery } from "@tanstack/react-query";

import { BOT_LIST_PAGE_SIZE } from "@/constants";
import telegramApiClient from "@/libs/api-telegram";

export const useBotList = ({
  page,
  pageSize,
  isActive,
}: {
  page?: number;
  pageSize?: number;
  isActive?: boolean;
}) => {
  const queryClient = new QueryClient();
  return useQuery({
    queryKey: ["botList", isActive],
    queryFn: async (): Promise<IBotData[]> => {
      const response = await telegramApiClient.get(
        `/bot?isActive=${isActive}&orderBy=balance&sort=desc&page=${page ?? 1}&limit=${pageSize ?? BOT_LIST_PAGE_SIZE}`,
      );

      return response.data.data || [];
    },
    initialData: () => {
      const allBots = queryClient.getQueryData<IBotData[]>(["botList", true]);
      const filteredData =
        allBots?.filter((bot) => bot.isActive == isActive) ?? [];

      return filteredData.length > 0 ? filteredData : [];
    },
  });
};
