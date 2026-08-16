"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { demoUpgrade } from "@/store/slices/premiumSlice";
import type { BillingPeriod } from "@/store/slices/premiumSlice";
import PremiumHero from "./premiumHero";
import PerksGrid from "./perksGrid";
import BillingToggle from "./billingToggle";
import PlanCard from "./planCard";

export default function Main() {
  const dispatch = useDispatch<AppDispatch>();
  const isPremium = useSelector((state: RootState) => state.premium.isPremium);
  const plans = useSelector((state: RootState) => state.premium.plans);

  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  return (
    <div className="mx-auto flex w-[95%] max-w-[1450px] flex-col gap-8 py-9">
      <PremiumHero />

      <PerksGrid />

      <BillingToggle billingPeriod={billingPeriod} onChange={setBillingPeriod} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            billingPeriod={billingPeriod}
            isCurrentPlan={plan.id === "premium" ? isPremium : !isPremium}
            onUpgrade={() => dispatch(demoUpgrade())}
          />
        ))}
      </div>
    </div>
  );
}
