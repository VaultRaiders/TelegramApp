"use client";

import InactiveBotCard from "@/components/common/InactiveBotCard";
import { useBotList } from "@/hooks/api/useBotList";

const ListInactiveBot = () => {
  const { data: bots } = useBotList({ isActive: false });
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {bots?.map((bot) => (
        <InactiveBotCard key={bot?.id} {...bot} isActive={false} />
      ))}
    </div>
  );
};

export default ListInactiveBot;
