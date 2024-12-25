interface IChildren {
  children: React.ReactNode;
}

type ITheme =
  | "light"
  | "dark"
  | "cupcake"
  | "bumblebee"
  | "emerald"
  | "corporate"
  | "synthwave"
  | "retro"
  | "cyberpunk"
  | "valentine"
  | "halloween"
  | "garden"
  | "forest"
  | "aqua"
  | "lofi"
  | "pastel"
  | "fantasy"
  | "wireframe"
  | "black"
  | "luxury"
  | "dracula"
  | "sunset"
  | "custom";

interface IConfigData {
  appName: string;
  appDescription: string;
  domainName: string;
  crisp: {
    id?: string;
    onlyShowOnRoutes?: string[];
  };
  stripe: {
    plans: {
      isFeatured?: boolean;
      priceId: string;
      name: string;
      description?: string;
      price: number;
      priceAnchor?: number;
      features: {
        name: string;
      }[];
    }[];
  };
  aws?: {
    bucket?: string;
    bucketUrl?: string;
    cdn?: string;
  };
  mailgun: {
    subdomain: string;
    fromNoReply: string;
    fromAdmin: string;
    supportEmail?: string;
    forwardRepliesTo?: string;
  };
  colors: {
    theme: ITheme;
    main: string;
  };
  auth: {
    loginUrl: string;
    callbackUrl: string;
    kinde: {
      email: string;
      google: string;
      twitter: string;
      apple: string;
      patreon: string;
    };
  };
  social: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
}

interface IQueryResponse<T> {
  data?: T;
  message: "success" | "error";
}
