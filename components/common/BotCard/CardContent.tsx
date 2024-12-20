"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { DEFAULT_KID_IMAGE } from "@/constants";

interface CardContentProps {
  bot: IBotData;
  id: string;
}

export const CardContent = ({ bot, id }: CardContentProps) => {
  const imageUrl =
    process.env.NEXT_PUBLIC_KID === "kid" ? DEFAULT_KID_IMAGE : bot.photo_url;

  return (
    <div className="relative flex w-full flex-grow flex-col">
      <motion.div
        layoutId={`image-${bot.display_name}-${id}`}
        className="overflow-hidden rounded-t-xl"
      >
        <Image
          width={100}
          height={100}
          src={imageUrl}
          alt={bot.display_name}
          className="aspect-[4/5] w-full object-cover object-top"
        />
      </motion.div>
      <div className="bottom-0 left-0 right-0 flex flex-grow flex-col overflow-hidden rounded-b-xl bg-neutral-700/10 px-2 py-3">
        <motion.h3
          layoutId={`title-${bot.display_name}-${id}`}
          className="text-xl font-medium text-white md:text-left"
        >
          {bot.display_name}
        </motion.h3>
        <motion.p
          layoutId={`description-${bot.display_name}-${id}`}
          className="truncate text-sm text-neutral-400 md:text-left"
        >
          {bot.greeting}
        </motion.p>
      </div>
    </div>
  );
};
