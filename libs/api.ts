import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

apiClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let message = "";
        if (error.response?.status === 401) {
            toast.error("Please login");
            return Promise.reject(error);
        } else {
            message = error?.response?.data?.error || error.message || error.toString();
        }
        error.message = typeof message === "string" ? message : JSON.stringify(message);
        console.error(error.message);
        if (error.message) {
            toast.error(error.message);
        } else {
            toast.error("something went wrong...");
        }
        return Promise.reject(error);
    }
);

apiClient.interceptors.request.use((config) => {
    if (!config.headers["Content-Language"]) {
        config.headers["Content-Language"] = Cookies.get("NEXT_LOCALE") || "en";
    }
    return config;
});

export default apiClient;
