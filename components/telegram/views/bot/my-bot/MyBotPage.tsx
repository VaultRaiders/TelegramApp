"use client";

import { useLaunchParams } from "@telegram-apps/sdk-react";
import Image from "next/image";

import BotCard from "@/components/common/BotCard";
import { useMyBotList } from "@/hooks/api/useMyBotList";
import { Link } from "@/i18n/routing";
import { useCreateStore } from "@/store/create";
import PageHeading from "@/components/common/PageHeading";
import InactiveBotCard from "@/components/common/InactiveBotCard";

const MyBotPage = () => {
  const { setBotData } = useCreateStore();
  const user = useLaunchParams()?.initData?.user;

  const { data: botList } = useMyBotList({ createdBy: `${user?.id}` });

  return (
    <div
      className="relative min-h-dvh overflow-hidden pb-24"
      style={{
        backgroundImage: "url('/assets/bg-create.png')",
        backgroundSize: "495px 1051px",
        backgroundPositionX: "center",
      }}
    >
      <div className="absolute left-1/2 top-0 w-[495px] -translate-x-1/2">
        <Image
          src="/assets/bg-create-top.png"
          alt="create"
          width={495}
          height={142.5}
          className="!static object-contain"
        />
      </div>

      <div className="relative mx-auto w-fit pt-8">
        <div className="relative">
          <PageHeading title="your bot" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
        <Link href={`/create`} onClick={() => setBotData({})}>
          <div className="relative flex aspect-[200/270] w-full items-end text-[#FFE0C2]">
            <div className="absolute flex h-full w-full flex-col">
              <div className="h-full w-full bg-gradient-to-t from-primary/5 to-primary/15"></div>
              <div className="h-full w-full bg-gradient-to-b from-primary/5 to-primary/15"></div>
            </div>
            <div className="absolute h-full w-full p-[1px]">
              <div className="h-full w-full">
                <Image
                  src="/assets/bg-bot-create.png"
                  alt="Background"
                  fill
                  className="!static object-cover"
                />
              </div>
            </div>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFE0C2]/60"
              style={{
                fontSize: 120,
                fontFamily: "JimNightshade",
              }}
            >
              ?
            </div>
            <div className="relative z-10 flex w-full flex-col gap-3 p-3 pb-8 pt-5 text-center">
              <div
                className="text-3xl uppercase leading-3"
                style={{
                  fontFamily: "JimNightshade",
                }}
              >
                create bot
              </div>
              <div
                className="text-sm text-[#BEB7B1]"
                style={{ fontFamily: "Luminari" }}
              >
                Let the game begin!
              </div>
            </div>
          </div>
        </Link>

        {botList
          ?.sort((a, b) => (b.isActive ? 1 : -1))
          .map((bot) => {
            return bot.isActive ? (
              <BotCard key={bot?.id} {...bot} />
            ) : (
              <InactiveBotCard key={bot?.id} {...bot} />
            );
          })}
      </div>
    </div>
  );
};

export default MyBotPage;
