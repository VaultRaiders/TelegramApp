import BotCard from "./BotCard";

const bots: IBotCardProps[] = [
  {
    backgroundUrl: "/assets/bg-bot-1.png",
    avatarUrl: "/assets/avatar-bot-1.png",
    name: "Khoa",
    vaultValue: "20000",
    tickerPrice: "0.15",
  },
  {
    backgroundUrl: "/assets/bg-bot-2.png",
    avatarUrl: "/assets/avatar-bot-2.png",
    name: "Ha",
    vaultValue: "20000",
    tickerPrice: "0.15",
  },
  {
    backgroundUrl: "/assets/bg-bot-2.png",
    avatarUrl: "/assets/avatar-bot-2.png",
    name: "Vinh",
    vaultValue: "20000",
    tickerPrice: "0.15",
  },
  {
    backgroundUrl: "/assets/bg-bot-1.png",
    avatarUrl: "/assets/avatar-bot-1.png",
    name: "Duy",
    vaultValue: "20000",
    tickerPrice: "0.15",
  },
];

const ListBot = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {bots.map((bot, index) => (
        <BotCard key={index} {...bot} />
      ))}
    </div>
  );
};

export default ListBot;
