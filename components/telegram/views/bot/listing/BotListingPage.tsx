import { useTranslations } from "next-intl";

import { BotListing } from "@/components/common/BotListing";

const BotListingPage = () => {
  const t = useTranslations("Telegram.ListBot");

  return (
    <div className="mx-auto lg:w-3/4">
      <div className="sticky top-0 z-50 bg-neutral-900/75 p-4 text-3xl font-semibold text-white backdrop-blur-lg">
        {t("characters")}
      </div>

      <div className="px-4 py-2 lg:py-4">
        <BotListing />
      </div>
    </div>
  );
};

export default BotListingPage;
