import Card from "@/components/core/card";
import { Link } from "@/i18n/routing";

import { BackgroundImage } from "./BackgroundImage";
import { CardContent } from "./CardContent";

interface BotCardProps {
  bot: IBotData;
  id: string;
}

export const BotCard = ({ bot, id }: BotCardProps) => (
  <Link href={`/${bot.id}`}>
    <Card neon className="relative flex h-full flex-col">
      <BackgroundImage bot={bot} />
      <CardContent bot={bot} id={id} />
    </Card>
  </Link>
);
