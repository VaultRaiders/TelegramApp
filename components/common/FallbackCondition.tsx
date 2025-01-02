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
              <li>75% ticket cost refund to attacker.</li>
              <li>Last sender gets 15% of the pool + ticket cost.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FallbackCondition;
