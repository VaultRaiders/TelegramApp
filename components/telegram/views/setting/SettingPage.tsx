"use client";

import { useEffect, useState } from "react";

import { initDataRaw } from "@telegram-apps/sdk-react";
import { useTranslations } from "next-intl";
import { LiaLanguageSolid } from "react-icons/lia";

import Loading from "@/components/common/Loading";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/core/popover";
import { Link, useParams, usePathname } from "@/i18n/routing";
import telegramApiClient from "@/libs/api-telegram";
import { cn } from "@/libs/utils";

const Copy = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1 22.75H6.9C2.99 22.75 1.25 21.01 1.25 17.1V12.9C1.25 8.99 2.99 7.25 6.9 7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V17.1C16.75 21.01 15.01 22.75 11.1 22.75ZM6.9 8.75C3.8 8.75 2.75 9.8 2.75 12.9V17.1C2.75 20.2 3.8 21.25 6.9 21.25H11.1C14.2 21.25 15.25 20.2 15.25 17.1V12.9C15.25 9.8 14.2 8.75 11.1 8.75H6.9Z"
        fill="currentColor"
      />
      <path
        d="M17.1 16.75H16C15.59 16.75 15.25 16.41 15.25 16V12.9C15.25 9.8 14.2 8.75 11.1 8.75H8C7.59 8.75 7.25 8.41 7.25 8V6.9C7.25 2.99 8.99 1.25 12.9 1.25H17.1C21.01 1.25 22.75 2.99 22.75 6.9V11.1C22.75 15.01 21.01 16.75 17.1 16.75ZM16.75 15.25H17.1C20.2 15.25 21.25 14.2 21.25 11.1V6.9C21.25 3.8 20.2 2.75 17.1 2.75H12.9C9.8 2.75 8.75 3.8 8.75 6.9V7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V15.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Copied = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1 1.25H12.9C8.99 1.25 7.25 2.99 7.25 6.9V8C7.25 8.41 7.59 8.75 8 8.75H11.1C14.2 8.75 15.25 9.8 15.25 12.9V16C15.25 16.41 15.59 16.75 16 16.75H17.1C21.01 16.75 22.75 15.01 22.75 11.1V6.9C22.75 2.99 21.01 1.25 17.1 1.25ZM8.75 7.25V6.9C8.75 3.8 9.8 2.75 12.9 2.75H17.1C20.2 2.75 21.25 3.8 21.25 6.9V11.1C21.25 14.2 20.2 15.25 17.1 15.25H16.75V12.9C16.75 8.99 15.01 7.25 11.1 7.25H8.75Z"
        fill="currentColor"
      />
      <path
        d="M11.1 7.25H6.9C2.99 7.25 1.25 8.99 1.25 12.9V17.1C1.25 21.01 2.99 22.75 6.9 22.75H11.1C15.01 22.75 16.75 21.01 16.75 17.1V12.9C16.75 8.99 15.01 7.25 11.1 7.25ZM6.9 21.25C3.8 21.25 2.75 20.2 2.75 17.1V12.9C2.75 9.8 3.8 8.75 6.9 8.75H11.1C14.2 8.75 15.25 9.8 15.25 12.9V17.1C15.25 20.2 14.2 21.25 11.1 21.25H6.9Z"
        fill="currentColor"
      />
      <path
        d="M8.02953 17.7C7.83953 17.7 7.64953 17.63 7.49953 17.48L5.54953 15.53C5.25953 15.24 5.25953 14.76 5.54953 14.47C5.83953 14.18 6.31953 14.18 6.60953 14.47L8.02953 15.89L11.3895 12.53C11.6795 12.24 12.1595 12.24 12.4495 12.53C12.7395 12.82 12.7395 13.3 12.4495 13.59L8.54953 17.48C8.40953 17.62 8.21953 17.7 8.02953 17.7Z"
        fill="currentColor"
      />
    </svg>
  );
};

const locales = ["en", "ja", "de", "es", "fr", "pt-br", "pt"];

const SettingPage = () => {
  const pathname = usePathname();
  const params = useParams();

  const t = useTranslations("Telegram.Setting");

  const [profile, setProfile] = useState<IProfileData>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile?.id || "").then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const fetchProfile = async () => {
    try {
      const response = await telegramApiClient.get("/user/me", {
        headers: {
          authorization: `tma ${initDataRaw()}`,
        },
      });
      console.log("Profile:", response.data.data);
      setProfile(response.data.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col gap-8 p-4 py-8">
      <div className="relative mt-16 flex flex-col items-center rounded-xl bg-neutral-800 pt-16">
        <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-800 p-2">
          <div className="h-full w-full rounded-full bg-neutral-700"></div>
        </div>
        <div className="pb-3 pt-1 text-center">
          <div className="text-lg font-semibold">{profile?.username}</div>
          <div className="flex items-center gap-1 text-sm text-neutral-600">
            ID: {profile?.id}
            <button
              onClick={handleCopy}
              className={copied ? "text-primary" : ""}
            >
              {copied ? <Copied /> : <Copy />}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="text-sm font-semibold uppercase text-neutral-400">
          {t("Numbers of all time")}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-neutral-800 px-4 py-3">
            <div className="text-[4rem] font-semibold leading-tight text-primary/75">
              {profile?.message_count_life}
            </div>
            <div>{t("Messages")}</div>
          </div>
          <div className="rounded-xl bg-neutral-800 px-4 py-3">
            <div className="text-[4rem] font-semibold leading-tight text-primary/75">
              {profile?.photo_count_life}
            </div>
            <div>{t("Photos")}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-sm font-semibold uppercase text-neutral-400">
          {t("Settings")}
        </div>
        <div className="rounded-xl bg-neutral-800 p-2">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-2 py-1">
                <div className="flex items-center gap-2">
                  <div className="text-primary/50">
                    <LiaLanguageSolid className="h-6 w-6" />
                  </div>
                  {t("Language")}
                </div>

                <div
                  className={cn(
                    "flex w-fit items-center gap-2 rounded-lg uppercase",
                  )}
                >
                  {params.locale}
                  {/* {icon} {t(params.locale)}{' '} */}
                  {/* <ArrowDownIcon className={cn('transition-transform', { 'rotate-180': open })} /> */}
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent
              sideOffset={8}
              align="end"
              alignOffset={-8}
              className="w-full overflow-hidden rounded-xl border-0 !bg-neutral-700 p-0"
            >
              <ul>
                {locales.map((locale) => (
                  <li key={locale}>
                    <Link href={pathname} locale={locale}>
                      <button className="w-full p-4 text-left uppercase hover:bg-neutral-600">
                        {locale}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
