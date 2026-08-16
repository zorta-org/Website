import { Icon } from "@iconify/react";
import type { Resource } from "@/store/slices/resourcesSlice";
import ResourceRow from "./resourceRow";

export default function ResourcesList({
  resources,
}: {
  resources: Resource[];
}) {
  if (resources.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#dadada] py-16 text-center">
        <Icon icon="lucide:search-x" width={22} className="text-[#868585]" />
        <p className="text-[13px] font-semibold">No resources found</p>
        <p className="text-[11px] text-[#868585]">
          Try a different search term or category.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded-xl border border-[#dadada57] bg-white overflow-hidden">
      {resources.map((resource) => (
        <ResourceRow key={resource.id} resource={resource} />
      ))}
    </div>
  );
}
