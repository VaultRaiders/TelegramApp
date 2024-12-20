"use client";

import { useTranslations } from "next-intl";

import ListTemplate from "./components/ListTemplate";

export function BotCreatePage() {
  const t = useTranslations("Telegram.Create.Templates");

  return (
    <div className="mx-auto grid grid-cols-1 px-4 lg:w-3/4 lg:py-4">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 bg-base-100 px-8 py-8 lg:flex-row lg:gap-20 lg:py-12">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-semibold tracking-tight text-transparent md:-mb-4 lg:text-4xl">
            {t("Create your AI girlfriend")}
          </h1>
          {/* <p className="text-lg lg:text-xl">{t("title")}</p> */}
        </div>
      </section>

      <div className="flex flex-col gap-4">
        <ListTemplate />
      </div>
    </div>
  );
}
