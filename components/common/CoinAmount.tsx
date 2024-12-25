import Image from "next/image";

import { beautifulNumber, cn, formatEther } from "@/libs/utils";

const CoinAmount = ({
  amount,
  normalFont = false,
  className,
}: {
  amount?: string;
  normalFont?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1 text-3xl text-[#FFCD29]",
        className,
      )}
      style={normalFont ? {} : { fontFamily: "Jacquard24" }}
    >
      {beautifulNumber(formatEther(amount))}
      <div className="h-5 w-5">
        <Image src="/assets/coin.png" alt="Coin" fill className="!static" />
      </div>
    </div>
  );
};

export default CoinAmount;
