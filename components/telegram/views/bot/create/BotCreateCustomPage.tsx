"use client";

import { useTranslations } from "next-intl";

import Loading from "@/components/common/Loading";
import { useBotCreation } from "@/hooks/useBotCreation";

import StepAppearance from "./components/StepAppearance";
import StepCreator from "./components/StepCreator";
import { Stepper } from "./components/Stepper";
import StepScenario from "./components/StepScenario";

const BotTemplateCustomPage = () => {
  const t = useTranslations("Telegram.Create.Custom");
  const { step, isLoading, handleNext, handleBack } = useBotCreation();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepScenario onNext={handleNext} />;
      case 2:
        return <StepAppearance onBack={handleBack} onNext={handleNext} />;
      case 3:
        return <StepCreator onBack={handleBack} />;
      default:
        return null;
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-screen-lg flex-col gap-8 p-4">
        <div className="flex justify-center text-center">
          <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-semibold tracking-tight text-transparent md:-mb-4 lg:text-4xl">
            {t("create")}
          </h1>
        </div>

        <Stepper currentStep={step} />

        {renderStep()}
      </div>
    </div>
  );
};

export default BotTemplateCustomPage;
