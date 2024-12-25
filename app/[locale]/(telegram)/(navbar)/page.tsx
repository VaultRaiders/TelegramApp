"use client";

import { useEffect } from "react";

import Loading from "@/components/common/Loading";
import { useRouter } from "@/i18n/routing";

const Page = () => {
  const router = useRouter();

  const handleStartApp = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/game");
  };

  useEffect(() => {
    handleStartApp();
  }, []);

  return (
    <div>
      <div
        className="fixed opacity-0"
        style={{
          fontFamily: "Asul",
        }}
      >
        Font
      </div>
      <div
        className="fixed opacity-0"
        style={{
          fontFamily: "Luminari",
        }}
      >
        Font
      </div>
      <div
        className="fixed opacity-0"
        style={{
          fontFamily: "Jacquard24",
        }}
      >
        Font
      </div>
      <div
        className="fixed opacity-0"
        style={{
          fontFamily: "JimNightshade",
        }}
      >
        Font
      </div>
      <Loading />
    </div>
  );
};

export default Page;
