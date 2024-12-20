import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { geolocation } from "@vercel/functions";
import { NextRequest } from "next/server";

export const locales = {
    // English-speaking countries
    US: "en",
    GB: "en",
    CA: "en",
    AU: "en",
    NZ: "en",
    IE: "en",
    ZA: "en",
    IN: "en",

    // Japanese-speaking country
    JP: "ja",

    // German-speaking countries
    DE: "de",
    AT: "de",
    CH: "de",
    LI: "de",
    LU: "de",

    // Spanish-speaking countries
    ES: "es",
    MX: "es",
    AR: "es",
    CL: "es",
    CO: "es",
    PE: "es",
    VE: "es",
    EC: "es",
    GT: "es",
    CU: "es",
    BO: "es",
    DO: "es",
    HN: "es",
    PY: "es",
    SV: "es",
    NI: "es",
    CR: "es",
    PA: "es",
    UY: "es",

    // French-speaking countries
    FR: "fr",
    BE: "fr",
    MC: "fr",
    BF: "fr",
    BJ: "fr",
    CD: "fr",
    CI: "fr",
    CM: "fr",
    GA: "fr",
    GN: "fr",
    MG: "fr",
    ML: "fr",
    NE: "fr",
    RW: "fr",
    SN: "fr",
    TD: "fr",
    TG: "fr",

    // Portuguese-speaking countries (Brazilian Portuguese and European Portuguese)
    BR: "pt-br",
    PT: "pt",
    AO: "pt",
    MZ: "pt",
    CV: "pt",
    GW: "pt",
    ST: "pt",
    TL: "pt", // Timor-Leste
} as const;

export type Locale = (typeof locales)[keyof typeof locales];
export type CountryCode = keyof typeof locales;

export default function middleware(req: NextRequest) {
    const { country } = geolocation(req);

    let locale: (typeof locales)[CountryCode];
    if (country && country in locales) {
        locale = locales[country as CountryCode];
    } else {
        locale = "en";
    }

    const handleI18nRouting = createMiddleware({
        ...routing,
        defaultLocale: locale,
    });

    return handleI18nRouting(req);
}

export const config = {
    matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
