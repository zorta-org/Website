"use client";

import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { claimReward } from "@/store/slices/rewardsSlice";
import RewardsHeader, { type RewardFilter } from "./rewardsHeader";
import TierProgress from "./tierProgress";
import RewardsGrid from "./rewardsGrid";

export default function Main() {
  const dispatch = useDispatch<AppDispatch>();
  const coins = useSelector((state: RootState) => state.coins.coins);
  const rewards = useSelector((state: RootState) => state.rewards.rewards);
  const tiers = useSelector((state: RootState) => state.rewards.tiers);

  const [filter, setFilter] = useState<RewardFilter>("All");

  const filteredRewards = useMemo(() => {
    if (filter === "All") return rewards;
    return rewards.filter((reward) => reward.category === filter);
  }, [rewards, filter]);

  return (
    <div className="mx-auto flex w-[95%] max-w-[1450px] flex-col gap-6 py-9">
      <RewardsHeader coins={coins} filter={filter} onFilterChange={setFilter} />

      <TierProgress coins={coins} tiers={tiers} />

      <RewardsGrid
        rewards={filteredRewards}
        coins={coins}
        onClaim={(id) => dispatch(claimReward(id))}
      />
    </div>
  );
}
