"use client";

import Image from "next/image";

import { Link } from "@/i18n/routing";
import { useCreateStore } from "@/store/create";

const MyBotPage = () => {
  const { setBotData } = useCreateStore();

  return (
    <div
      className="min-h-dvh pb-24"
      style={{
        backgroundImage: "url('/assets/bg-create.png')",
        backgroundSize: "495px 1051px",
        backgroundPositionX: "center",
      }}
    >
      <div className="mx-auto w-fit pt-8">
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 flex h-full w-full">
            <div className="h-full w-full bg-gradient-to-r from-transparent to-yellow-950/50"></div>
            <div className="h-full w-full bg-gradient-to-l from-transparent to-yellow-950/50"></div>
          </div>
          <div
            className="relative flex items-center justify-center gap-2 p-2 px-20 text-3xl text-primary"
            style={{
              fontFamily: "JimNightshade",
            }}
          >
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <div>YOUR BOT</div>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
          </div>
        </div>
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/35"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/35"></div>
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
      </div>
    </div>
  );
};

export default MyBotPage;
