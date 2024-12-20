"use client";

import { useTranslations } from "next-intl";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import { IBotCreateData, useBotAvatarStore, useBotStore } from "@/store/bot";

import AvatarBuilder from "./AvatarBuilder";

interface StepScenarioProps {
  onBack?: () => void;
  onNext?: () => void;
}

const StepAppearance = ({ onBack, onNext }: StepScenarioProps) => {
  const t = useTranslations("FormAvatarBuilder");
  const { avatarInfo, setAvatarInfo } = useBotAvatarStore();
  const { botCreateData, setBotCreateData } = useBotStore();

  const handleNext = () => {
    try {
      const photoConfig = {
        prompts: [
          "Ethnicity " + avatarInfo.ethnicity.label,
          "Eyes Color " + avatarInfo.eyesColor.label,
          "Hair style " + avatarInfo.hairStyle.label,
          "Hair color " + avatarInfo.hairColor.label,
          "Body " + avatarInfo.body.label,
          "Breast " + avatarInfo.breastSize.label,
          "Outfit " + avatarInfo.outfit.label,
        ],
        style: avatarInfo?.style?.label.toLowerCase(),
      };

      setBotCreateData({
        ...botCreateData,
        photoBase64: "",
        photoConfig,
      });
      return;
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
    !!onNext && onNext();
  };

  const handleSubmit = () => {
    !!onNext && onNext();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-4 pb-20"
    >
      <div className="text-center text-2xl font-bold text-white">
        {t("title")}
      </div>

      <AvatarBuilder avatarInfo={avatarInfo} setAvatarInfo={setAvatarInfo} />

      <div className="fixed bottom-0 left-0 right-0 flex justify-between bg-neutral/20 px-4 py-2 backdrop-blur-sm">
        <button
          onClick={onBack}
          type="button"
          className="btn btn-neutral flex items-center text-white"
        >
          <GrFormPreviousLink className="h-6 w-6" />
          {t("back")}
        </button>
        <button
          className="btn btn-primary flex items-center text-white"
          onClick={handleNext}
        >
          {t("next")}
          <GrFormNextLink className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
};

export default StepAppearance;
