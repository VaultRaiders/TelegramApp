"use client";

import Image from "next/image";

import { GameButton } from "@/components/core/button";
import { useRouter } from "@/i18n/routing";
import { useCreateStore } from "@/store/create";
import { useGenerateBotDataStore } from "@/store/generate";

import AvatarPreview from "./components/AvatarPreview";
import PageHeading from "@/components/common/PageHeading";
import { useState } from "react";
import { useGenerateBotData } from "@/hooks/api/useGenerateBotData";

const BotDescription = ({
  handleInput,
  value,
}: {
  handleInput: (event: { target: any }) => void;
  value: string;
}) => {
  // Adjust height based on content

  return (
    <div
      className="min-h-60 w-full rounded-[12px] p-3"
      style={{
        background: "rgba(101, 83, 63, 0.2)",
      }}
    >
      <div
        className="flex flex-col gap-1"
        style={{
          fontFamily: "MicroGrotesk",
        }}
      >
        <div>
          <div className="relative">
            <p
              className="grow font-light"
              style={{
                fontFamily: "MicroGrotesk500",
              }}
            >
              Introduce your bot*
            </p>
            <Image
              src="/assets/info-circle.png"
              width={15}
              height={15}
              alt="Info Circle"
              className="absolute right-0 top-0 translate-y-1/4"
            />
          </div>
          <textarea
            className="max-h-[400px] w-[90%] resize-none bg-transparent outline-none placeholder:text-xs placeholder:text-[#665D4F]"
            placeholder="Describe the bot context and how to convince bot."
            onChange={handleInput}
            value={value}
          />
        </div>
        <p
          style={{
            fontFamily: "MicroGrotesk500",
          }}
        >
          or
        </p>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/assets/ai-describe-suggestion.png"
            width={80}
            height={80}
            alt="AI Suggestion"
          />
          <p
            className="uppercase"
            style={{
              fontFamily: "JimNightshade",
            }}
          >
            ✨AI suggestions
          </p>
        </div>
      </div>
    </div>
  );
};
const CreateInfoPage = () => {
  const router = useRouter();

  const { botData, setBotData } = useCreateStore();
  const { generateData, setGenerateData } = useGenerateBotDataStore();
  const [introduction, setIntroduction] = useState();

  const handleDescriptionInput = (event: { target: any }) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height to fit content
    setIntroduction(textarea.value);
  };

  const { mutateAsync: generateBotData } = useGenerateBotData();
  const handleNext = async () => {
    if (!botData?.displayName) {
      alert("Please enter bot name");
      return;
    }
    if (!introduction) {
      alert("Please enter bot introduction");
      return;
    }

    try {
      const res = await generateBotData({
        ideas: introduction,
      });
      const data = res.data.data;
      setGenerateData(data);
      setBotData({
        ...botData,
        photoUrl: data.photoUrl,
        prompt: data.systemInstruction,
        bio: data.backStory,
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong please try again");
      return;
    }
    router.push("/create/prompt");
  };

  return (
    <div className="flex min-h-dvh flex-col overflow-hidden">
      <div className="mx-auto w-full pt-6">
        <div className="relative flex items-center justify-center">
          <PageHeading title="create bot" />
        </div>
      </div>

      {/* <AvatarPreview loading={false} /> */}

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
          className="px-4 pb-28 text-center text-sm text-[#544C41]"
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
          <div className="m-0 p-0">---</div>
          <div className="px-3">
            <BotDescription
              handleInput={handleDescriptionInput}
              value={introduction}
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
