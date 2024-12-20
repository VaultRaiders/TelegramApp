import React from "react";

import { useTranslations } from "next-intl";
import { FaCheck, FaStar, FaPaintBrush, FaUser } from "react-icons/fa";

import { cn } from "@/libs/utils";

interface StepperProps {
  currentStep: number;
}

export const Stepper = ({ currentStep }: StepperProps) => {
  const t = useTranslations("Telegram.Create.Custom");

  const steps = [
    {
      icon: <FaStar className="h-5 w-5" />,
      label: t("scenario"),
      step: 1,
    },
    {
      icon: <FaPaintBrush className="h-5 w-5" />,
      label: t("appearance"),
      step: 2,
    },
    {
      icon: <FaUser className="h-5 w-5" />,
      label: t("personalization"),
      step: 3,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 md:px-0">
      <div className="relative flex items-center justify-between">
        {/* Progress Bar */}
        <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-base-300">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300 ease-in-out"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex w-full justify-between">
          {steps.map(({ icon, step }) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
                  "shadow-lg backdrop-blur-sm",
                  currentStep > step
                    ? "bg-primary text-white"
                    : currentStep === step
                      ? "bg-pink-950 text-primary ring-2 ring-primary"
                      : "bg-base-300 text-base-content/50",
                )}
              >
                {currentStep > step ? <FaCheck className="h-6 w-6" /> : icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
