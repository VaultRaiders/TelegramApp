"use client";

import Image from "next/image";

import { DEFAULT_KID_IMAGE } from "@/constants";

interface BackgroundImageProps {
  bot: IBotData;
}

export const BackgroundImage = ({ bot }: BackgroundImageProps) => {
  const imageUrl =
    process.env.NEXT_PUBLIC_KID === "kid" ? DEFAULT_KID_IMAGE : bot.photo_url;

  return (
    <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <div className="absolute left-1/2 top-1/2 min-h-[120%] min-w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-50 blur-xl">
          <Image
            fill
            src={imageUrl}
            alt={bot.display_name}
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};
