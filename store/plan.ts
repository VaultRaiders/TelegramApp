import { create } from "zustand";

import apiClient from "@/libs/api";

type PlansStore = {
  plans: IPlanData[];
  setPlans: (_data: any) => void;
};

const usePlansStore = create<PlansStore>()((set) => ({
  plans: null,
  setPlans: (data) => set((_state) => ({ plans: data })),
}));

const getPlans = async () => {
  try {
    const response = await apiClient.get("/v1/get-list-plans");

    let { plans: plansResp } = response.data;
    for (let i = 0; i < plansResp.length; i++) {
      plansResp[i].price = Number(plansResp[i].price);
      plansResp[i].original_price = Number(plansResp[i].original_price);

      plansResp[i].discount =
        ((plansResp[i].original_price - plansResp[i].price) /
          plansResp[i].original_price) *
        100;

      plansResp[i].discount = Math.round(plansResp[i].discount);
    }

    return plansResp;
  } catch (error) {
    console.log(error);
  }
};

export { getPlans, usePlansStore };
