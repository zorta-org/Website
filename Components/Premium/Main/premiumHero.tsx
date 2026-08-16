import { Icon } from "@iconify/react";

export default function PremiumHero() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-[#639ab4]/20 bg-[#8cc3de]/15 px-6 py-10 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#639ab4]/20 text-[#39738b]">
        <Icon icon="pepicons-pencil:stars" width={26} />
      </div>

      <h1 className="text-[26px] font-bold">Go Premium</h1>

      <p className="max-w-[420px] text-[13px] text-[#868585]">
        Unlock unlimited projects, priority support, and exclusive perks
        built for people who ship.
      </p>
    </div>
  );
}
