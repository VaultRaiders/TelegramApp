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
            src={photoUrl !== "goblin1" ? photoUrl : "/assets/avatar-bot-1.png"}
            alt="Background"
            fill
            className="!static"
          />
        </div>
        <div className="relative z-10 flex w-full flex-col gap-3 bg-gradient-to-t from-black/70 from-30% to-transparent p-3 pt-5">
          <div
            className="text-3xl"
            style={{
              fontFamily: "JimNightshade",
            }}
          >
            {displayName}
          </div>
          <div className="flex items-end justify-between gap-2">
            <div>
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
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BotCard;
