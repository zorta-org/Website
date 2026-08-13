"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { Icon } from "@iconify/react";

export default function Streak() {
  const { currentStreak, week } = useSelector(
    (state: RootState) => state.streak
  );

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="w-full rounded-xl border border-[#dadada57] px-3 py-4">
      <p className="mb-3 text-[10px] font-medium text-[#868585]">
        STREAK
      </p>

      <div className="flex items-center justify-between">
        {/* Streak count */}
        <div className="flex items-center gap-2">
          <span className="text-[18px]">🔥</span>

          <p className="text-[14px] font-semibold whitespace-nowrap">
            {currentStreak} Days
          </p>
        </div>

        {/* Days */}
        <div className="flex items-start gap-3">
          {days.map((day, index) => {
            const completed = week[index];

            return (
              <div
                key={`${day}-${index}`}
                className="flex flex-col items-center gap-1"
              >
                <div
                  className={`flex h-3 w-3 items-center justify-center rounded-full border ${
                    completed
                      ? "border-[#39738b] bg-[#39738b]"
                      : "border-[#d9d9df] bg-white"
                  }`}
                >
                  {completed && (
                    <Icon
                      icon="material-symbols:check"
                      width={11}
                      className="text-white"
                    />
                  )}
                </div>

                <span className="text-[10px] text-[#4c4c56]">
                  {day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}