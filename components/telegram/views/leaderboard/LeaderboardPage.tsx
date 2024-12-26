"use client";

import { useMemo } from "react";

import Image from "next/image";

import CoinAmount from "@/components/common/CoinAmount";
import { useLeaderboard } from "@/hooks/api/useLeaderboard";

const Avatar = () => {
  return (
    <div className="h-14 w-14 overflow-hidden rounded-full bg-[#827668]">
      <Image
        src="/assets/avatar-bot-1.png"
        alt="avatar"
        fill
        className="!static object-cover"
      />
    </div>
  );
};

const LeaderboardCard = ({
  amount,
  title,
  iconUrl,
  showCoin = false,
}: {
  amount: string;
  title: string;
  iconUrl: string;
  showCoin?: boolean;
}) => {
  return (
    <div className="space-y-3 rounded-2xl bg-[#24211B]/80 p-4">
      <div className="flex items-center justify-between">
        <CoinAmount
          amount={amount}
          noFormat
          showCoin={showCoin}
          className="text-[2.5rem] text-current"
        />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#817A66]">
          <Image
            src={iconUrl}
            alt="icon"
            width={22}
            height={22}
            className="!static object-contain"
          />
        </div>
      </div>
      <div
        className="text-sm"
        style={{
          fontFamily: "Luminari",
        }}
      >
        {title}
      </div>
    </div>
  );
};

