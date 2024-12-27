import { useState, useEffect, useCallback, useRef } from "react";

import { BOT_LIST_PAGE_SIZE } from "@/constants";
import telegramApiClient from "@/libs/api-telegram";

interface UseBotListReturn {
  bots: IBotData[];
  isFetching: boolean;
  error: string;
  hasMore: boolean;
  loadMore: () => Promise<void>;
}

export const useBotList = ({ isActive = true } = {}): UseBotListReturn => {
  const [bots, setBots] = useState<IBotData[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const currentPage = useRef(1);

  const fetchBots = async (page: number) => {
    setIsFetching(true);
    setError("");

    try {
      const response = await telegramApiClient.get(
        `/bot?isPublic=${isActive}&page=${page}&limit=${BOT_LIST_PAGE_SIZE}`,
      );
      const newBots: IBotData[] = response.data.data;

      // Check if we've reached the end
      if (newBots.length < BOT_LIST_PAGE_SIZE) {
        setHasMore(false);
      }

      setBots((prevBots) => (page === 1 ? newBots : [...prevBots, ...newBots]));
    } catch (error) {
      setError("Failed to fetch bots. Please try again later.");
      console.error("Error fetching bots:", error);
    } finally {
      setIsFetching(false);
    }
  };

  const loadMore = useCallback(async () => {
    if (isFetching || !hasMore) return;
    currentPage.current += 1;
    await fetchBots(currentPage.current);
  }, [isFetching, hasMore]);

  useEffect(() => {
    fetchBots(1);
  }, []);

  return { bots, isFetching, error, hasMore, loadMore };
};
