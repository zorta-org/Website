import { Icon } from "@iconify/react";
import type { BillingPeriod, PremiumPlan } from "@/store/slices/premiumSlice";

interface PlanCardProps {
  plan: PremiumPlan;
  billingPeriod: BillingPeriod;
  isCurrentPlan: boolean;
  onUpgrade: () => void;
}

export default function PlanCard({
  plan,
  billingPeriod,
  isCurrentPlan,
  onUpgrade,
}: PlanCardProps) {
  const isPremiumPlan = plan.id === "premium";
  const price =
    billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  const period = billingPeriod === "monthly" ? "/ month" : "/ year";

  return (
    <div
      className={`flex flex-col gap-5 rounded-xl border bg-white p-6 ${
        isPremiumPlan ? "border-[#39738b]" : "border-[#dadada57]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[16px] font-semibold">{plan.name}</p>
          <p className="mt-1 text-[11px] text-[#868585]">{plan.tagline}</p>
        </div>

        {isPremiumPlan && (
          <span className="flex items-center gap-1 rounded-full bg-[#8cc3de]/30 px-3 py-1 text-[10px] font-semibold text-[#39738b]">
            <Icon icon="pepicons-pencil:stars" width={12} />
            Popular
          </span>
        )}
      </div>

      <div className="flex items-end gap-1">
        <span className="text-[32px] font-bold leading-none">
          {price === 0 ? "Free" : `$${price}`}
        </span>
        {price > 0 && (
          <span className="pb-1 text-[12px] text-[#868585]">{period}</span>
        )}
      </div>

      <ul className="flex flex-col gap-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Icon
              icon="mdi:check-circle"
              width={15}
              className="mt-0.5 shrink-0 text-[#39738b]"
            />
            <span className="text-[12px] text-[#363636]">{feature}</span>
          </li>
        ))}
      </ul>

      {isPremiumPlan ? (
        <button
          type="button"
          disabled={isCurrentPlan}
          onClick={onUpgrade}
          className={`mt-auto flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-[12px] font-semibold transition-colors ${
            isCurrentPlan
              ? "cursor-not-allowed bg-[#dcf4e3] text-[#119e5b]"
              : "cursor-pointer bg-[#39738b] text-white hover:bg-[#2a6077]"
          }`}
        >
          {isCurrentPlan ? (
            <>
              <Icon icon="mdi:check" width={14} />
              Current Plan
            </>
          ) : (
            <>
              Upgrade Now
              <Icon icon="maki:arrow" width={12} />
            </>
          )}
        </button>
      ) : (
        <button
          type="button"
          disabled
          className="mt-auto cursor-default rounded-full border border-[#dadada57] px-5 py-2.5 text-[12px] font-semibold text-[#363636]"
        >
          {isCurrentPlan ? "Current Plan" : "Free Forever"}
        </button>
      )}
    </div>
  );
}
