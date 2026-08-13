"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "@/store/store";
import { demoCompleteTask } from "@/store/slices/dailyTasksSlice";

export default function DailyTasks() {
  const dispatch = useDispatch<AppDispatch>();

  const { tasks, resetAt } = useSelector(
    (state: RootState) => state.dailyTasks
  );

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const difference =
        new Date(resetAt).getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft("Resetting...");
        return;
      }

      const hours = Math.floor(
        difference / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      );

      setTimeLeft(
        `${hours}h ${minutes.toString().padStart(2, "0")}m`
      );
    };

    updateCountdown();

    const interval = setInterval(
      updateCountdown,
      60 * 1000
    );

    return () => clearInterval(interval);
  }, [resetAt]);

  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  return (
    <div className="w-full rounded-xl border border-[#dadada57] px-3 py-5">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[15px] font-semibold">
          Daily Tasks
        </h2>

        <p className="text-[10px] text-[#868585]">
          Resets in {timeLeft}
        </p>
      </div>

      {/* Tasks */}
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between"
          >
            {/* Task */}
            <div className="flex min-w-0 items-center gap-3">
              <Icon
                icon="lucide:clipboard-check"
                width={14}
                height={14}
                className="shrink-0 text-[#525866]"
              />

              <p className="truncate text-[11px] text-[#363636]">
                {task.title}
              </p>
            </div>

            {/* Reward + status */}
            <div className="ml-3 flex shrink-0 items-center gap-2">
              <p className="text-[10px] font-medium text-[#363636]">
                +{task.reward} Coins
              </p>

              <button
                type="button"
                disabled={task.completed}
                onClick={() =>
                  dispatch(demoCompleteTask(task.id))
                }
                className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                  task.completed
                    ? "border-[#39738b] bg-[#39738b]"
                    : "border-[#d5d7dd] bg-white hover:border-[#6337f4]"
                }`}
              >
                {task.completed && (
                  <Icon
                    icon="material-symbols:check"
                    width={11}
                    height={11}
                    className="text-white"
                  />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Claim All */}
      <button
        type="button"
        disabled={completedTasks.length === 0}
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-[11px] font-medium ${
          completedTasks.length > 0
            ? "bg-[#39738b] text-white hover:bg-[#32677e] cursor-pointer"
            : "cursor-not-allowed bg-[#eeeef2] text-[#999]"
        }`}
      >
        Claim All Rewards

        <Icon
          icon="icon-park-outline:diamond"
          width={13}
          height={13}
        />

        <span>25</span>
      </button>
    </div>
  );
}