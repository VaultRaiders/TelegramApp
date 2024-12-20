"use client";

import { ReactNode } from "react";

import { FaHeart, FaComments, FaCamera } from "react-icons/fa";

interface BotStatsProps {
  vote: number;
  messageCount: number;
  photoCount: number;
}

export const BotStats = ({ vote, messageCount, photoCount }: BotStatsProps) => (
  <div className="flex items-center gap-2">
    <StatBadge
      icon={<FaHeart className="h-4 w-4" />}
      value={vote}
      type="primary"
    />
    <StatBadge
      icon={<FaComments className="h-4 w-4" />}
      value={messageCount}
      type="info"
    />
    <StatBadge
      icon={<FaCamera className="h-4 w-4" />}
      value={photoCount}
      type="success"
    />
  </div>
);

interface StatBadgeProps {
  icon: ReactNode;
  value: number;
  type: "primary" | "info" | "success";
}

const StatBadge = ({ icon, value, type }: StatBadgeProps) => (
  <div className={`badge badge-outline gap-1 p-3 badge-${type}`}>
    {icon}
    {value}
  </div>
);
