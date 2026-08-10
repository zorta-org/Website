"use client";
import { Icon } from "@iconify/react";
import {useSelector} from "react-redux";
import type { RootState } from "@/store/store" 

export default function TopBar() {
const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    /* Topbar Content */
    <div className="flex items-center justify-between w-full">
      {/* Search Bar */}
      <div className="flex py-1.5">
        <div className="relative w-full">
          <Icon
            icon="mdi:search"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width={18}
          />
          <input
            type="text"
            placeholder="Search anything on Zorta..."
            className="w-full rounded-lg border border-gray-200 py-2 pl-12 pr-30 text-[12px] outline-none focus:border-[#8cc3de]"
          />
        </div>
      </div>
      {/* Profile section */}
      <div className="flex items-center gap-4 ">
        <button className="flex items-center gap-1 rounded-lg border border-[#8cc3de] py-2 px-4 text-[12px] text-[#36778f] font-semibold hover:border-[#6aa9c1] cursor-pointer">
            <Icon icon="mdi:plus" className="text-[16px]" />
            Create
            <Icon icon="weui:arrow-filled" className="rotate-90 ml-1 text-[16px]" />
        </button>
        <div>
          <Icon icon="line-md:bell"  className="text-[18px] cursor-pointer"/>
        </div>
        <div>
          <Icon icon="streamline-flex:chat-bubble-typing-oval"  className="text-[18px] cursor-pointer"/>
        </div>
       {isAuthenticated ? (
        <p>Logged in</p>
          ) : (
          <button className="flex items-center gap-1 rounded-lg border border-[#8cc3de] py-2 px-6 text-[12px] text-[#36778f] font-semibold hover:border-[#2a6077] cursor-pointer hover:bg-[#39738b] hover:text-white ">
            Signup
        </button>
        )}
      </div>
    </div>
  );
}
