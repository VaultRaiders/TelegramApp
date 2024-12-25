"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import TimeAgo from "timeago-react";

import { useBotChatHistory } from "@/hooks/api/useBotChatHistory";
import { useBotDetail } from "@/hooks/api/useBotDetail";
import { cn } from "@/libs/utils";

const TabChatHistory = ({ botId }: { botId: string }) => {
  const { data: botData } = useBotDetail({ botId });
  const { data: chatData } = useBotChatHistory({ botId });

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
      <div className="px-6 py-3 text-center">{botData?.greeting}</div>
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
        <div className="space-y-5 px-6 pb-40">
          {chatData?.map((message) =>
            message?.senderRole === "bot" ? (
              <div key={message.id} className="flex gap-2">
                <div
                  className="h-11 w-full max-w-11 overflow-hidden rounded-full"
                  style={{
                    backgroundImage: "url('/assets/bg-bot-1.png')",
                    backgroundPosition: "center",
                  }}
                >
                  <Image
                    src={
                      botData?.photoUrl !== "goblin1"
                        ? botData?.photoUrl
                        : "/assets/avatar-bot-1.png"
                    }
                    alt="Bot"
                    fill
                    className="!static object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-[#665D4F]">
                    {botData?.displayName}
                  </div>
                  <div className="w-fit rounded-xl bg-[#32313F] p-2.5 text-white">
                    <div
                      style={{
                        color: "#D1DBE6",
                      }}
                    >
                      {message?.text}
                    </div>
                    <div
                      className="text-right text-sm"
                      style={{
                        fontFamily: "Luminari",
                        color: "#7D7D7D",
                      }}
                    >
                      <TimeAgo datetime={message.createdAt} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={message.id} className="flex justify-end">
                <div className="w-fit rounded-xl bg-[#D1DBE6] p-2.5 text-[#2B2D37]">
                  <div>{message?.text}</div>
                  <div
                    className="text-right text-sm"
                    style={{
                      fontFamily: "Luminari",
                      color: "#7D7D7D",
                    }}
                  >
                    <TimeAgo datetime={message.createdAt} />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default TabChatHistory;
