"use client";

import Image from "next/image";

import { GameButton } from "@/components/core/button";
import { useRouter } from "@/i18n/routing";
import { useCreateStore } from "@/store/create";

import AvatarCard from "./components/AvatarCard";
import AvatarPreview from "./components/AvatarPreview";

const CreateInfoPage = () => {
  const router = useRouter();

  const { botData, setBotData } = useCreateStore();

  const handleNext = () => {
    if (!botData?.displayName) {
      alert("Please enter a bot name");
      return;
    }

    if (!botData?.photoUrl) {
      alert("Please select a bot avatar");
      return;
    }

    router.push("/create/prompt");
  };

  return (
    <div className="flex min-h-dvh flex-col overflow-hidden">
      <div className="mx-auto w-fit pt-8">
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 flex h-full w-full">
            <div className="h-full w-full bg-gradient-to-r from-transparent to-yellow-950/50"></div>
            <div className="h-full w-full bg-gradient-to-l from-transparent to-yellow-950/50"></div>
          </div>
          <div
            className="relative flex items-center justify-center gap-2 p-2 px-20 text-3xl text-primary"
            style={{
              fontFamily: "JimNightshade",
            }}
          >
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <div>CREATE BOT</div>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
          </div>
        </div>
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/35"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/35"></div>
        </div>
      </div>

      <AvatarPreview />

      <div className="relative z-0 flex-grow pt-8">
        <div className="absolute left-0 right-0 top-0 -z-10">
          <Image
            src="/assets/bg-create-scroll.png"
            alt="Background"
            fill
            className="!static h-auto w-full object-contain"
          />
        </div>
        <div
          className="space-y-3 px-4 pb-28 text-center text-sm text-[#544C41]"
          style={{
            backgroundImage: "url('/assets/bg-create-scroll-1.png')",
            backgroundSize: "495px 1051px",
            backgroundPositionX: "center",
            fontFamily: "Luminari",
          }}
        >
          <div>
            <div>Bot Name</div>
            <input
              type="text"
              placeholder="Enter bot name"
              value={botData?.displayName}
              onChange={(e) =>
                setBotData({ ...botData, displayName: e.target.value })
              }
              autoComplete="off"
              className="w-full bg-transparent text-center text-3xl uppercase focus:border-0 focus:outline-none focus:ring-0"
              style={{
                fontFamily: "JimNightshade",
              }}
            />
          </div>
          <div>---</div>
          <div>Bot Avatar</div>
          <div className="grid grid-cols-3 gap-4 px-4">
            <AvatarCard
              avatar="/assets/avatar-bot-1.png"
              title="Grottgin"
              onClick={() =>
                setBotData({ ...botData, photoUrl: "/assets/avatar-bot-1.png" })
              }
            />
            <AvatarCard
              avatar="/assets/avatar-bot-2.png"
              title="Lysandra"
              onClick={() =>
                setBotData({ ...botData, photoUrl: "/assets/avatar-bot-2.png" })
              }
            />

            <AvatarCard
              avatar={
                <div
                  className="h-20 w-20"
                  style={{
                    fontFamily: "JimNightshade",
                    fontSize: 72,
                    lineHeight: "5.5rem",
                  }}
                >
                  ?
                </div>
              }
              title="+ Create"
              // onClick={() =>
              //   setBotData({ ...botData, photoUrl: "/assets/avatar-bot-2.png" })
              // }
            />
          </div>
        </div>
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 z-10 space-y-3 bg-gradient-to-t from-[#3C2E1C] to-[#745A3A] px-4 pb-5 pt-2.5"
        style={{
          fontFamily: "Luminari",
        }}
      >
        <GameButton onClick={handleNext}>Next</GameButton>
      </div>
    </div>
  );
};

export default CreateInfoPage;
