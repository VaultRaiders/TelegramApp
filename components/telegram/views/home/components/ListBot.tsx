"use client";

import { useBotList } from "@/hooks/api/useBotList";

import BotCard from "../../../../common/BotCard";

const ListBot = () => {
  const { data: bots } = useBotList({});

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {bots?.map((bot) => <BotCard key={bot?.id} {...bot} />)}
    </div>
  );
};

export default ListBot;
