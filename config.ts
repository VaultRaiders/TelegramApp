import themes from "daisyui/src/theming/themes";

const config = {
  // REQUIRED
  appName: "Ivy Soulmate",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription: "The most advanced romance chatbot you've ever talked to.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "ivy-soulmate.vercel.app",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Bronze",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Your basic plan",
        // The price you want to display, the one user will be charged on Stripe.
        price: 99,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 149,
        features: [
          {
            name: "Some thing",
          },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        name: "Silver",
        description: "You need more power",
        price: 149,
        priceAnchor: 299,
        features: [
          {
            name: "More things",
          },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Gold",
        description: "You need even more power",
        price: 299,
        priceAnchor: 499,
        features: [
          {
            name: "Even more things",
          },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "marc@mg.shipfa.st",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "marc.louvion@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "custom",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes["dark"]["primary"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/login",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/",

    // Kinde connection_id for social logins.
    kinde: {
      email:
        process.env.NEXT_PUBLIC_KINDE_CONNECTION_EMAIL ??
        "conn_01902f187d5099b61c9ed3b3dbea2c88",
      google:
        process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE ??
        "conn_019039913d650f13878ed56af19060f2",
      twitter:
        process.env.NEXT_PUBLIC_KINDE_CONNECTION_TWITTER ??
        "conn_019039917b3aa67fe46a4a565cf0ed2e",
      apple:
        process.env.NEXT_PUBLIC_KINDE_CONNECTION_APPLE ??
        "conn_019039911743411be6314433b2d2b8fb",
      patreon:
        process.env.NEXT_PUBLIC_KINDE_CONNECTION_PATREON ??
        "conn_019039916a1252810881c9dfb1d6efbb",
    },
  },
  social: {
    facebook: "https://www.facebook.com/ivysoulmate",
    twitter: "https://x.com/IvySoulmate",
    instagram: "https://www.instagram.com/ivysoulmate",
  },
} as IConfigData;

export default config;
