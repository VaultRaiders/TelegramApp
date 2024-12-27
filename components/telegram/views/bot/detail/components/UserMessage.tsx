import Image from "next/image";
import TimeAgo from "timeago-react";
import MessageContent from "./MessageContentBox";

const MessageWrapper = ({ children }: { children: any }) => {
  return (
    <div className="w-fit max-w-[85vw] rounded-xl bg-[#D1DBE6] p-2.5 text-[#2B2D37]">
      {children}
    </div>
  );
};
const WinnerMessageWrapper = ({ children }: { children: any }) => {
  return (
    <div
      className="w-fit max-w-[85vw] rounded-xl bg-[#D1DBE6] p-2.5 tracking-wide text-[#2B2D37]"
      style={{
        background:
          "linear-gradient(119.1deg, #FFA56E 8.41%, #EFB332 23.75%, #D68337 42.09%, #9D4C00 68.43%)",
      }}
    >
      {children}
    </div>
  );
};
const BadgeWinner = ({}: any) => {
  return (
    <div
      className="box-border flex w-fit items-center gap-1 rounded-[46px] px-2 py-1"
      style={{
        background:
          "linear-gradient(93.59deg, rgba(255, 255, 255, 0.6) 2.95%, rgba(255, 255, 255, 0.42) 28.83%, rgba(255, 255, 255, 0.6) 55.96%)",
      }}
    >
      <Image src={"/assets/cup.png"} width={20} height={15} alt="Cup" />
      <div
        className="text-sm"
        style={{
          fontFamily: "Luminari",
        }}
      >
        Winner
      </div>
    </div>
  );
};
const UserMessage = ({
  message,
  isWinnerMessage,
}: {
  message: IBotChatMessageData;
  isWinnerMessage: Boolean;
}) => {
  return (
    <div key={message.id} className="flex justify-end">
      {isWinnerMessage ? (
        <WinnerMessageWrapper>
          <MessageContent content={message.text} />
          <div className="flex w-full justify-end py-1">
            <BadgeWinner />
          </div>
          <div
            className="text-right text-sm"
            style={{
              fontFamily: "Luminari",
              color: "#FFE0C2",
            }}
          >
            <TimeAgo datetime={message.createdAt} />
          </div>
        </WinnerMessageWrapper>
      ) : (
        <MessageWrapper>
          <MessageContent
            content={message.text}
            style={{
              color: "#2B2D37",
            }}
          />
          <div
            className="text-right text-xs"
            style={{
              fontFamily: "Luminari",
              color: "#7D7D7D",
            }}
          >
            <TimeAgo datetime={message.createdAt} />
          </div>
        </MessageWrapper>
      )}
    </div>
  );
};
export default UserMessage;
