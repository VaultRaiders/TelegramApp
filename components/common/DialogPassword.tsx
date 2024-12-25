"use client";

import { useState } from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { cn } from "@/libs/utils";

import { GameButton } from "../core/button";
import Dialog from "../core/dialog";

const DialogPassword = ({
  open,
  onOpenChange,
  onConfirm,
}: {
  open: boolean;
  onOpenChange?: (_open: boolean) => void;
  onConfirm?: (_password: string) => Promise<void>;
}) => {
  const [password, setPassword] = useState<string>("");
  const [confirming, setConfirming] = useState<boolean>(false);

  const handleConfirm = async () => {
    if (confirming) return;
    setConfirming(true);

    await onConfirm?.(password);

    setConfirming(false);
    onOpenChange?.(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AiOutlineLoading3Quarters
        className={cn("mx-auto animate-spin text-4xl", !confirming && "hidden")}
      />
      <div className={cn("flex flex-col gap-10", confirming && "hidden")}>
        <div
          className="text-center text-3xl uppercase text-primary"
          style={{
            fontFamily: "JimNightshade",
          }}
        >
          Enter your password
        </div>

        <div className="flex flex-col gap-2 text-[#9C9082]">
          <label htmlFor="password" className="font-bold">
            Password*
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl border-2 border-[#9C9082] bg-white p-4 focus:outline-none focus:ring-0"
          />
        </div>

        <GameButton
          onClick={handleConfirm}
          style={{
            fontFamily: "Luminari",
          }}
        >
          Confirm
        </GameButton>
      </div>
    </Dialog>
  );
};

export default DialogPassword;
