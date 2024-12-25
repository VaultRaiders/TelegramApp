"use client";

import { useLaunchParams } from "@telegram-apps/sdk-react";
import Image from "next/image";

import CoinAmount from "@/components/common/CoinAmount";
import { useGameStats } from "@/hooks/api/useGameStats";
import { useUserWallet } from "@/hooks/api/useUserWallet";
import { beautifulNumber } from "@/libs/utils";

import ListBot from "./components/ListBot";

const HomePage = () => {
  const user = useLaunchParams()?.initData?.user;
  const { data: walletData } = useUserWallet();
  const { data: gameStats } = useGameStats();
  return (
    <div
      className="min-h-dvh pb-24"
      style={{
        backgroundImage: "url('/assets/bg-game.png')",
        backgroundSize: "530px 964px",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-3 px-4">
        <div className="flex items-center">
          <div className="relative z-0 w-full">
            <div className="absolute left-5 top-1/2 -z-10 h-full -translate-y-1/2">
              <Image
                src="/assets/bg-profile.png"
                alt="Profile"
                fill
                className="!static h-10 w-auto"
              />
            </div>
            <div className="ralative flex items-center gap-2">
              <div className="h-11 w-11 rounded-full bg-purple-400"></div>
              <div
                style={{
                  fontFamily: "Luminari",
                }}
                className="truncate text-ellipsis"
              >
                {user?.username}
              </div>
            </div>
          </div>
        </div>
        <div className="h-20">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            fill
            className="!static h-20 w-auto object-contain"
          />
        </div>
        <div className="flex items-center">
          <div className="relative z-0 w-full">
            <div className="absolute left-5 top-1/2 -z-10 h-8 -translate-y-1/2">
              <Image
                src="/assets/bg-balance.png"
                alt="Balance"
                fill
                className="!static h-8 w-auto"
              />
            </div>
            <div className="ralative flex items-center gap-2 text-primary">
              <div className="h-11 w-11">
                <Image
                  src="/assets/coin.png"
                  alt="Coin"
                  fill
                  className="!static h-11 w-auto"
                />
              </div>
              <div
                className="text-4xl"
                style={{
                  fontFamily: "Jacquard24",
                }}
              >
                <CoinAmount amount={walletData?.balance} showCoin={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 flex h-full w-full">
            <div className="h-full w-full bg-gradient-to-r from-transparent to-primary/25"></div>
            <div className="h-full w-full bg-gradient-to-l from-transparent to-primary/25"></div>
          </div>
          <div
            className="relative flex items-center justify-between p-4"
            style={{
              fontFamily: "Luminari",
            }}
          >
            <div>Total bots: {beautifulNumber(gameStats?.playingNumbers)}</div>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <div>Playing: {beautifulNumber(gameStats?.playingUsers)}</div>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <div className="flex items-center gap-1.5">
              Prize total:{" "}
              <CoinAmount
                amount={(
                  +(gameStats?.totalPrice || 0) * Math.pow(10, 18)
                ).toString()}
                normalFont
                className="pb-0 text-base text-current"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/35"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/35"></div>
        </div>
      </div>

      <div className="p-4">
        <ListBot />
      </div>
    </div>
  );
};

export default HomePage;
