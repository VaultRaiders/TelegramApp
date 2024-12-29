"use client";

import { type PropsWithChildren, useEffect } from "react";

import { initData, useLaunchParams, useSignal } from "@telegram-apps/sdk-react";

import { useClientOnce } from "@/hooks/useClientOnce";
import { useDidMount } from "@/hooks/useDidMount";
import { init } from "@/libs/init";

export function TelegramProvider({ children }: PropsWithChildren) {
  const didMount = useDidMount();
  const isDev = process.env.NODE_ENV === "development";
  const lp = useLaunchParams();
  const debug = isDev || lp.startParam === "debug";
  const initDataUser = useSignal(initData.user);

  useClientOnce(() => {
    init(debug);
  });

  // Set the user locale
  useEffect(() => {
    initDataUser;
  }, []);
  if (!didMount) {
    return <div className="root__loading" />;
  }

  return <>{children}</>;
}
