import { useState, useEffect } from "react";
import { IBotCreateData, useBotStore } from "@/store/bot";
import telegramApiClient from "@/libs/api-telegram";

interface UseBotCreationReturn {
    step: number;
    isLoading: boolean;
    navigateToStep: (step: number) => void;
    handleNext: () => void;
    handleBack: () => void;
}

export const useBotCreation = (): UseBotCreationReturn => {
    const [step, setStep] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { setBotCreateData, botCreateData } = useBotStore();

    useEffect(() => {
        const initializeBotData = async () => {
            setIsLoading(true);
            try {
                const botData = JSON.parse(
                    localStorage.getItem("botCreateData") || "{}",
                );
                const response = await telegramApiClient.post("/bot/idea", {
                    idea: botData.idea,
                });
                const createData: IBotCreateData = response.data.data;
                setBotCreateData({ ...botData, ...createData });
            } catch (error) {
                console.error("Error initializing bot data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        initializeBotData();
    }, [setBotCreateData]);

    const navigateToStep = (newStep: number) => {
        if (newStep >= 1 && newStep <= 3) {
            setStep(newStep);
        }
    };

    const handleNext = () => {
        navigateToStep(step + 1);
    };

    const handleBack = () => {
        navigateToStep(step - 1);
    };

    return {
        step,
        isLoading,
        navigateToStep,
        handleNext,
        handleBack,
    };
};
