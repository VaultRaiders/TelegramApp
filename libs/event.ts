import { sendGAEvent } from "@next/third-parties/google";

export const sendCreateFirstEvent = (userId: string) => {
    sendGAEvent("event", "firstBotCreated", { value: userId });
    window.Offer18WebSDK.trackConversion({
        domain: "ivysoulmate.o18.link",
        accountId: process.env.NEXT_PUBLIC_OFFER18_ACCOUNT_ID,
        offerId: process.env.NEXT_PUBLIC_OFFER18_OFFER_ID,
        postbackType: "ajax",
    });
};
