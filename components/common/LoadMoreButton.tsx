"use client";

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export const LoadMoreButton = ({ onClick, isLoading }: LoadMoreButtonProps) => (
  <button
    onClick={onClick}
    disabled={isLoading}
    className="mx-auto mt-8 rounded-lg bg-primary px-6 py-2 text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {isLoading ? "Loading..." : "Load More"}
  </button>
);
