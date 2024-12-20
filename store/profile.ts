import { sendGAEvent } from "@next/third-parties/google";
import Cookies from "js-cookie";
import { create } from "zustand";

import apiClient from "@/libs/api";

type ProfileStore = {
  profile: any;
  token: string;
  setToken: (_token: string) => void;
  setProfile: (_data: any) => void;
  logout: () => void;
};

const useProfileStore = create<ProfileStore>()((set) => ({
  profile: null,
  token: "",
  setProfile: (data) => set((_state) => ({ profile: data })),
  setToken: (token) => set((_state) => ({ token })),
  logout: () => set({ profile: null }),
}));

const getProfile = async (token: string) => {
  try {
    const response = await apiClient.get("/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const profileData = response.data.profile;
    if (!profileData.signup_at) {
      sendGAEvent("event", "signupSuccess", { value: profileData.id });
      try {
        await apiClient.post(
          "/v1/analytic",
          {
            hasSignup: true,
            jaId: Cookies.get("ja_id") || "",
            bmCid: Cookies.get("bm_cid") || "",
            offerId: Cookies.get("offer_id") || "",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      } catch (error) {
        console.log(error);
      }
    }
    return profileData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { getProfile, useProfileStore };
