import {
    backButton,
    viewport,
    themeParams,
    miniApp,
    initData,
    $debug,
    init as initSDK,
} from "@telegram-apps/sdk-react";

export function init(debug: boolean): void {
    console.log("init");
    $debug.set(debug);

    initSDK();

    // Mount all components used in the project.
    backButton.isSupported() && backButton.mount();
    miniApp.mount();
    themeParams.mount();
    initData.restore();
    void viewport.mount().catch((e) => {
        console.error("Something went wrong mounting the viewport", e);
    });
}
