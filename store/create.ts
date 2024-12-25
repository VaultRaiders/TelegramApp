import { create } from "zustand";

type ICreateStore = {
  botData: IBotCreateData;
  setBotData: (_data: IBotData) => void;
};

export const useCreateStore = create<ICreateStore>((set) => ({
  botData: {},
  setBotData: (data) => {
    set({ botData: data });
  },
}));
