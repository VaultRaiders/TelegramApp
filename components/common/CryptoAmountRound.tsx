import { beautifulNumber } from "@/libs/utils";

const subscriptMap: Record<string, string> = {
  // "1": "₁",
  // "2": "₂",
  // "3": "₃",
  // "4": "₄",
  // "5": "₅",
  // "6": "₆",
  // "7": "₇",
  // "8": "₈",
  // "9": "₉",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
};

const CryptoAmountRound = ({ amount: value }: { amount?: string | number }) => {
  const amount = beautifulNumber(value);
  const [whole, decimal] = amount.toString().split(".");

  // Return early if no decimal part
  if (!decimal) {
    return amount.toString();
  }

  // Find first 4 significant digits after decimal
  let significantDigits = "";
  let significantCount = 0;
  let leadingZeros = 0;
  let countingZeros = true;

  for (const digit of decimal) {
    significantDigits += digit;

    if (digit === "0" && countingZeros) {
      leadingZeros++;
    } else {
      countingZeros = false;
      significantCount++;
    }

    if (significantCount === 5) break;
  }

  // Format the decimal part
  let formattedDecimal = <>{significantDigits}</>;
  if (leadingZeros > 2) {
    const subscript = leadingZeros
      .toString()
      .split("")
      .map((digit) => subscriptMap[digit] || digit)
      .join("");
    formattedDecimal = (
      <>
        0<span className="-mx-0.5 mt-3 scale-[0.7] leading-3">{subscript}</span>
        {significantDigits.slice(leadingZeros)}
      </>
    );
  }

  return (
    <>
      {whole}.{formattedDecimal}
    </>
  );
};

export default CryptoAmountRound;
