import { Icon } from "@iconify/react";
import type { Developer } from "@/store/slices/developersSlice";
import DeveloperCard from "./developerCard";

export default function DevelopersGrid({
  developers,
}: {
  developers: Developer[];
}) {
  if (developers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#dadada] py-20 text-center">
        <Icon icon="mage:users" width={24} className="text-[#868585]" />
        <p className="text-[13px] font-semibold">No developers found</p>
        <p className="text-[11px] text-[#868585]">
          Try a different search term or filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {developers.map((developer) => (
        <DeveloperCard key={developer.id} developer={developer} />
      ))}
    </div>
  );
}
