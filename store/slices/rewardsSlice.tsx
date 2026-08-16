import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RewardCategory = "Perks" | "Merch" | "Boosts" | "Badges";

export interface Reward {
  id: number;
  title: string;
  description: string;
  category: RewardCategory;
  cost: number;
  icon: string;
  color: string;
  claimed: boolean;
}

export interface RewardTier {
  id: number;
  name: string;
  minPoints: number;
  color: string;
  perk: string;
}

interface RewardsState {
  rewards: Reward[];
  tiers: RewardTier[];
}

const initialState: RewardsState = {
  // TEMPORARY — remove when backend is connected
  tiers: [
    { id: 1, name: "Bronze", minPoints: 0, color: "#c08552", perk: "Base rewards access" },
    { id: 2, name: "Silver", minPoints: 5000, color: "#9aa5b1", perk: "5% marketplace discount" },
    { id: 3, name: "Gold", minPoints: 15000, color: "#eea82c", perk: "Priority task matching" },
    { id: 4, name: "Platinum", minPoints: 30000, color: "#39738b", perk: "Exclusive badge + support" },
  ],
  rewards: [
    {
      id: 1,
      title: "Profile Boost (7 days)",
      description: "Your profile appears higher in developer search results.",
      category: "Boosts",
      cost: 1500,
      icon: "lucide:rocket",
      color: "#3a8cfd",
      claimed: false,
    },
    {
      id: 2,
      title: "Zorta Hoodie",
      description: "Premium embroidered hoodie, shipped worldwide.",
      category: "Merch",
      cost: 8000,
      icon: "lucide:shirt",
      color: "#432bf6",
      claimed: false,
    },
    {
      id: 3,
      title: "Zorta Sticker Pack",
      description: "A set of 10 holographic Zorta stickers.",
      category: "Merch",
      cost: 500,
      icon: "lucide:sticker",
      color: "#119e5b",
      claimed: true,
    },
    {
      id: 4,
      title: "Featured Listing (3 days)",
      description: "Pin one marketplace listing to the top of its category.",
      category: "Boosts",
      cost: 2200,
      icon: "lucide:megaphone",
      color: "#eea82c",
      claimed: false,
    },
    {
      id: 5,
      title: "Early Adopter Badge",
      description: "A permanent profile badge for early community members.",
      category: "Badges",
      cost: 1000,
      icon: "lucide:badge-check",
      color: "#39738b",
      claimed: true,
    },
    {
      id: 6,
      title: "1-on-1 Mentor Session",
      description: "30-minute code review with a senior community mentor.",
      category: "Perks",
      cost: 4500,
      icon: "lucide:graduation-cap",
      color: "#3a8cfd",
      claimed: false,
    },
    {
      id: 7,
      title: "Custom Profile Theme",
      description: "Unlock an exclusive animated profile theme.",
      category: "Perks",
      cost: 3000,
      icon: "lucide:palette",
      color: "#432bf6",
      claimed: false,
    },
    {
      id: 8,
      title: "Top Contributor Badge",
      description: "Show off your standing with a rare profile badge.",
      category: "Badges",
      cost: 12000,
      icon: "lucide:trophy",
      color: "#eea82c",
      claimed: false,
    },
  ],
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    claimReward: (state, action: PayloadAction<number>) => {
      const reward = state.rewards.find((r) => r.id === action.payload);
      if (reward) reward.claimed = true;
    },
  },
});

export const { claimReward } = rewardsSlice.actions;
export default rewardsSlice.reducer;
