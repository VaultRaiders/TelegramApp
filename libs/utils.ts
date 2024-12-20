import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLandingUserId = async () => {
  const res = await fetch("https://api.ipify.org?format=json");
  const json = await res.json();
  return `tmp_${json.ip}_${Date.now()}` as string;
};

export const numberFromStringNumber = (value: string): number => {
  return +value.replace(/,/g, "").replace(/[^\d.]/g, "");
};

export const beautifulNumber = (
  value?: number | string,
  options?: Intl.NumberFormatOptions,
): string => {
  if (typeof value !== "number" && typeof value !== "string") return "-";
  const number =
    typeof value === "string" ? numberFromStringNumber(value) : value;

  const {
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
    minimumSignificantDigits = 1,
    maximumSignificantDigits = 2,
  } = options || {};

  const numberString = number.toString();
  let [naturalPart, decimalPart] = numberString.split(".");
  decimalPart = decimalPart || "0";

  if (naturalPart.length > 9) {
    return (
      (number / 10 ** 9).toLocaleString("en", {
        minimumFractionDigits,
        maximumFractionDigits,
      }) + "B"
    );
  }

  if (naturalPart.length > 6) {
    return (
      (number / 10 ** 6).toLocaleString("en", {
        minimumFractionDigits,
        maximumFractionDigits,
      }) + "M"
    );
  }

  if (+naturalPart !== 0) {
    return number.toLocaleString("en", {
      minimumFractionDigits,
      maximumFractionDigits,
    });
  }

  const decimal = (+`0.${decimalPart}`).toLocaleString("en", {
    minimumSignificantDigits,
    maximumSignificantDigits,
  });
  return `${+naturalPart + +decimal}`;
};
