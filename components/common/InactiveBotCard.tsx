import Image from "next/image";

import CoinAmount from "./CoinAmount";
import Link from "next/link";

const InactiveBotCard = ({
  id,
  photoUrl,
  displayName,
  balance,
  ticketPrice,
  isActive,
  poolPrice,
}: IBotCardProps) => {
  return (
    <Link href={`/bot/${id}`}>
      <div className="relative flex aspect-[200/270] w-full items-end text-[#FFE0C2]">
        <div className="hue-rorate-[.29] absolute flex h-full w-full flex-col grayscale sepia-[.3]">
          <div className="h-full w-full bg-gradient-to-t from-primary/5 to-primary/15"></div>
          <div className="h-full w-full bg-gradient-to-b from-primary/5 to-primary/15"></div>
        </div>
        <div className="hue-rorate-[.29] absolute h-full w-full p-[1px] grayscale sepia-[.3]">
          <div className="h-full w-full">
            <Image
              src="/assets/bg-bot-1.png"
              alt="Background"
              fill
              className="!static object-cover"
            />
          </div>
        </div>
        <div className="hue-rorate-[.29] absolute left-1/2 top-[10%] h-[80%] w-[80%] -translate-x-1/2 grayscale sepia-[.3]">
          <Image
            src={
              photoUrl
                ? `https://storage.googleapis.com/vault-raiders/${photoUrl}`
                : "/assets/avatar-bot-1.png"
            }
            alt="Background"
            fill
            className="!static"
            objectFit="cover"
          />
        </div>
        <div
          className="z-10 w-full"
          style={{
            background:
              "linear-gradient(to top, rgba(197, 159, 93, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.16) 80%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <div className="relative z-10 flex w-full flex-col">
            <div
              className="-mb-1 text-center text-3xl uppercase tracking-wider"
              style={{
                fontFamily: "JimNightshade",
                textShadow:
                  "-0.1px 0.1px 0 #000, 0.1px 0.1px 0 #000, 0.1px -0.1px 0 #000, -0.1px -0.1px 0 #000",
              }}
            >
              {displayName}
            </div>
            <div className="flex flex-col justify-center">
              <div
                className="whitespace-nowrap2 m-auto -mb-2 text-sm text-[#BEB7B1]"
                style={{
                  fontFamily: "Luminari",
                }}
              >
                Vault value
              </div>
              <div className="relative z-0 h-[40px] w-full min-w-[72px] items-center justify-center text-xl">
                <div className="relative pt-2 text-center">
                  <CoinAmount
                    amount={poolPrice}
                    className="justify-center text-[#FFCD29]"
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
export default InactiveBotCard;
