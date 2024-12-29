"use client";

import Image from "next/image";

import { useCreateStore } from "@/store/create";

const AvatarPreview = () => {
  const { botData } = useCreateStore();
  return (
    <div className="relative mx-auto my-4 aspect-[200/270] h-32">
      <Image
        src={botData?.photoUrl || "/assets/bg-bot-create.png"}
        alt="Background"
        fill
        className="!static object-contain"
      />
      {!botData?.photoUrl ? (
        <div
          className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 text-[#FFE0C2]/60"
          style={{
            fontSize: 72,
            fontFamily: "JimNightshade",
          }}
        >
          ?
        </div>
      ) : (
        <>
          <div className="absolute left-1/2 top-[10%] w-[80%] -translate-x-1/2">
            <Image
              src={botData?.photoUrl || "/assets/avatar-bot-1.png"}
              alt="Background"
              fill
              className="!static"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 z-10 flex w-full flex-col gap-3 bg-gradient-to-t from-black/70 from-30% to-transparent p-3 pt-5 text-center text-xl uppercase text-primary"
            style={{
              fontFamily: "JimNightshade",
            }}
          >
            {botData?.displayName}
          </div>
        </>
      )}
    </div>
  );
};

export default AvatarPreview;
