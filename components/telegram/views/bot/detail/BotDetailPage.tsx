"use client";

import { FaExclamationCircle } from "react-icons/fa";

import { useBotData } from "@/hooks/useBotData";
import { useParams } from "@/i18n/routing";

import { BotImage } from "./components/BotImage";
import { BotInfo } from "./components/BotInfo";
import { BotStats } from "./components/BotStats";
import { ChatButton } from "./components/ChatButton";

const BotDetailPage = () => {
  const params = useParams();

  const { bot, error, isLoading } = useBotData(params.botId as string);

  if (isLoading) {
    return (
      <div className="flex h-96 w-full items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="alert alert-error">
        <FaExclamationCircle className="h-6 w-6" />
        <span>{error}</span>
      </div>
    );
  }

  if (!bot) return null;

  return (
    <div className="card mx-auto w-full max-w-2xl bg-base-200 shadow-xl">
      <BotImage
        photoUrl={bot.photo_url}
        displayName={bot.display_name}
        locale={bot.locale}
        isPublic={bot.is_public}
      />

      <div className="card-body space-y-6 p-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">{bot.display_name}</h1>
            <BotStats
              vote={bot.vote}
              messageCount={bot.message_count}
              photoCount={bot.photo_count}
            />
          </div>
          <p className="mt-2 text-base-content/70">{bot.greeting}</p>
          <ChatButton botId={bot.id} />
          <h1 className="text-2xl font-bold">Information</h1>
          <BotInfo
            traits={bot.traits}
            createdAt={bot.created_at}
            age={bot.age}
            scenario={bot.scenario}
          />
        </div>
      </div>
    </div>
  );
};

export default BotDetailPage;
