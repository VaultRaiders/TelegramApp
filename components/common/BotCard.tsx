import Image from "next/image";

import { Link } from "@/i18n/routing";

import CoinAmount from "./CoinAmount";
import { useEffect, useState } from "react";
import { calcRemainingHours, formatTimestampToObj } from "@/utils/time";

const CountDown = ({ lastRejectedAt }: { lastRejectedAt: string }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>();

  const backgroundPath =
    timeRemaining <= 600
      ? "/assets/bg-countdown-2.png"
      : "/assets/bg-countdown-1.png";

  useEffect(() => {
    setTimeRemaining(Math.round(calcRemainingHours(lastRejectedAt, 12) / 1000));
  }, [lastRejectedAt]);

  const time = formatTimestampToObj(timeRemaining);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer); // Stop the countdown when it reaches zero
          return 0;
        }
        return prevTime - 1; // Decrease the time by 1 second
      });
    }, 1000);
    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, []);

  return (
    <div
      className="flex gap-0.5 text-sm"
      style={{
        fontFamily: "Luminari",
      }}
    >
      <div className="relative box-border h-6 w-6 p-0.5">
        <p className="relative z-10 h-full w-full text-center text-[#5D3127]">
          {time.hours < 10 ? "0" + time.hours : time.hours}
        </p>
        <Image src={backgroundPath} fill alt="Countdown" className="absolute" />
      </div>
      {":"}
      <div className="relative h-6 w-6 p-0.5">
        <p className="relative z-10 text-center text-[#5D3127]">
          {time.minutes < 10 ? "0" + time.minutes : time.minutes}
        </p>
        <Image src={backgroundPath} fill alt="Countdown" className="absolute" />
      </div>
      {":"}
      <div className="relative h-6 w-6 p-0.5">
        <p className="relative z-10 text-center text-[#5D3127]">
          {time.secs < 10 ? "0" + time.secs : time.secs}
        </p>
        <Image src={backgroundPath} fill alt="Countdown" className="absolute" />
      </div>
    </div>
  );
};
const BotCard = ({
  id,
  photoUrl,
  displayName,
  balance,
  ticketPrice,
  lastRejectedAt,
  isActive,
}: IBotCardProps) => {
  const [timeRemaining, setTimeRemaining] = useState<number>();

  useEffect(() => {
    if (lastRejectedAt && isActive) {
      const targetTime = new Date(
        new Date(lastRejectedAt).getTime() + 12 * 60 * 60 * 1000, //12 hours in seconds,
      );
      const newTimeRemaining = targetTime.getTime() - new Date().getTime();
      if (newTimeRemaining <= 0) {
        setTimeRemaining(0);
        return;
      }
      setTimeRemaining(Math.round(newTimeRemaining / 1000));
    }
  }, [lastRejectedAt]);
  return (
    <Link href={`/bot/${id}`}>
      <div
        className="relative flex aspect-[200/270] w-full items-end text-[#FFE0C2]"
        style={{
          border: "1px solid",
          borderImageSlice: 30,
          borderImageSource:
            "linear-gradient(160.05deg, #67451D -12.84%, #1C1916 41.75%, #55432E 101.27%)",
        }}
      >
        {/* Card countdown */}
        {lastRejectedAt && (
          <div className="absolute right-3 top-0 z-20">
            <CountDown lastRejectedAt={lastRejectedAt} />
          </div>
        )}

        {/* Card background */}
        <div className="absolute h-full w-full p-[1px]">
          <Image
            src="/assets/bg-bot-1.png"
            alt="Background"
            fill
            className="!static object-cover"
          />
        </div>
        {/* Card Image */}
        <div className="absolute left-1/2 top-[10%] w-[80%] -translate-x-1/2">
          <Image
            src={
              photoUrl
                ? `https://storage.googleapis.com/vault-raiders/${photoUrl}`
                : "/assets/avatar-bot-1.png"
            }
            alt="Background"
            fill
            className="!static"
          />
        </div>
        {/* Card information */}
        <div
          className="relative z-10 flex w-full flex-col p-3 pt-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.72) 23.44%)",
          }}
        >
          <div
            className="text-center text-3xl uppercase"
            style={{
              fontFamily: "JimNightshade",
            }}
          >
            {displayName}
          </div>
          <div className="flex flex-col items-center justify-center gap-x-2 gap-y-3">
            <div className="flex w-full items-center justify-evenly">
              <div
                className="text-xs text-[#BEB7B1]"
                style={{
                  fontFamily: "Luminari",
                }}
              >
                Vault value
              </div>
              <CoinAmount amount={balance} className="text-3xl" />
            </div>
            <div className="w-[80%]">
              <div className="relative z-0 flex h-[32px] w-full min-w-[72px] items-center justify-center text-xl">
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
                    amount={ticketPrice}
                    className="text-3xl text-[#81392D]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BotCard;
