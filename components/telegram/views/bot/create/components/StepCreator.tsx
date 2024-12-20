import React, { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrFormPreviousLink } from "react-icons/gr";

import Loading from "@/components/common/Loading";
import { useBotSubmission } from "@/hooks/useBotSubmission";
import { cn } from "@/libs/utils";

import { SuccessModal } from "./Creator/SuccessModal";

interface CreatorFormProps {
  onBack?: () => void;
}

interface FormData {
  creatorKey: number | undefined;
  ticketPrice: number | undefined;
  password: string;
}

interface FormError {
  creatorKey: string;
  ticketPrice: string;
  password: string;
}

const INITIAL_FORM_DATA: FormData = {
  creatorKey: undefined,
  ticketPrice: undefined,
  password: "",
};

const INITIAL_FORM_ERROR: FormError = {
  creatorKey: "",
  ticketPrice: "",
  password: "",
};

const VALIDATION_RULES = {
  creatorKey: {
    min: 0,
    max: 50,
  },
  ticketPrice: {
    min: 0,
    max: 100000,
  },
  password: {
    minLength: 1,
  },
};

export const CreatorForm: React.FC<CreatorFormProps> = ({ onBack }) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState<FormError>(INITIAL_FORM_ERROR);
  const [showPassword, setShowPassword] = useState(false);

  const {
    isSubmitting,
    submitBot,
    showSuccessModal,
    submissionResult,
    closeSuccessModal,
  } = useBotSubmission();

  const handleInputChange = (
    field: keyof FormData,
    value: string,
    validator?: (_val: string) => boolean,
  ) => {
    if (validator && !validator(value) && value !== "") return;

    if (formError[field]) {
      setFormError((prev) => ({ ...prev, [field]: "" }));
    }

    let processedValue: string | number | undefined = value;

    if (field === "creatorKey") {
      processedValue = value === "" ? undefined : parseInt(value, 10);
    } else if (field === "ticketPrice") {
      if (value === "") {
        processedValue = undefined;
      } else if (value.endsWith(".")) {
        processedValue = value;
      } else {
        const numValue = parseFloat(value);
        processedValue = isNaN(numValue) ? undefined : numValue;
      }
    }

    setFormData((prev) => ({ ...prev, [field]: processedValue }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormError = {
      creatorKey: !formData.creatorKey
        ? "Creator key is required"
        : formData.creatorKey < VALIDATION_RULES.creatorKey.min
          ? "Amount must be a positive number"
          : formData.creatorKey > VALIDATION_RULES.creatorKey.max
            ? "Amount too high <= 50"
            : "",
      ticketPrice: !formData.ticketPrice
        ? "Ticket price is required"
        : formData.ticketPrice < VALIDATION_RULES.ticketPrice.min
          ? "Price cannot be negative"
          : formData.ticketPrice > VALIDATION_RULES.ticketPrice.max
            ? "Price too high"
            : "",
      password: !formData.password
        ? "Password is required"
        : formData.password.length < VALIDATION_RULES.password.minLength
          ? "Password must be at least 1 character"
          : "",
    };

    setFormError(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    await submitBot(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-20">
        {/* Form header */}
        <div className="mb-6 text-center md:mb-8">
          <h2 className="flex items-center justify-center gap-2 text-xl font-bold text-white md:text-2xl">
            <span className="text-2xl">🔑</span>
            Creator Setup
            <span className="text-2xl">💫</span>
          </h2>
        </div>

        <div className="space-y-4 md:space-y-6">
          {/* Creator Key Input */}
          <div>
            <label
              htmlFor="creatorKey"
              className="mb-1.5 flex items-center gap-2 text-sm text-white/80 md:text-base"
            >
              <span>🔢</span>
              Number of keys for creator
            </label>
            <input
              id="creatorKey"
              type="text"
              inputMode="numeric"
              placeholder="Enter your key number... 123"
              value={formData.creatorKey?.toString() || ""}
              onChange={(e) =>
                handleInputChange("creatorKey", e.target.value, (val) =>
                  /^\d*$/.test(val),
                )
              }
              className={cn(
                "input w-full bg-base-200/50",
                "border transition-colors",
                "placeholder:text-white/40",
                !formError.creatorKey
                  ? "border-primary/20 focus:border-primary"
                  : "border-error",
              )}
            />
            {formError.creatorKey && (
              <div className="mt-1 flex items-center gap-1 text-xs text-red-500 md:text-sm">
                <span>⚠️</span> {formError.creatorKey}
              </div>
            )}
          </div>

          {/* Ticket Price Input */}
          <div>
            <label
              htmlFor="ticketPrice"
              className="mb-1.5 flex items-center gap-2 text-sm text-white/80 md:text-base"
            >
              <span>🪙</span>
              Ticket Price (SOL)
            </label>
            <div className="relative">
              <input
                id="ticketPrice"
                type="text"
                inputMode="decimal"
                placeholder="0.00"
                value={formData.ticketPrice?.toString() || ""}
                onChange={(e) =>
                  handleInputChange("ticketPrice", e.target.value, (val) =>
                    /^$|^\.$|^\d+\.?\d*$/.test(val),
                  )
                }
                className={cn(
                  "input w-full bg-base-200/50 pr-16",
                  "border transition-colors",
                  "placeholder:text-white/40",
                  !formError.ticketPrice
                    ? "border-primary/20 focus:border-primary"
                    : "border-error",
                )}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
                SOL
              </span>
            </div>
            {formError.ticketPrice && (
              <div className="mt-1 flex items-center gap-1 text-xs text-red-500 md:text-sm">
                <span>⚠️</span> {formError.ticketPrice}
              </div>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 flex items-center gap-2 text-sm text-white/80 md:text-base"
            >
              <span>🔒</span>
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password..."
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={cn(
                  "input w-full bg-base-200/50 pr-10",
                  "border transition-colors",
                  "placeholder:text-white/40",
                  !formError.password
                    ? "border-primary/20 focus:border-primary"
                    : "border-error",
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/80"
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
            </div>
            {formError.password && (
              <div className="mt-1 flex items-center gap-1 text-xs text-red-500 md:text-sm">
                <span>⚠️</span> {formError.password}
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="rounded-lg bg-base-200/30 p-3 text-sm text-white/60">
            <p className="mb-1">
              💡 Creator key should be a positive number between 0 and 50
            </p>
            <p>💡 Password must be at least 6 characters</p>
          </div>
        </div>

        {/* Form Actions */}
        <div className="fixed bottom-0 left-0 right-0 flex justify-between bg-neutral/20 px-4 py-2 backdrop-blur-sm">
          <button
            onClick={onBack}
            disabled={isSubmitting}
            type="button"
            className="btn btn-neutral flex items-center text-white"
          >
            <GrFormPreviousLink className="h-6 w-6" />
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="group btn btn-primary relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/50"
          >
            <span className="relative z-10 flex items-center gap-2 text-white">
              {isSubmitting ? <Loading /> : "Save Profile"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={showSuccessModal}
        botName={submissionResult.botName || ""}
        botId={submissionResult.botId || ""}
        onClose={closeSuccessModal}
      />
    </>
  );
};

export default CreatorForm;
