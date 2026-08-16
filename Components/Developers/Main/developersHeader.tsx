import { Icon } from "@iconify/react";

export type AvailabilityFilter = "all" | "available";

interface DevelopersHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  availability: AvailabilityFilter;
  onAvailabilityChange: (value: AvailabilityFilter) => void;
}

export default function DevelopersHeader({
  search,
  onSearchChange,
  availability,
  onAvailabilityChange,
}: DevelopersHeaderProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[26px] font-bold">Developers</h1>

        <div className="flex items-center gap-2 rounded-full border border-[#dadada57] px-4 py-2 focus-within:border-[#8cc3de]">
          <Icon icon="mdi:search" width={15} className="text-[#868585]" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name or skill..."
            className="w-[200px] text-[12px] outline-none placeholder:text-[#868585]"
          />
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onAvailabilityChange("all")}
          className={`rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors cursor-pointer ${
            availability === "all"
              ? "bg-[#8cc3de]/30 font-semibold text-[#39738b]"
              : "text-[#868585] hover:bg-[#f2f2f2]"
          }`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => onAvailabilityChange("available")}
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors cursor-pointer ${
            availability === "available"
              ? "bg-[#8cc3de]/30 font-semibold text-[#39738b]"
              : "text-[#868585] hover:bg-[#f2f2f2]"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#119e5b]" />
          Available Now
        </button>
      </div>
    </div>
  );
}
