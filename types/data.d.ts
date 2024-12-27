interface IBotOldData {
  id?: string;
  address?: string;
  created_at?: string;
  openai_assistant_id?: string;
  photo_url?: string;
  display_name?: string;
  created_by?: string;
  chat_count?: number;
  photo_count?: number;
  greeting?: string;
  bio?: string | null;
  is_public?: boolean;
  vote?: number;
  slug?: string;
  message_count?: number;
  photo_prompt?: string;
  choice?: boolean;
  tags?: string[] | null;
  is_custom_bot?: boolean;
  traits?: string;
  scenario?: string;
  age?: number;
  additional_instructions?: string;
  is_image_generatable?: boolean;
  photo_style?: string;
  photo_model?: string;
  locale?: string;
  src?: string; // Optional field seen in the component but not in API response
}

interface IWalletData {
  address?: string;
  balance?: string;
}

interface IGameStatsData {
  totalPrice?: string;
  playingNumbers?: number;
  playingUsers?: number;
  totalBots: number;
}

interface ILeaderboardData {
  leaderboard?: {
    id?: string;
    chatId?: string;
    username?: string;
    currentBotId?: string;
    winCount?: number;
    winingAmount?: string;
    playCount?: number;
    createdAt?: string;
    updatedAt?: string;
  }[];
  metadata?: {
    totalParticipants?: number;
    totalPrizeEarned?: string;
    totalPlays?: number;
    totalWin?: number;
  };
}

interface IBotData {
  id?: string;
  address?: string;
  openaiAssistantId?: string;
  photoUrl?: string;
  displayName?: string;
  greeting?: string;
  bio?: string;
  prompt?: string;
  createdBy?: string;
  chatCount?: number;
  messageCount?: number;
  additionalInstructions?: string;
  order?: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  createdByUsername?: string;
  balance?: string;
  ticketPrice?: string;
  ticketCount?: number;
  userCount?: number;
  hasActiveTicket?: boolean;
  lastRejectedUser?: string;
  lastRejectedAt?: string;
  winMessageId?: string;
  winner?: string;
  winnerWallet?: string;
}

interface IBotCreateData {
  displayName?: string;
  prompt?: string;
  password?: string;
  photoUrl?: string;
  initPrice?: string;
}

interface IBotChatMessageData {
  id?: string;
  text?: string;
  senderRole?: string;
  createdAt?: string;
}

interface ICustomBotData {
  id?: string;
  photoUrl?: string;
  displayName?: string;
  traits?: string;
  scenario?: string;
  age?: number;
  isPublic?: boolean;
}

interface IPackageData {
  id?: string;
  quantity?: number;
  value?: number;
  paypal_plan_id?: string;
  is_most_popular?: boolean;
  thumbnail?: string;
  discount?: number;
  original_price?: number;
}
interface IPlanData {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  original_price?: number;
  discount?: number;
  duration?: number;
  is_most_popular?: boolean;
  paypal_id?: string;
  patreon_id?: string;
}
interface IProfileData {
  id?: string;
  chatId?: string;
  username?: string;
  email?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  message_count_daily?: number;
  message_count_life?: number;
  photo_count_daily?: number;
  photo_count_life?: number;
  limit_hit_at?: string;
  current_bot_id?: string;
}
interface IBotTemplateData {
  id?: string;
  title?: string;
  description?: string;
  idea?: string;
  photo?: string;
  photo_prompt?: Array<string>;
  photo_style?: string;
}

interface IAvatarInfoItemData {
  value?: string;
  label?: string;
}

interface IAvatarInfoData {
  style?: IAvatarInfoItemData;
  ethnicity?: IAvatarInfoItemData;
  eyesColor?: IAvatarInfoItemData;
  hairStyle?: IAvatarInfoItemData;
  hairColor?: IAvatarInfoItemData;
  body?: IAvatarInfoItemData;
  breastSize?: IAvatarInfoItemData;
  outfit?: IAvatarInfoItemData;
}
