import { Icon } from "@iconify/react";
import type { Reward } from "@/store/slices/rewardsSlice";

interface RewardCardProps {
  reward: Reward;
  coins: number;
  onClaim: (id: number) => void;
}

export default function RewardCard({ reward, coins, onClaim }: RewardCardProps) {
  const { id, title, description, category, cost, icon, color, claimed } =
    reward;

  const canAfford = coins >= cost;

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[#dadada57] bg-white p-4 transition-colors hover:border-[#6aa9c1]">
      <div className="flex items-start justify-between gap-2">
        <div
          style={{
            backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
            color,
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full"
        >
          <Icon icon={icon} width={19} />
        </div>

        <span className="rounded-full bg-[#f2f2f2] px-2.5 py-1 text-[9.5px] font-semibold text-[#868585]">
          {category}
        </span>
      </div>

      <div>
        <p className="text-[14px] font-semibold">{title}</p>
        <p className="mt-1 text-[11px] text-[#868585]">{description}</p>
      </div>

      <div className="mt-1 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <Icon icon="twemoji:coin" width={14} />
          <span className="text-[13px] font-bold text-[#363636]">
            {cost.toLocaleString()}
          </span>
        </div>

        {claimed ? (
          <span className="flex items-center gap-1 rounded-full bg-[#dcf4e3] px-3 py-1.5 text-[11px] font-semibold text-[#119e5b]">
            <Icon icon="mdi:check" width={13} />
            Claimed
          </span>
        ) : (
          <button
            type="button"
            disabled={!canAfford}
            onClick={() => onClaim(id)}
            className={`rounded-full px-4 py-1.5 text-[11px] font-semibold transition-colors ${
              canAfford
                ? "bg-[#39738b] text-white hover:bg-[#2a6077] cursor-pointer"
                : "cursor-not-allowed bg-[#f2f2f2] text-[#868585]"
            }`}
          >
            Redeem
          </button>
        )}
      </div>
    </div>
  );
}
