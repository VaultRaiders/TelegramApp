import Image from "next/image";

const AvatarCard = ({
  avatar,
  title,
  onClick,
}: {
  avatar?: string | React.ReactNode;
  title?: string;
  onClick?: () => void;
}) => {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        className="mx-auto h-fit w-fit rounded-xl bg-[#686868]/40 p-1"
      >
        <div
          className="h-20 w-20 rounded-lg bg-[#665D4F] text-center text-[#FFE0C2]/60"
          style={{
            fontFamily: "JimNightshade",
            fontSize: 72,
            lineHeight: "5.5rem",
          }}
        >
          {typeof avatar === "string" ? (
            <Image
              src={avatar || "/assets/bg-bot-create.png"}
              alt="Avatar"
              fill
              className="!static object-cover"
            />
          ) : (
            avatar
          )}
        </div>
      </button>
      <div
        className="text-xl uppercase"
        style={{
          fontFamily: "JimNightshade",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default AvatarCard;
