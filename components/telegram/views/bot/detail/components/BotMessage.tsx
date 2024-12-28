import Image from "next/image";
import TimeAgo from "timeago-react";
import MessageContent from "./MessageContentBox";

const BotMessageContentWrapper = ({ children }: any) => {
  return (
    <div className="w-fit max-w-[75vw] break-words rounded-xl bg-[#32313F] p-2.5">
      {children}
    </div>
  );
};

const BotAvatar = ({ src }: any) => {
  return (
    <div
      className="h-11 w-full max-w-11 overflow-hidden break-words rounded-full"
      style={{
        backgroundImage: "url('/assets/bg-bot-1.png')",
        backgroundPosition: "center",
      }}
    >
      <Image src={src} alt="Bot Avatar" fill className="!static object-cover" />
    </div>
  );
};

const BotMessage = ({
  message,
  botAvatar,
  botName,
}: {
  message: IBotChatMessageData;
  botAvatar?: string;
  botName?: string;
}) => {
  return (
    <div key={message.id} className="flex gap-2">
      <BotAvatar src={botAvatar} />
      <div className="space-y-1">
        <div className="text-xs text-[#665D4F]">{botName}</div>
        <BotMessageContentWrapper>
          <MessageContent content={message.text} className="text-white" />
          <div
            className="text-right text-xs"
            style={{
              fontFamily: "Luminari",
              color: "#7D7D7D",
            }}
          >
            <TimeAgo datetime={message.createdAt} />
          </div>
        </BotMessageContentWrapper>
      </div>
    </div>
  );
};

export default BotMessage;
