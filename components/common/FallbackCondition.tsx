const FallbackCondition = () => {
  return (
    <div className="space-y-2 rounded-xl bg-[#55432E]/20 p-4 text-sm text-[#55432E]">
      <div className="text-center font-bold">Fallback condition</div>
      <div>
        <ul className="list-decimal pl-5">
          <li>Attacker Wins: Claim the bot&#39;s entire pool!</li>
          <li>12-Hour Timer: Resets with every new message.</li>
          <li>Timer Runs Out:</li>
          <li className="list-none pl-5">
            <ul className="list-disc">
              <li>Last message sender gets 20%.</li>
              <li>80% is shared among all players.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FallbackCondition;
