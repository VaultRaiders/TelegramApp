"use client";

import { PropsWithChildren, useEffect } from "react";

import { backButton } from "@telegram-apps/sdk-react";

import { useRouter } from "@/i18n/routing";

export function TelegramPage({
  children,
  back = true,
}: PropsWithChildren<{
  back?: boolean;
}>) {
  const router = useRouter();

  useEffect(() => {
    if (back) {
      backButton.show();
    } else {
      backButton.hide();
    }
  }, [back]);

  useEffect(() => {
    return backButton.onClick(() => {
      router.back();
    });
  }, [router]);

  return <>{children}</>;
}
