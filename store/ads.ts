import { create } from "zustand";

type ShowAdsStore = {
  showAds: number;
  adsConfig: any;
  setShowAds: (_data: number) => void;
  setAdsConfig: (_data: any) => void;
};

const useShowAdsStore = create<ShowAdsStore>((set) => ({
  showAds: 0,
  adsConfig: {
    title: "Upgrade to Unlock",
  },
  setShowAds: (data) => {
    set({ showAds: data });
  },
  setAdsConfig: (data) => {
    set({ adsConfig: data });
  },
}));

export { useShowAdsStore };
