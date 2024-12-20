"use client";

import Image from "next/image";
import { FaGlobe } from "react-icons/fa";

import { DEFAULT_KID_IMAGE } from "@/constants";

interface BotImageProps {
  photoUrl: string;
  displayName: string;
  locale: string;
  isPublic: boolean;
}

export const BotImage = ({
  photoUrl,
  displayName,
  locale,
  isPublic,
}: BotImageProps) => {
  const imageUrl =
    process.env.NEXT_PUBLIC_KID === "kid" ? DEFAULT_KID_IMAGE : photoUrl;

  return (
    <div className="relative">
      <Image
        priority
        width={500}
        height={500}
        src={imageUrl}
        alt={displayName}
        className="h-96 w-full object-cover object-top"
      />
      <div className="absolute right-4 top-4 flex gap-2">
        <div className="badge badge-ghost gap-2 bg-base-200/80 p-4 font-bold capitalize backdrop-blur-sm">
          <FaGlobe className="h-4 w-4" />
          {locale || "en"}
        </div>
        {isPublic && (
          <div className="badge badge-primary p-4 font-bold text-white backdrop-blur-sm">
            Public
          </div>
        )}
      </div>
    </div>
  );
};
