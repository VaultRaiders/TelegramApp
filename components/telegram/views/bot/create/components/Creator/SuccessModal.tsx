"use client";

import React from "react";

import { useStartChat } from "@/hooks/useStartChat";
import { useRouter } from "@/i18n/routing";

interface SuccessModalProps {
  isOpen: boolean;
  botName: string;
  botId: string;
  onClose: () => void;
}

export const SuccessModal = (props: SuccessModalProps) => {
  const router = useRouter();

  const { startChat } = useStartChat(props.botId);

  if (!props.isOpen) {
    return null;
  }

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={props.onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-lg bg-base-100 p-6 shadow-xl">
        <div className="mb-6 text-center">
          <div className="mb-4 text-5xl">🎉</div>
          <h3 className="mb-2 text-xl font-bold text-white">Success!</h3>
          <p className="text-white/80">
            Your bot {props.botName} has been created successfully.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={startChat}
            className="btn btn-primary w-full text-white"
          >
            Chat with {props.botName}
          </button>
          <button onClick={handleHome} className="btn btn-neutral w-full">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
