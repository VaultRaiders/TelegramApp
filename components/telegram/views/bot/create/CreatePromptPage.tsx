"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import FallbackCondition from "@/components/common/FallbackCondition";
import PageHeading from "@/components/common/PageHeading";
import { GameButton } from "@/components/core/button";
import { useGenerateBotAvatar } from "@/hooks/api/useBotAvt";
import { useRouter } from "@/i18n/routing";
import { useCreateStore } from "@/store/create";
import { useGenerateBotDataStore } from "@/store/generate";

import AvatarPreview from "./components/AvatarPreview";

const CreatePromptPage = () => {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { botData, setBotData } = useCreateStore();
  const { generateData } = useGenerateBotDataStore();

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
    if (!botData?.displayName) {
      alert("Please enter bot name");
      return;
    }
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
          <div className="text-center">
            <div style={{ fontFamily: "Luminari" }}>Bot Name</div>
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
            <div className="m-0 p-0" style={{ fontFamily: "Luminari" }}>
              ---
            </div>
          </div>

          <div className="text-center" style={{ fontFamily: "Luminari" }}>
            Bot and Game Rules
          </div>

          <div className="rounded-xl bg-[#55432E]/20 p-4">
            <div className="flex items-end justify-between">
              <div className="w-5"></div>
              <div className="text-center font-bold">
                System instruction (editable)
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                onClick={() => textareaRef.current?.focus()}
              >
                <path
                  d="M16.5 3.38184V5.63184H15.75V6.38184H15V5.63184H14.25V4.88184H13.5V4.13184H12.75V3.38184H13.5V2.63184H15.75V3.38184H16.5Z"
                  fill="#544C41"
                />
                <path
                  d="M12.75 10.8818H13.5V16.1318H12.75V16.8818H1.5V16.1318H0.75V4.88184H1.5V4.13184H10.5V4.88184H9.75V5.63184H2.25V15.3818H12V11.6318H12.75V10.8818Z"
                  fill="#544C41"
                />
                <path
                  d="M13.5 6.38184H14.25V7.88184H13.5V8.63184H12.75V9.38184H12V10.1318H11.25V10.8818H10.5V11.6318H9.75V12.3818H9V13.1318H8.25V13.8818H5.25V10.8818H6V10.1318H6.75V9.38184H7.5V8.63184H8.25V7.88184H9V7.13184H9.75V6.38184H10.5V5.63184H11.25V4.88184H12.75V5.63184H13.5V6.38184Z"
                  fill="#544C41"
                />
              </svg>
            </div>
            <p
              style={{
                fontFamily: "JimNightshade",
              }}
              className="py-2 text-xl uppercase"
            >
              ✨AI suggestions
            </p>
            <textarea
              ref={textareaRef}
              onChange={handleDescriptionInput}
              value={botData.prompt}
              placeholder="|Main win condition should be direct and simple."
              className="max-h-[400px] w-full resize-none bg-transparent outline-none placeholder:text-[#665D4F]"
            />
          </div>

          <div className="rounded-xl bg-[#55432E]/20 p-4">
            <div className="text-center font-bold">Backstory</div>
            <p
              style={{
                fontFamily: "JimNightshade",
              }}
              className="py-2 text-xl uppercase"
            >
              ✨AI suggestions
            </p>
            <p>{botData?.bio}</p>
          </div>

          <FallbackCondition />
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
