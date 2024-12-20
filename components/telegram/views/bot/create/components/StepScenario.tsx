import React from "react";
import { useState } from "react";

import { GrFormNextLink } from "react-icons/gr";
import { useTranslations } from "use-intl";

import { cn } from "@/libs/utils";
import { useBotStore } from "@/store/bot";

interface StepScenarioProps {
  onBack?: () => void;
  onNext?: () => void;
}

const StepScenario = ({ onNext }: StepScenarioProps) => {
  const t = useTranslations("StepScenario");
  const { botCreateData, setBotCreateData } = useBotStore();

  const [formError, setFormError] = useState({
    scenario: "",
    displayName: "",
    age: "",
  });

  const handleChangeScenario = (value: string) => {
    if (formError.scenario && value) {
      setFormError({ ...formError, scenario: "" });
    }
    setBotCreateData({ ...botCreateData, scenario: value });
  };

  const handleChangeName = (value: string) => {
    if (formError.displayName && value) {
      setFormError({ ...formError, displayName: "" });
    }
    setBotCreateData({ ...botCreateData, displayName: value });
  };

  const handleChangeAge = (value?: number) => {
    if (formError.age && value) {
      setFormError({ ...formError, age: "" });
    }
    setBotCreateData({ ...botCreateData, age: value });
  };

  const validateForm = (): boolean => {
    const newErrors = {
      scenario: !botCreateData.scenario ? t("scenario-required") : "",
      displayName: !botCreateData.displayName ? t("name-required") : "",
      age: !botCreateData.age
        ? t("age-required")
        : botCreateData.age < 18
          ? t("age-18")
          : "",
    };

    setFormError(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleNext = () => {
    if (!validateForm()) return;
    onNext?.();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleNext();
      }}
      className="flex flex-col gap-4 pb-20"
    >
      <div className="mb-6 text-center md:mb-8">
        <h2 className="flex items-center justify-center gap-2 text-xl font-bold text-white md:text-2xl">
          <span className="text-2xl">✨</span>
          {t("title")}
          <span className="text-2xl">✨</span>
        </h2>
      </div>

      <div className="space-y-4 md:space-y-6">
        {/* Name Input */}
        <div>
          <label
            htmlFor="displayName"
            className="mb-1.5 flex items-center gap-2 text-sm text-white/80 md:text-base"
          >
            <span>👋</span>
            {t("name")}
          </label>
          <input
            id="displayName"
            placeholder="What's your magical name? ✨"
            value={botCreateData.displayName}
            onChange={(e) => handleChangeName(e.target.value)}
            className={cn(
              "input w-full bg-base-200/50",
              "border transition-colors",
              "placeholder:text-white/40",
              !formError.displayName
                ? "border-primary/20 focus:border-primary"
                : "border-error",
            )}
          />
          {formError.displayName && (
            <div className="mt-1 flex items-center gap-1 text-xs text-red-500 md:text-sm">
              <span>⚠️</span> {formError.displayName}
            </div>
          )}
        </div>

        {/* Age Input */}
        <div>
          <label
            htmlFor="age"
            className="mb-1.5 flex items-center gap-2 text-sm text-white/80 md:text-base"
          >
            <span>🎂</span>
            {t("age")}
          </label>
          <input
            id="age"
            type="number"
            placeholder="How wise are you? 🤔"
            value={botCreateData.age}
            onChange={(e) => handleChangeAge(+e.target.value || undefined)}
            className={cn(
              "input w-full bg-base-200/50",
              "border transition-colors",
              "placeholder:text-white/40",
              !formError.age
                ? "border-primary/20 focus:border-primary"
                : "border-error",
            )}
          />
          {formError.age && (
            <div className="mt-1 flex items-center gap-1 text-xs text-red-500 md:text-sm">
              <span>⚠️</span> {formError.age}
            </div>
          )}
        </div>

        {/* Scenario Input */}
        <div>
          <label
            htmlFor="scenario"
            className="mb-1.5 flex items-center gap-2 text-sm text-white/80 md:text-base"
          >
            <span>📖</span>
            {t("scenario")}
          </label>
          <textarea
            id="scenario"
            rows={5}
            placeholder="Tell me your story... 🌟"
            value={botCreateData.scenario}
            onChange={(e) => {
              handleChangeScenario(e.target.value);
              e.target.style.height = "";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
            className={cn(
              "textarea min-h-[120px] w-full bg-base-200/50 md:min-h-[150px]",
              "border transition-colors",
              "placeholder:text-white/40",
              !formError.scenario
                ? "border-primary/20 focus:border-primary"
                : "border-error",
            )}
          />
          {formError.scenario && (
            <div className="mt-1 flex items-center gap-1 text-xs text-red-500 md:text-sm">
              <span>⚠️</span> {formError.scenario}
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex justify-between bg-neutral/20 px-4 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-2"></div>
        <button className="group btn btn-primary relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/50">
          <span className="relative z-10 flex items-center gap-2 text-white">
            {t("next")}
            <GrFormNextLink className="h-6 w-6" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity group-hover:opacity-100" />
        </button>
      </div>
    </form>
  );
};

export default StepScenario;
