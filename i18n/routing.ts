// eslint-disable-next-line no-restricted-imports
import { useParams, useSearchParams } from "next/navigation";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ja", "de", "es", "fr", "pt-br", "pt"],
  defaultLocale: "en",
  localePrefix: "always",
  // localeDetection: false,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

export { useParams, useSearchParams };
