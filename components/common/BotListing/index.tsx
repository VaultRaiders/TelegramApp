"use client";

import { useId, useEffect, useRef, useCallback } from "react";

import { GRID_SKELETON_COUNT } from "@/constants";
import { useBotList } from "@/hooks/useBotList";

import { BotCard } from "../BotCard";
import { GridSkeleton } from "./GridSkeleton";
import { LoadMoreButton } from "../LoadMoreButton";

export const BotListing = () => {
  const id = useId();
  const { bots, isFetching, error, hasMore, loadMore } = useBotList();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasMore && !isFetching) {
        loadMore();
      }
    },
    [hasMore, isFetching, loadMore],
  );

  useEffect(() => {
    const loadMoreElement = loadMoreRef.current;
    if (!loadMoreElement) return;

    observerRef.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "100px",
      threshold: 0.1,
    });

    observerRef.current.observe(loadMoreElement);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver]);

  return (
    <div className="flex flex-col gap-5">
      {error && (
        <div className="alert alert-error text-center">
          <p>{error}</p>
        </div>
      )}

      <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {bots.map((bot) => (
          <BotCard key={bot.display_name} bot={bot} id={id} />
        ))}
        {isFetching && <GridSkeleton count={GRID_SKELETON_COUNT} />}
      </ul>

      {hasMore && (
        <div ref={loadMoreRef} className="flex justify-center">
          <LoadMoreButton onClick={loadMore} isLoading={isFetching} />
        </div>
      )}
    </div>
  );
};
