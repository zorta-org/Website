"use client";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";
import { toggleSaved, type Resource } from "@/store/slices/resourcesSlice";
import { Icon } from "@iconify/react";

const typeStyle: Record<string, string> = {
  PDF: "bg-[#fdeee0] text-[#eea82c]",
  Video: "bg-[#e6e1fb] text-[#432bf6]",
  Article: "bg-[#dce9f8] text-[#3a8cfd]",
  Guide: "bg-[#dcf4e3] text-[#119e5b]",
};

export default function ResourceRow({ resource }: { resource: Resource }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex items-center gap-3.5 border-t border-[#dadada57] px-4 py-3.5 first:border-t-0 hover:bg-[#f9fbfc] cursor-pointer">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2f2f2] text-[#39738b]">
        <Icon icon={resource.icon} width={18} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold">{resource.title}</p>
        <p className="truncate text-[11px] text-[#868585]">
          {resource.description}
        </p>
      </div>

      <span
        className={`shrink-0 rounded-full px-2.5 py-1 text-[9.5px] font-semibold ${
          typeStyle[resource.type]
        }`}
      >
        {resource.type}
      </span>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleSaved(resource.id));
        }}
        className="shrink-0 text-[#868585] hover:text-[#39738b] cursor-pointer"
      >
        <Icon
          icon={resource.saved ? "mynaui:bookmark-solid" : "mynaui:bookmark"}
          width={17}
          className={resource.saved ? "text-[#39738b]" : ""}
        />
      </button>
    </div>
  );
}
