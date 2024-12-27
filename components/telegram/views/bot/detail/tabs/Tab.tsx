import Image from "next/image";

import { cn } from "@/libs/utils";

const ActiveBackground = () => {
  return (
    <div className="relative z-0 flex h-[38px] w-full items-center justify-center text-xl">
      <div className="absolute left-[14px] right-[14px] top-0 -z-10 h-full">
        <Image
          src="/assets/tab-active-center.png"
          alt="Button"
          fill
          className="!static h-full w-auto"
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-[16px]">
        <Image
          src="/assets/tab-active-left.png"
          alt="Button"
          fill
          className="!static h-full w-full object-contain"
        />
      </div>
      <div className="absolute right-0 top-0 -z-10 h-full w-[16px]">
        <Image
          src="/assets/tab-active-right.png"
          alt="Button"
          fill
          className="!static h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

const Tab = ({
  tab,
  setTab,
}: {
  tab: number;
  setTab: (_tab: number) => void;
}) => {
  return (
    <div className="relative z-0 flex h-[38px] w-full max-w-72 items-center justify-center text-[#55432E]">
      <div className="absolute left-[14px] right-[14px] top-0 -z-10 h-full">
        <Image
          src="/assets/tab-center.png"
          alt="Button"
          fill
          className="!static h-full w-auto"
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-[16px]">
        <Image
          src="/assets/tab-left.png"
          alt="Button"
          fill
          className="!static h-full w-full object-contain"
        />
      </div>
      <div className="absolute right-0 top-0 -z-10 h-full w-[16px]">
        <Image
          src="/assets/tab-right.png"
          alt="Button"
          fill
          className="!static h-full w-full object-contain"
        />
      </div>
      <div
        className="flex h-full w-full justify-around"
        style={{ fontFamily: "Luminari" }}
      >
        <button
          className={cn(
            "relative z-0 h-full w-full",
            tab !== 0 && "text-[#CFCFCF]",
          )}
          onClick={() => setTab(0)}
        >
          <div
            className={cn(
              "absolute left-0 top-0 -z-10 h-full w-full",
              tab !== 0 && "hidden",
            )}
          >
            <ActiveBackground />
          </div>
          Chat Room
        </button>
        <button
          className={cn(
            "relative z-0 h-full w-full",
            tab !== 1 && "text-[#CFCFCF]",
          )}
          onClick={() => setTab(1)}
        >
          <div
            className={cn(
              "absolute left-0 top-0 -z-10 h-full w-full",
              tab !== 1 && "hidden",
            )}
          >
            <ActiveBackground />
          </div>
          About
        </button>
      </div>
    </div>
  );
};

export default Tab;
