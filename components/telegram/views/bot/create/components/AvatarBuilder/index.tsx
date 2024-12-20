"use client";

import { useTranslations } from "next-intl";

import { DEFAULT_KID_IMAGE } from "@/constants";
import Body from "@/icons/body";
import BreastSize from "@/icons/breast-size";
import Ethnicity from "@/icons/ethnicity";
import EyesColor from "@/icons/eyes-color";
import HairColor from "@/icons/hair-color";
import HairStyle from "@/icons/hair-style";
import Outfit from "@/icons/outfit";
import Style from "@/icons/style";

import BuilderList from "./BuilderList";

const AvatarBuilder = ({
  avatarInfo,
  setAvatarInfo,
}: {
  avatarInfo: IAvatarInfoData;
  setAvatarInfo: any;
}) => {
  const t = useTranslations("FormAvatarBuilder");

  const options = {
    style: [
      {
        value: "options.style.realistic",
        label: "realistic",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.style.anime",
        label: "anime",
        photoUrl: DEFAULT_KID_IMAGE,
      },
    ],
    ethnicity: [
      {
        value: "options.ethnicity.caucasian",
        label: "caucasian",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.ethnicity.asian",
        label: "asian",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.ethnicity.african",
        label: "african",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.ethnicity.latina",
        label: "latina",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.ethnicity.middleEastern",
        label: "middle eastern",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.ethnicity.nativeAmerican",
        label: "native american",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.ethnicity.pacificIslander",
        label: "pacific islander",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.ethnicity.mixed",
        label: "mixed",
        photoUrl: DEFAULT_KID_IMAGE,
      },
    ],
    eyesColor: [
      {
        value: "options.eyesColor.brown",
        label: "brown",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.eyesColor.green",
        label: "green",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.eyesColor.darkBrown",
        label: "dark brown",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.eyesColor.blue",
        label: "blue",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.eyesColor.hazel",
        label: "hazel",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.eyesColor.black",
        label: "black",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.eyesColor.amber",
        label: "amber",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.eyesColor.gray",
        label: "gray",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.eyesColor.lightBrown",
        label: "light brown",
        photoUrl: DEFAULT_KID_IMAGE,
      },
    ],
    hairColor: [
      {
        value: "options.hairColor.black",
        label: "black",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairColor.darkBrown",
        label: "dark brown",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairColor.blonde",
        label: "blonde",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairColor.red",
        label: "red",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairColor.silver",
        label: "silver",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairColor.platinumBlonde",
        label: "platinum blonde",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairColor.chestnutBrown",
        label: "chestnut brown",
        photoUrl: DEFAULT_KID_IMAGE,
      },
    ],
    hairStyle: [
      {
        value: "options.hairStyle.longStraight",
        label: "long straight",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.curlyVoluminous",
        label: "curly voluminous",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.shortNatural",
        label: "short natural",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.wavyShoulder",
        label: "wavy shoulder",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.longBraided",
        label: "long braided",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.mediumWavy",
        label: "medium wavy",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.pixieCut",
        label: "pixie cut",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.tousledShort",
        label: "tousled short",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.highPonytail",
        label: "high ponytail",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.bobCut",
        label: "bob cut",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.messyBun",
        label: "messy bun",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.braided",
        label: "braided",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.curlyShort",
        label: "curly short",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.hairStyle.longWavy",
        label: "long wavy",
        photoUrl: DEFAULT_KID_IMAGE,
      },
    ],
    body: [
      {
        value: "options.body.slim",
        label: "slim",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.body.athletic",
        label: "athletic",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.body.curvy",
        label: "curvy",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.body.plusSize",
        label: "plus size",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.body.petite",
        label: "petite",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.body.muscular",
        label: "muscular",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.body.average",
        label: "average",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.body.hourglass",
        label: "hourglass",
        photoUrl: DEFAULT_KID_IMAGE,
      },
    ],
    breastSize: [
      {
        value: "options.breastSize.small",
        label: "small",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.breastSize.medium",
        label: "medium",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.breastSize.large",
        label: "large",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.breastSize.extraLarge",
        label: "extra large",
        photoUrl: DEFAULT_KID_IMAGE,
      },
    ],
    outfit: [
      {
        value: "options.outfit.casual",
        label: "casual",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.outfit.formal",
        label: "formal",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.outfit.sporty",
        label: "sporty",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.outfit.trendy",
        label: "trendy",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.outfit.bohemian",
        label: "bohemian",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.outfit.business",
        label: "business",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.outfit.chic",
        label: "chic",
        photoUrl: DEFAULT_KID_IMAGE,
      },
      {
        value: "options.outfit.streetwear",
        label: "streetwear",
        photoUrl: DEFAULT_KID_IMAGE,
      },
    ],
  };

  const handleSelect = (field: string, value: IAvatarInfoItemData) => {
    setAvatarInfo({ ...avatarInfo, [field]: value });
  };

  return (
    <div className="flex flex-col gap-4">
      <BuilderList
        items={[
          {
            key: "style",
            icon: <Style className="h-12 w-12" />,
            label: t("style"),
            options: options.style,
            defaultSelected: avatarInfo.style.value,
          },
          {
            key: "ethnicity",
            icon: <Ethnicity className="h-12 w-12" />,
            label: t("ethnicity"),
            options: options.ethnicity,
            defaultSelected: avatarInfo.ethnicity.value,
          },
          {
            key: "hairColor",
            icon: <HairColor className="h-12 w-12" />,
            label: t("hair-color"),
            options: options.hairColor,
            defaultSelected: avatarInfo.hairColor.value,
          },
          {
            key: "hairStyle",
            icon: <HairStyle className="h-12 w-12" />,
            label: t("hair-style"),
            options: options.hairStyle,
            defaultSelected: avatarInfo.hairStyle.value,
          },
          {
            key: "eyesColor",
            icon: <EyesColor className="h-12 w-12" />,
            label: t("eyes-color"),
            options: options.eyesColor,
            defaultSelected: avatarInfo.eyesColor.value,
          },
          {
            key: "body",
            icon: <Body className="h-12 w-12" />,
            label: t("body"),
            options: options.body,
            defaultSelected: avatarInfo.body.value,
          },
          {
            key: "breastSize",
            icon: <BreastSize className="h-12 w-12" />,
            label: t("breast-size"),
            options: options.breastSize,
            defaultSelected: avatarInfo.breastSize.value,
          },
          {
            key: "outfit",
            icon: <Outfit className="h-12 w-12" />,
            label: t("outfit"),
            options: options.outfit,
            defaultSelected: avatarInfo.outfit.value,
          },
        ]}
        onSelect={(key, value) => handleSelect(key, value)}
      />
    </div>
  );
};

export default AvatarBuilder;
