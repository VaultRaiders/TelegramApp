import Image from "next/image";

import { Link } from "@/i18n/routing";

import CoinAmount from "./CoinAmount";
const BotCard = ({
  id,
  photoUrl,
  displayName,
  balance,
  ticketPrice,
}: IBotCardProps) => {
  return (
    <Link href={`/bot/${id}`}>
      <div className="relative flex aspect-[200/270] w-full items-end text-[#FFE0C2]">
        <div className="absolute flex h-full w-full flex-col">
          <div className="h-full w-full bg-gradient-to-t from-primary/5 to-primary/15"></div>
          <div className="h-full w-full bg-gradient-to-b from-primary/5 to-primary/15"></div>
        </div>
        <div className="absolute h-full w-full p-[1px]">
          <div className="h-full w-full">
            <Image
              src="/assets/bg-bot-1.png"
              alt="Background"
              fill
              className="!static object-cover"
            />
          </div>
        </div>
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
        <div className="relative z-10 flex w-full flex-col gap-2 bg-gradient-to-t from-black/70 from-30% to-transparent p-3 pt-5">
          <div
            className="text-center text-3xl uppercase"
            style={{
              fontFamily: "JimNightshade",
            }}
          >
            {displayName}
          </div>
          <div className="flex flex-wrap items-end justify-between gap-x-2 gap-y-3">
            <div className="flex flex-wrap justify-between gap-x-2">
              <div
                className="whitespace-nowrap text-sm"
                style={{
                  fontFamily: "Luminari",
                }}
              >
                Vault value
              </div>
              <CoinAmount amount={balance} />
            </div>
            {/* <div>
              <button className="relative flex h-8 w-20 items-center justify-center rounded-full">
                <div className="relative z-10">
                  <CoinAmount amount={ticketPrice} className="text-[#81392D]" />
                </div>
                <div className="absolute top-0 h-full w-full">
                  <Image
                    src="/assets/bg-button.png"
                    alt="Button"
                    fill
                    className="!static h-8 w-auto"
                  />
                </div>
              </button>
            </div> */}
            <div className="w-full">
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
                  <CoinAmount amount={ticketPrice} className="text-[#81392D]" />
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
