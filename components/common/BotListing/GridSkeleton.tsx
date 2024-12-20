"use client";

interface GridSkeletonProps {
  count: number;
}

export const GridSkeleton = ({ count }: GridSkeletonProps) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="skeleton h-64 w-full rounded-xl bg-neutral-800/50"
      />
    ))}
  </>
);
