"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { useBotDetail } from "@/hooks/api/useBotDetail";
import { cn } from "@/libs/utils";

const TabAbout = ({ botId }: { botId: string }) => {
  const { data: botData } = useBotDetail({ botId });

  const [enableScroll, setEnableScroll] = useState<boolean>(false);

  const handleScrollEvent = () => {
    const chatScroll = document.getElementById("chat-scroll");
    if (chatScroll) {
      const top = chatScroll.getBoundingClientRect().top;

      if (top < 114) {
        setEnableScroll(true);
      } else {
        setEnableScroll(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScrollEvent);

    return () => {
      document.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className="relative z-0 overflow-hidden text-[#493010]">
      <div className="absolute left-1/2 top-0 -z-10 w-[107%] -translate-x-1/2">
        <Image
          src="/assets/scroll.png"
          alt="Chat History"
          fill
          className="!static h-auto w-full object-contain"
        />
      </div>
      <div className="flex h-16 items-center justify-center">
        <div
          className="text-center text-3xl"
          style={{
            fontFamily: "JimNightshade",
          }}
        >
          - {botData?.displayName} -
        </div>
      </div>
      <div className="grid grid-cols-3 px-4 pt-1 text-center">
        <div>
          <div
            className="text-sm"
            style={{
              fontFamily: "Luminari",
            }}
          >
            Total Participants
          </div>
          <div
            className="text-xl"
            style={{
              fontFamily: "Asul",
            }}
          >
            {botData?.userCount}
          </div>
        </div>
        <div>
          <div
            className="text-sm"
            style={{
              fontFamily: "Luminari",
            }}
          >
            Break Attempts
          </div>
          <div
            className="text-xl"
            style={{
              fontFamily: "Asul",
            }}
          >
            {botData?.ticketCount || 0}
          </div>
        </div>
        <div>
          <div
            className="text-sm"
            style={{
              fontFamily: "Luminari",
            }}
          >
            Message Price
          </div>
          <div
            className="text-xl"
            style={{
              fontFamily: "Asul",
            }}
          >
            {botData?.ticketCount || 0}
          </div>
        </div>
      </div>
      <div className="h-10 w-full">
        <Image
          src="/assets/scroll-line.png"
          alt="Scroll"
          fill
          className="!static h-full w-auto object-contain"
        />
      </div>
      <div
        id="chat-scroll"
        className={cn(
          "no-scrollbar h-[calc(100dvh-7rem)] overflow-hidden",
          enableScroll && "overflow-y-auto",
        )}
      >
        <div className="space-y-3 px-6 py-2">
          <div className="rounded-xl bg-[#65533F]/20 p-4">{botData?.bio}</div>
          <div className="rounded-xl bg-[#65533F]/20 p-4">
            {botData?.greeting}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabAbout;
