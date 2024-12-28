"use client";

import { useLaunchParams } from "@telegram-apps/sdk-react";
import Image from "next/image";

import CoinAmount from "@/components/common/CoinAmount";
import { useGameStats } from "@/hooks/api/useGameStats";
import { useUserWallet } from "@/hooks/api/useUserWallet";
import { beautifulNumber } from "@/libs/utils";

import ListBot from "./components/ListBot";
import LinearBackground from "@/components/common/LinearBackground";

const LeftHeader = ({
  username,
  wallet,
}: {
  username: string;
  wallet: string;
}) => {
  return (
    <div className="w-30 relative flex h-11 overflow-hidden rounded-l-full">
      <Image
        src="/assets/bg-profile.png"
        alt="Profile"
        fill
        className="absolute"
      />
      <div className="relative h-11 w-11 shrink-0">
        <Image
          src={"/assets/avatar-default.png"}
          alt="Avatar"
          fill
          className="rounded-full"
          objectFit="cover"
        />
      </div>
      <div
        style={{
          fontFamily: "Luminari",
        }}
        className="truncate px-2 text-white"
      >
        <p className="relative truncate text-ellipsis p-0 leading-5">
          {username}
        </p>
        <p className="relative truncate text-ellipsis leading-5">{wallet}</p>
      </div>
    </div>
  );
};

const CenterHeader = () => {
  return (
    <div className="h-20">
      <Image
        src="/assets/logo.png"
        alt="Logo"
        fill
        className="!static h-20 w-auto object-contain"
      />
    </div>
  );
};

const RightHeader = ({ balance }: { balance: string }) => {
  return (
    <div className="relative h-8 w-full">
      <div className="flex h-8 items-center justify-between">
        <Image src="/assets/bg-balance.png" alt="Balance" fill />

        <div className="absolute flex w-full items-center justify-between pr-4">
          <div className="h-11 w-11 basis-2/5">
            <Image
              src="/assets/coin.png"
              alt="Coin"
              fill
              className="!static h-11 w-auto"
            />
          </div>
          <CoinAmount amount={balance} showCoin={false} />
        </div>
      </div>
    </div>
  );
};
const HomePage = () => {
  const user = useLaunchParams()?.initData?.user;
  const { data: walletData } = useUserWallet();
  const { data: gameStats } = useGameStats();

  return (
    <div
      className="min-h-dvh px-3 pb-24"
      style={{
        backgroundImage: "url('/assets/bg-game.png')",
        backgroundSize: "530px 964px",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-3 items-center px-4">
        <LeftHeader username={user?.username} wallet={walletData?.address} />
        <CenterHeader />
        <RightHeader balance={walletData?.balance} />
      </div>
      {/* )} */}
      <div className="">
        <LinearBackground>
          <div
            className="flex items-center justify-evenly py-3 font-thin text-white"
            style={{
              fontFamily: "Luminari",
            }}
          >
            <div>
              <p>Total bots: {beautifulNumber(gameStats?.totalBots)}</p>
            </div>
            <div className="h-0.5 w-0.5 rounded-full bg-primary"></div>
            <div>
              <p>Playing: {beautifulNumber(gameStats?.playingUsers)}</p>
            </div>
            <div className="h-0.5 w-0.5 rounded-full bg-primary"></div>
            <div className="flex items-center gap-1 text-sm">
              <p>Prize total: </p>
              <CoinAmount
                amount={(
                  +(gameStats?.totalPrice || 0) * Math.pow(10, 18)
                ).toString()}
                normalFont
                className="pb-0 text-base text-current"
              />
            </div>
          </div>
        </LinearBackground>
      </div>

      <div className="py-4">
        <ListBot />
      </div>
    </div>
  );
};

export default HomePage;
