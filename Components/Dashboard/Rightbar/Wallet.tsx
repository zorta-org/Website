"use client"
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function Wallet() {
  const coins = useSelector((state : RootState) => state.coins.coins)
  return (
    <div className="relative w-full h-35 overflow-hidden rounded-xl border border-[#dadada57] px-3 py-4">
      
      {/* Graph */}
      <div className="absolute right-0 bottom-0 w-[55%] h-[70%] pointer-events-none">
        <Image
          src="/Images/wallet-graph.png"
          alt=""
          className="w-full h-full object-contain opacity-35"
          fill
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <p className="text-[10px] text-[#868585] font-medium">
            YOUR WALLET
          </p>

          <button className="rounded-lg border border-[#dadada57] px-3 py-2 text-[10px] text-[#39738b] cursor-pointer hover:border-[#8cc3de] font-semibold">
            View Wallet
          </button>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <Icon
                icon="twemoji:coin"
                width={27}
                height={27}
              />
        

          <p className="text-[26px] font-medium">
            {coins.toLocaleString()}
          </p>
        </div>

        <div className="mt-1 flex items-center gap-3">
          <div className="h-2.5 w-9 rounded-full bg-[#f1f1f1]" />

          <p className="text-[12px] text-[#868585]">
            ZORTA Coins
          </p>
        </div>
      </div>
    </div>
  );
}