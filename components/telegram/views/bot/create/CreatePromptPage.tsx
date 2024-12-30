"use client";

import Image from "next/image";

import { GameButton } from "@/components/core/button";
import { useRouter } from "@/i18n/routing";
import { useCreateStore } from "@/store/create";

import AvatarPreview from "./components/AvatarPreview";
import { useGenerateBotDataStore } from "@/store/generate";
import { useEffect, useRef } from "react";
import PageHeading from "@/components/common/PageHeading";
import { useGenerateBotAvatar } from "@/hooks/api/useBotAvt";
import FallbackCondition from "@/components/common/FallbackCondition";

const CreatePromptPage = () => {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { botData, setBotData } = useCreateStore();
  const { generateData, setGenerateData } = useGenerateBotDataStore();

  const avatarDescription = generateData.avatarDescription;

  const {
    data: botAvatar,
    isError,
    isPending,
  } = useGenerateBotAvatar({
    avatarDescription,
  });

  if (isError) {
    router.push("/create");
  }

  const handleDescriptionInput = (event: { target: any }) => {
    const textarea = event.target;
    textarea.style.height = `${textarea.scrollHeight}px`;
    setBotData({ ...botData, prompt: textarea.value });
  };

  useEffect(() => {
    setBotData({ ...botData, photoUrl: botAvatar?.photoUrl });
  }, [botAvatar]);

  useEffect(() => {
    if (
      textareaRef.current instanceof HTMLTextAreaElement &&
      textareaRef.current
    ) {
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  const handleNext = () => {
    if (!botData?.prompt) {
      alert("Please enter win condition");
      return;
    }
    if (!botData.photoUrl) {
      alert("Please wait for image generation");
      return;
    }
    router.push("/create/payment");
  };

  return (
    <div className="flex min-h-dvh flex-col overflow-hidden">
      <div className="mx-auto w-fit pt-8">
        <div className="relative">
          <PageHeading title="create bot" />
        </div>
      </div>

      <AvatarPreview loading={isPending} />

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

          <FallbackCondition />

          <div className="rounded-xl bg-[#55432E]/20 p-4">
            <div className="text-center font-bold">System instruction*</div>
            <p
              style={{
                fontFamily: "JimNightshade",
              }}
              className="text-base uppercase"
            >
              ✨AI suggestions
            </p>
            <textarea
              ref={textareaRef}
              onChange={handleDescriptionInput}
              value={botData.prompt}
              placeholder="|Main win condition should be direct and simple."
              className="max-h-[400px] w-[90%] resize-none bg-transparent outline-none placeholder:text-xs placeholder:text-[#665D4F]"
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

export default CreatePromptPage;
