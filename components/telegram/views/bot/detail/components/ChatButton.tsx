"use client";

import { useTranslations } from "next-intl";
import { toast } from "react-hot-toast";
import { FaStar } from "react-icons/fa";

import Button from "@/components/core/button";
import { useStartChat } from "@/hooks/useStartChat";

interface ChatButtonProps {
  botId: string;
}

export const ChatButton = ({ botId }: ChatButtonProps) => {
  const t = useTranslations("Telegram.ListBot");
  const { startChat, isStarting, error } = useStartChat(botId);

  const handleClick = async () => {
    await startChat();
    if (error) {
      toast.error(error);
    }
  };

  return (
    <Button onClick={handleClick} disabled={isStarting}>
      {isStarting ? (
        <span className="loading loading-spinner loading-sm" />
      ) : (
        <FaStar className="text-xl" />
      )}
      {isStarting ? t("starting-chat") : t("chat-now")}
    </Button>
  );
};
