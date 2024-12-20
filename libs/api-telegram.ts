import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const telegramApiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TELEGRAM_API_URL,
});

telegramApiClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response?.status === 401) {
            toast.error("Please login");
            return Promise.reject(error);
        } else {
            const message =
                error?.response?.data?.error?.message ||
                error.message ||
                error.toString();
            toast.error(message);
        }

        return Promise.reject(error);
    },
);

telegramApiClient.interceptors.request.use((config) => {
    if (!config.headers["Content-Language"]) {
        config.headers["Content-Language"] = Cookies.get("NEXT_LOCALE") || "en";
    }
    return config;
});

export default telegramApiClient;
