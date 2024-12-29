import { create } from "zustand";

import { defaultBotAvatar } from "@/config/bot";

export interface IBotCreateData {
  id?: string;
  photoBase64?: string;
  photoUrl?: string;
  greeting?: string;
  displayName?: string;
  traits?: string;
  scenario?: string;
  bio?: string;
  age?: number;
  characteristics?: string[];
  isPublic?: number;
  idea?: string;
  photoConfig?: { prompts?: string[]; style?: string };
  ticketPrice?: number;
  password?: string;
  initKeys?: number;
}

export interface IBotGenerate {
  name?: string;
  avatarDescription?: string;
  backStory?: string;
  systemInstruction?: string;
  photoUrl?: string;
}

interface IBotStore {
  botCreateData: IBotCreateData;
  setBotCreateData: (_data: IBotCreateData) => void;
  reset: () => void;
}

export const useBotStore = create<IBotStore>((set) => ({
  botCreateData: {},
  setBotCreateData: (data) => set({ botCreateData: data }),
  reset: () =>
    set({
      botCreateData: {
        photoUrl: defaultBotAvatar,
      },
    }),
}));

interface IBotAvatarStore {
  avatarInfo: IAvatarInfoData;
  setAvatarInfo: (_data: IAvatarInfoData) => void;
}

export const useBotAvatarStore = create<IBotAvatarStore>((set) => ({
  avatarInfo: {
    style: {
      value: "options.style.realistic",
      label: "realistic",
    },
    ethnicity: {
      value: "options.ethnicity.caucasian",
      label: "caucasian",
    },
    eyesColor: {
      value: "options.eyesColor.blue",
      label: "blue",
    },
    hairStyle: {
      value: "options.hairStyle.longStraight",
      label: "long and straight",
    },
    hairColor: {
      value: "options.hairColor.black",
      label: "black",
    },
    body: {
      value: "options.body.curvy",
      label: "curvy",
    },
    breastSize: {
      value: "options.breastSize.large",
      label: "large",
    },
    outfit: {
      value: "options.outfit.sporty",
      label: "sporty",
    },
  },
  setAvatarInfo: (data) => set({ avatarInfo: data }),
}));
