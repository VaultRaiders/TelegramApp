import Image from "next/image";

import { cn, formatEther } from "@/libs/utils";

import CryptoAmountRound from "./CryptoAmountRound";

const CoinAmount = ({
  amount,
  normalFont = false,
  showCoin = true,
  className,
}: {
  amount?: string;
  normalFont?: boolean;
  showCoin?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex h-5 items-center gap-1 pb-1 text-3xl text-[#FFCD29]",
        className,
      )}
      style={normalFont ? {} : { fontFamily: "Jacquard24" }}
    >
      <CryptoAmountRound amount={formatEther(amount)} />
      {/* {beautifulNumber(formatEther(amount))} */}
      {showCoin && (
        <div className="h-5 w-5">
          <Image src="/assets/coin.png" alt="Coin" fill className="!static" />
        </div>
      )}
    </div>
  );
};

export default CoinAmount;
