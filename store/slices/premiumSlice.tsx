import { createSlice } from "@reduxjs/toolkit";

export type BillingPeriod = "monthly" | "yearly";

export interface PremiumPlan {
  id: "free" | "premium";
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  tagline: string;
  features: string[];
}

interface PremiumState {
  isPremium: boolean;
  plans: PremiumPlan[];
}

const initialState: PremiumState = {
  // TEMPORARY — remove when backend is connected
  isPremium: false,
  plans: [
    {
      id: "free",
      name: "Free",
      monthlyPrice: 0,
      yearlyPrice: 0,
      tagline: "Everything you need to get started",
      features: [
        "Up to 3 active projects",
        "Community marketplace access",
        "Standard task matching",
        "Basic profile customization",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      monthlyPrice: 12,
      yearlyPrice: 96,
      tagline: "For builders who want the full toolkit",
      features: [
        "Unlimited projects",
        "Priority support & task matching",
        "2x coin rewards on completed tasks",
        "Featured marketplace placement",
        "Exclusive profile themes & badge",
        "Early access to new features",
      ],
    },
  ],
};

const premiumSlice = createSlice({
  name: "premium",
  initialState,
  reducers: {
    // TEMP ONLY — real upgrades should go through billing/backend
    demoUpgrade: (state) => {
      state.isPremium = true;
    },
    demoDowngrade: (state) => {
      state.isPremium = false;
    },
  },
});

export const { demoUpgrade, demoDowngrade } = premiumSlice.actions;
export default premiumSlice.reducer;
