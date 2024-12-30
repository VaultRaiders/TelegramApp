"use client";

import { Suspense, useState } from "react";

import Script from "next/script";

import Loading from "@/components/common/Loading";
import Navbar from "@/components/telegram/layout/Navbar";
import MyBotPage from "@/components/telegram/views/bot/my-bot/MyBotPage";
import History from "@/components/telegram/views/history/History";
import HomePage from "@/components/telegram/views/home/HomePage";
import LeaderboardPage from "@/components/telegram/views/leaderboard/LeaderboardPage";
import { useSearchParams } from "@/i18n/routing";

const Page = () => {
  const searchParams = useSearchParams();
  const tabParam = +(searchParams.get("tab") || 0);

  const [tab, setTab] = useState<number>(tabParam);

  const renderTab = (): React.ReactNode => {
    switch (tab) {
      case 0:
        return <HomePage />;
      case 1:
        return <History />;
      case 2:
        return <LeaderboardPage />;
      case 3:
        return <MyBotPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <Script strategy="lazyOnload" />
      <div className="relative">
        {renderTab()}
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Navbar tab={tab} setTab={setTab} />
        </div>
      </div>
    </Suspense>
  );
};

// const Page = () => {
//   return <HomePage />;
// };

export default Page;
