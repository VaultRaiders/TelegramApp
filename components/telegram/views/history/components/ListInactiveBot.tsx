"use client";

import InactiveBotCard from "@/components/common/InactiveBotCard";
import { useInactiveBotList } from "@/hooks/api/useInactiveBotList";

const ListInactiveBot = () => {
  const { data: bots } = useInactiveBotList({});
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {bots?.map((bot) => (
        <InactiveBotCard key={bot?.id} {...bot} isActive={false} />
      ))}
    </div>
  );
};

export default ListInactiveBot;
