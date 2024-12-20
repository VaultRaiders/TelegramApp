import { useState } from "react";
import { toast } from "react-hot-toast";
import telegramApiClient from "@/libs/api-telegram";
import { initDataRaw } from "@telegram-apps/sdk-react";
import { useBotStore } from "@/store/bot";

interface BotSubmissionData {
    creatorKey: number | undefined;
    ticketPrice: number | undefined;
    password: string;
    // Add other fields as needed
}

interface BotResponse {
    success: boolean;
    data: {
        id: string;
        address: string;
        display_name: string;
        created_at: string;
        openai_assistant_id: string;
        photo_url: string;
        created_by: string;
        chat_count: number;
        photo_count: number;
        greeting: string;
        bio: string | null;
        is_public: boolean;
        vote: number;
        slug: string;
        message_count: number;
        photo_prompt: string;
        choice: boolean;
        tags: string[] | null;
        is_custom_bot: boolean;
        traits: string;
        scenario: string;
        age: number;
        additional_instructions: string;
        is_image_generatable: boolean;
        photo_style: string;
        photo_model: string;
        locale: string;
        order: number;
    };
    message?: string;
    requestId: string;
}

interface SubmissionResult {
    success: boolean;
    botId?: string;
    botName?: string;
}

export const useBotSubmission = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [submissionResult, setSubmissionResult] = useState<SubmissionResult>({
        success: false,
    });

    const { botCreateData, setBotCreateData } = useBotStore();

    const submitBot = async (formData: BotSubmissionData): Promise<boolean> => {
        setIsSubmitting(true);

        const botCreatePayload = {
            ...botCreateData,
            initKeys: formData.creatorKey,
            ticketPrice: formData.ticketPrice,
            password: formData.password,
        };

        try {
            const response = await telegramApiClient.post<BotResponse>(
                "/bot",
                botCreatePayload,
                {
                    headers: {
                        authorization: `tma ${initDataRaw()}`,
                    },
                },
            );

            if (response.data.success) {
                setBotCreateData(botCreatePayload);
                toast.success("Profile saved successfully!");

                setSubmissionResult({
                    success: true,
                    botId: response.data.data.id,
                    botName: response.data.data.display_name,
                });
                setShowSuccessModal(true);
                return true;
            }

            throw new Error(response.data.message || "Failed to save profile");
        } catch (error) {
            console.error("Error submitting bot:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    };

    return {
        isSubmitting,
        submitBot,
        showSuccessModal,
        submissionResult,
        closeSuccessModal,
    };
};
