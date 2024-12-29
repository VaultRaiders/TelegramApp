import { create } from "zustand";
import { IBotGenerate } from "./bot";

type IGenerate = {
  generateData: IBotGenerate;
  setGenerateData: (_data: IBotGenerate) => void;
};

export const useGenerateBotDataStore = create<IGenerate>((set) => ({
  generateData: {},
  setGenerateData: (data) => {
    set({ generateData: data });
  },
}));
