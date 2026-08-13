"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function LevelProgress() {
  const { level, xp, xpRequired } = useSelector(
    (state: RootState) => state.progress
  );

  const progress = Math.min((xp / xpRequired) * 100, 100);

  return (
    <div className="w-full rounded-xl border border-[#dadada57] px-3 py-4 flex flex-col gap-2">
      {/* Header */}
      <div className=" flex items-center justify-between">
        <p className="text-[10px] font-medium text-[#868585]">
          LEVEL PROGRESS
        </p>

       
      </div>
      
      {/* Level */}
      <div className="flex items-center justify-between">
      <p className=" text-[16px] font-semibold">
        Level {level}
      </p>
       <p className="text-[11px] text-[#5e6270]">
          {xp.toLocaleString()} / {xpRequired.toLocaleString()} XP
        </p>
       </div>
      {/* Progress bar */}
      <div className="h-1.25 w-full overflow-hidden rounded-full bg-[#f0f0f3]">
        <div
          className="h-full rounded-full bg-[#39738b] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}