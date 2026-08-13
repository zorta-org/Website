"use client";

import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopbarProps) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <div className="flex w-full min-w-0 items-center gap-3">
      {/* Mobile / tablet menu */}
      <button
        type="button"
        aria-label="Open sidebar"
        onClick={onMenuClick}
        className="hidden max-[1100px]:flex h-9 w-9 shrink-0 items-center justify-center rounded-lg hover:bg-[#f4f4f4]"
      >
        <Icon icon="lucide:menu" width={19} />
      </button>

      {/* Search */}
      <div className="flex min-w-0 flex-1 max-w-[520px]">
        <div className="relative w-full">
          <Icon
            icon="mdi:search"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width={18}
          />

          <input
            type="text"
            placeholder="Search anything on Zorta..."
            className="w-full rounded-lg border border-gray-200 py-2 pl-12 pr-4 text-[12px] outline-none focus:border-[#8cc3de]"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="ml-auto flex shrink-0 items-center gap-4">
        <button className="hidden items-center gap-1 rounded-lg border border-[#8cc3de] px-4 py-2 text-[12px] font-semibold text-[#36778f] hover:border-[#6aa9c1] max-[640px]:hidden sm:flex cursor-pointer">
          <Icon icon="mdi:plus" className="text-[16px]" />
          Create
          <Icon
            icon="weui:arrow-filled"
            className="rotate-90 ml-1 text-[16px]"
          />
        </button>

        <Icon
          icon="line-md:bell"
          className="cursor-pointer text-[18px] max-[640px]:hidden"
        />

        <Icon
          icon="streamline-flex:chat-bubble-typing-oval"
          className="cursor-pointer text-[18px] max-[640px]:hidden"
        />

        {isAuthenticated ? (
          <p className="text-[11px] font-medium whitespace-nowrap">
            Logged in
          </p>
        ) : (
          <button className="rounded-lg border border-[#8cc3de] px-4 py-2 text-[12px] font-semibold text-[#36778f] hover:bg-[#39738b] hover:text-white cursor-pointer">
            Signup
          </button>
        )}
      </div>
    </div>
  );
}