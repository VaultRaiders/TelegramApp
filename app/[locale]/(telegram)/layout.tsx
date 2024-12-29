"use client";

import { isMiniAppSupported } from "@telegram-apps/sdk-react";

import { TelegramPage } from "@/components/telegram/layout/TelegramPage";
import { usePathname } from "@/i18n/routing";
import GlobalLoader from "@/components/common/loading/GlobalLoading";
const Layout = ({ children }: IChildren) => {
  const pathname = usePathname();

  if (!isMiniAppSupported()) {
    return <>{children}</>;
  }
  return (
    <TelegramPage back={pathname !== "/"}>
      <GlobalLoader />
      {children}
    </TelegramPage>
  );
};

export default Layout;
