import type { BillingPeriod } from "@/store/slices/premiumSlice";

interface BillingToggleProps {
  billingPeriod: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
}

export default function BillingToggle({
  billingPeriod,
  onChange,
}: BillingToggleProps) {
  return (
    <div className="flex items-center gap-1 self-center rounded-full border border-[#dadada57] p-1">
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={`rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors cursor-pointer ${
          billingPeriod === "monthly"
            ? "bg-[#8cc3de]/30 font-semibold text-[#39738b]"
            : "text-[#868585] hover:bg-[#f2f2f2]"
        }`}
      >
        Monthly
      </button>

      <button
        type="button"
        onClick={() => onChange("yearly")}
        className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors cursor-pointer ${
          billingPeriod === "yearly"
            ? "bg-[#8cc3de]/30 font-semibold text-[#39738b]"
            : "text-[#868585] hover:bg-[#f2f2f2]"
        }`}
      >
        Yearly
        <span className="rounded-full bg-[#dcf4e3] px-2 py-0.5 text-[9.5px] font-semibold text-[#119e5b]">
          Save 33%
        </span>
      </button>
    </div>
  );
}
