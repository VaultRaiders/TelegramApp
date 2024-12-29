import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  loading: false,
  toggleLoading: (loading: boolean) => set(() => ({ loading })),
}));