const LeaderboardPage = () => {
  const { data: leaderboardData } = useLeaderboard();

  const [first, second, third, ...rest] = useMemo(() => {
    return leaderboardData?.leaderboard || [];
  }, [leaderboardData]);

  return (
    <div
      className="min-h-dvh overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bg-leaderboard.png')",
        backgroundSize: "596px 1048px",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "top",
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
            className="relative flex items-center justify-center gap-2 p-2 px-20 text-3xl uppercase text-primary"
            style={{
              fontFamily: "JimNightshade",
            }}
          >
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <div>leaderboard</div>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
          </div>
        </div>
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/35"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/35"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 px-6 pb-6 pt-10">
        <LeaderboardCard
          amount={`${leaderboardData?.metadata?.totalParticipants}`}
          title="Total Participants"
          iconUrl="/assets/nav-3.png"
        />
        <LeaderboardCard
          amount={`${leaderboardData?.metadata?.totalWin}`}
          title="Total Approved"
          iconUrl="/assets/icon-key.png"
        />
        <LeaderboardCard
          amount={`${leaderboardData?.metadata?.totalPrizeEarned}`}
          title="Total Prize Earned"
          iconUrl="/assets/icon-coin.png"
        />
        <LeaderboardCard
          amount={`${leaderboardData?.metadata?.totalPlays}`}
          title="Total Break Attempts"
          iconUrl="/assets/icon-axe.png"
        />
      </div>

      <div className="mx-auto w-fit">
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
            className="relative flex items-center justify-center gap-2 p-2 px-20 text-3xl uppercase text-primary"
            style={{
              fontFamily: "JimNightshade",
            }}
          >
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <div>Global ranking</div>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
          </div>
        </div>
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/35"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/35"></div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-4">
        <div className="relative z-0 flex h-80 w-80 flex-col justify-end">
          <div className="grid grid-cols-3 pb-28">
            <div className="flex flex-col items-center justify-end whitespace-nowrap pb-8">
              <Avatar />
              <div
                className="max-w-20 truncate pt-2"
                style={{
                  fontFamily: "Luminari",
                }}
              >
                {second?.username}
              </div>
              <div className="relative z-0 flex h-[32px] w-fit min-w-[72px] items-center justify-center text-xl">
                <div className="absolute left-[14px] right-[14px] top-0 -z-10 h-full">
                  <Image
                    src="/assets/btn-primary-center.png"
                    alt="Button"
                    fill
                    className="!static h-full w-auto"
                  />
                </div>
                <div className="absolute right-[14px] top-0 -z-10 h-full w-[40px]">
                  <Image
                    src="/assets/btn-primary-shadow.png"
                    alt="Button"
                    fill
                    className="!static h-full w-auto"
                  />
                </div>
                <div className="absolute left-0 top-0 -z-10 h-full w-[16px]">
                  <Image
                    src="/assets/btn-primary-left.png"
                    alt="Button"
                    fill
                    className="!static h-full w-full object-contain"
                  />
                </div>
                <div className="absolute right-0 top-0 -z-10 h-full w-[16px]">
                  <Image
                    src="/assets/btn-primary-right.png"
                    alt="Button"
                    fill
                    className="!static h-full w-full object-contain"
                  />
                </div>
                <div className="relative px-2">
                  <CoinAmount
                    amount={second?.winingAmount}
                    noFormat
                    className="text-[#81392D]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end whitespace-nowrap pb-16">
              <div className="relative">
                <Avatar />
                <div className="absolute bottom-[90%] left-1/2 aspect-video h-8 -translate-x-1/2">
                  <Image
                    src="/assets/crown.png"
                    alt="crown"
                    fill
                    className="!static object-contain"
                  />
                </div>
              </div>
              <div
                className="max-w-20 truncate pt-2"
                style={{
                  fontFamily: "Luminari",
                }}
              >
                {first?.username}
              </div>
              <div className="relative z-0 flex h-[32px] w-fit min-w-[72px] items-center justify-center text-xl">
                <div className="absolute left-[14px] right-[14px] top-0 -z-10 h-full">
                  <Image
                    src="/assets/btn-primary-center.png"
                    alt="Button"
                    fill
                    className="!static h-full w-auto"
                  />
                </div>
                <div className="absolute right-[14px] top-0 -z-10 h-full w-[40px]">
                  <Image
                    src="/assets/btn-primary-shadow.png"
                    alt="Button"
                    fill
                    className="!static h-full w-auto"
                  />
                </div>
                <div className="absolute left-0 top-0 -z-10 h-full w-[16px]">
                  <Image
                    src="/assets/btn-primary-left.png"
                    alt="Button"
                    fill
                    className="!static h-full w-full object-contain"
                  />
                </div>
                <div className="absolute right-0 top-0 -z-10 h-full w-[16px]">
                  <Image
                    src="/assets/btn-primary-right.png"
                    alt="Button"
                    fill
                    className="!static h-full w-full object-contain"
                  />
                </div>
                <div className="relative px-2">
                  <CoinAmount
                    amount={first?.winingAmount}
                    noFormat
                    className="text-[#81392D]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end whitespace-nowrap">
              <Avatar />
              <div
                className="max-w-20 truncate pt-2"
                style={{
                  fontFamily: "Luminari",
                }}
              >
                {third?.username}
              </div>
              <div className="relative z-0 flex h-[32px] w-fit min-w-[72px] items-center justify-center text-xl">
                <div className="absolute left-[14px] right-[14px] top-0 -z-10 h-full">
                  <Image
                    src="/assets/btn-primary-center.png"
                    alt="Button"
                    fill
                    className="!static h-full w-auto"
                  />
                </div>
                <div className="absolute right-[14px] top-0 -z-10 h-full w-[40px]">
                  <Image
                    src="/assets/btn-primary-shadow.png"
                    alt="Button"
                    fill
                    className="!static h-full w-auto"
                  />
                </div>
                <div className="absolute left-0 top-0 -z-10 h-full w-[16px]">
                  <Image
                    src="/assets/btn-primary-left.png"
                    alt="Button"
                    fill
                    className="!static h-full w-full object-contain"
                  />
                </div>
                <div className="absolute right-0 top-0 -z-10 h-full w-[16px]">
                  <Image
                    src="/assets/btn-primary-right.png"
                    alt="Button"
                    fill
                    className="!static h-full w-full object-contain"
                  />
                </div>
                <div className="relative px-2">
                  <CoinAmount
                    amount={third?.winingAmount}
                    noFormat
                    className="text-[#81392D]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -z-10 w-full">
            <Image
              src="/assets/podium.png"
              alt="bg"
              fill
              className="!static object-contain"
            />
          </div>
        </div>
        <div className="relative z-10 w-full px-8">
          <div className="absolute -top-3.5 left-1/2 h-3.5 w-20 -translate-x-1/2">
            <Image
              src="/assets/bg-leaderboard-top.png"
              alt="bg"
              fill
              className="!static object-contain"
            />
          </div>
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DCB99B]" />
          <div className="space-y-4 rounded-3xl bg-[#827668]/50 p-4 pb-32">
            {rest?.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-2xl bg-[#24211B]/80 p-4"
              >
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full border-[1.5px] border-[#665D4F] text-xs text-[#DCB99B]"
                  style={{
                    fontFamily: "Luminari",
                  }}
                >
                  {index + 4}
                </div>
                <Avatar />
                <div className="space-y-0.5">
                  <div
                    className="truncate"
                    style={{
                      fontFamily: "Luminari",
                    }}
                  >
                    {item?.username}
                  </div>
                  <CoinAmount amount={item?.winingAmount} noFormat />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
