import { useEffect, useState } from "react";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Card from "@/components/core/card";
import { DEFAULT_KID_IMAGE } from "@/constants";
import { cn } from "@/libs/utils";

interface IBuilderSelectProps {
  title?: string;
  items?: {
    value?: string;
    label?: string;
    photoUrl?: string;
  }[];
  defaultSelected?: string;
  onSelect?: (_value: IAvatarInfoItemData) => void;
  hidden?: boolean;
}

const BuilderSelect = ({
  title,
  items,
  defaultSelected,
  onSelect,
  hidden = false,
}: IBuilderSelectProps) => {
  const t = useTranslations("FormAvatarBuilder");

  const [selected, setSelected] = useState(
    defaultSelected || items?.[0]?.value || "",
  );

  useEffect(() => {
    if (defaultSelected) {
      const item = items?.find((item) => item?.value === defaultSelected);
      if (item) {
        setSelected(item.value);
        onSelect?.({
          value: item.value,
          label: item.label,
        });
      } else {
        setSelected(items?.[0]?.value || "");
        onSelect?.({
          value: items?.[0]?.value || "",
          label: items?.[0]?.label || "",
        });
      }
    }
  }, [defaultSelected]);

  const handleSelect = (value?: string) => {
    if (!value) return;
    setSelected(value);
    onSelect?.({
      value,
      label: items?.find((item) => item?.value === value)?.label,
    });
  };

  return (
    <div
      className={cn(
        "relative mt-8 rounded-xl bg-neutral-800 p-2 pt-6",
        hidden && "hidden",
      )}
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-xl bg-neutral-800 px-4 py-2 text-center text-xl font-bold text-white">
        {title}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {items?.map((item, index) => (
          <Card
            key={index}
            onClick={() => handleSelect(item?.value)}
            neon={selected === item?.value}
            className="bg-neutral-800"
          >
            <div className="relative flex w-full flex-col gap-4 overflow-hidden rounded-xl">
              <div>
                <Image
                  width={500}
                  height={500}
                  src={
                    process.env.NEXT_PUBLIC_KID === "kid"
                      ? DEFAULT_KID_IMAGE
                      : item?.photoUrl
                  }
                  alt={item?.value}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex flex-col bg-gradient-to-t from-black/50 p-2 backdrop-blur-sm">
                {item?.value && (
                  <div className="text-lg font-medium text-white md:text-left">
                    {t(item?.value)}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BuilderSelect;
