import { Icon } from "@iconify/react";

interface MarketplaceHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function MarketplaceHeader({
  search,
  onSearchChange,
}: MarketplaceHeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-[26px] font-bold">Marketplace</h1>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-[#dadada57] px-4 py-2 focus-within:border-[#8cc3de]">
          <Icon icon="mdi:search" width={15} className="text-[#868585]" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-[180px] text-[12px] outline-none placeholder:text-[#868585]"
          />
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full bg-[#39738b] px-5 py-2.5 text-[12px] font-semibold text-white hover:bg-[#2a6077] cursor-pointer"
        >
          <Icon icon="mdi:plus" width={15} />
          Sell a Product
        </button>
      </div>
    </div>
  );
}
