import { Icon } from "@iconify/react";

export default function FeaturedBanner() {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#e6e1fb] px-7 py-6 overflow-hidden">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-[#432bf6]">
          Featured
        </span>
        <p className="text-[18px] font-bold text-[#1a1a1a]">
          Sell what you build. Keep what you earn.
        </p>
        <p className="max-w-[420px] text-[12px] text-[#5a5a5a]">
          List templates, bots, and design assets in the Bazaar and get paid
          in ZORTA Coins — redeemable for real rewards.
        </p>
      </div>

      <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/60">
        <Icon icon="icon-park-outline:shop" width={28} className="text-[#432bf6]" />
      </div>
    </div>
  );
}
