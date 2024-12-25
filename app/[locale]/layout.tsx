import { ReactNode, Suspense } from "react";

import { Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "react-hot-toast";

import Loading from "@/components/common/Loading";
import { TelegramProvider } from "@/components/telegram/layout/TelegramProvider";
import config from "@/config";
import { routing } from "@/i18n/routing";
import { getSEOTags } from "@/libs/seo";

import "@/app/globals.css";
import RootProvider from "./provider";
import Head from "next/head";

const font = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = getSEOTags();

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales?.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      data-theme={config.colors.theme}
      className={font.className}
    >
      <Head>
        <link
          rel="preload"
          href="/fonts/Asul-Regular.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/Jacquard24-Regular.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/JimNightshade-Regular.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
        <link
          rel="preload"
          href="/fonts/Luminari-Regular.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
      </Head>
      <body className="no-scrollbar min-h-dvh bg-gray-950">
        <NextIntlClientProvider messages={messages}>
          <TelegramProvider>
            <Suspense fallback={<Loading />}>
              <Toaster position="top-center" reverseOrder={false} />
              <RootProvider>{children}</RootProvider>
            </Suspense>
          </TelegramProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
