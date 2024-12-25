"use client";

import Image from "next/image";

import { GameButton } from "@/components/core/button";
import { useRouter } from "@/i18n/routing";
import { useCreateStore } from "@/store/create";

import AvatarPreview from "./components/AvatarPreview";

const CreatePromptPage = () => {
  const router = useRouter();
  const { botData, setBotData } = useCreateStore();

  const handleNext = () => {
    if (!botData?.prompt) {
      alert("Please enter win condition");
      return;
    }

    router.push("/create/payment");
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
          className="space-y-3 px-4 pb-28 text-sm text-[#544C41]"
          style={{
            backgroundImage: "url('/assets/bg-create-scroll-1.png')",
            backgroundSize: "495px 1051px",
            backgroundPositionX: "center",
          }}
        >
          <div style={{ fontFamily: "Luminari" }}>Bot and Game Rules</div>

          {/* <div className="space-y-2 rounded-xl bg-[#55432E]/20 p-4">
            <div className="text-center font-bold">Introduce your bot*</div>
            <textarea
              placeholder="|Describe the bot context and how to convince bot."
              className="w-full bg-transparent placeholder:text-[#665D4F] focus:border-0 focus:outline-none focus:ring-0"
            />
            <div className="text-center font-bold">or</div>
            <div className="mx-auto h-fit w-fit rounded-xl bg-[#686868]/40 p-1">
              <div
                className="h-20 w-20 rounded-lg bg-[#665D4F] text-center text-[#FFE0C2]/60"
                style={{
                  fontFamily: "JimNightshade",
                  fontSize: 72,
                  lineHeight: "5.5rem",
                }}
              >
                ?
              </div>
            </div>
            <div
              className="text-center text-xl uppercase"
              style={{
                fontFamily: "JimNightshade",
              }}
            >
              ✨AI suggestions
            </div>
          </div> */}

          <div className="space-y-2 rounded-xl bg-[#55432E]/20 p-4">
            <div className="text-center font-bold">Main win condition*</div>
            <textarea
              onChange={(e) =>
                setBotData({ ...botData, prompt: e.target.value })
              }
              placeholder="|Main win condition should be direct and simple."
              className="w-full bg-transparent placeholder:text-[#665D4F] focus:border-0 focus:outline-none focus:ring-0"
            />
            {/* <div className="text-center font-bold">or</div>
            <div className="mx-auto h-fit w-fit rounded-xl bg-[#686868]/40 p-1">
              <div
                className="h-20 w-20 rounded-lg bg-[#665D4F] text-center text-[#FFE0C2]/60"
                style={{
                  fontFamily: "JimNightshade",
                  fontSize: 72,
                  lineHeight: "5.5rem",
                }}
              >
                ?
              </div>
            </div>
            <div
              className="text-center text-xl uppercase"
              style={{
                fontFamily: "JimNightshade",
              }}
            >
              ✨AI suggestions
            </div> */}
          </div>

          <div className="space-y-2 rounded-xl bg-[#55432E]/20 p-4">
            <div className="text-center font-bold">Fallback condition</div>
            <div>
              <ul className="list-decimal pl-5">
                <li>Attacker Wins: Claim the bot&#39;s entire pool!</li>
                <li>12-Hour Timer: Resets with every new message.</li>
                <li>Timer Runs Out:</li>
                <li className="list-none pl-5">
                  <ul className="list-disc">
                    <li>Last message sender gets 20%.</li>
                    <li>80% is shared among all players.</li>
                  </ul>
                </li>
              </ul>
            </div>
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

export default CreatePromptPage;
