"use client";

import { isMiniAppSupported } from "@telegram-apps/sdk-react";

import { TelegramPage } from "@/components/telegram/layout/TelegramPage";
import { useParams, usePathname } from "@/i18n/routing";

const Layout = ({ children }: IChildren) => {
  const pathname = usePathname();
  const params = useParams();
  const botId = (params.botId as string) || "";

  if (!isMiniAppSupported()) {
    return <>{children}</>;
  }

  return (
    <TelegramPage
      back={pathname.startsWith("/create/custom") || botId?.length > 0}
    >
      {children}
    </TelegramPage>
  );
};

export default Layout;
