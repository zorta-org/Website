"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import type { ResourceCategory } from "@/store/slices/resourcesSlice";
import { Icon } from "@iconify/react";
import CategoryTiles from "./categoryTiles";
import ResourcesList from "./resourcesList";

export default function Main() {
  const resources = useSelector(
    (state: RootState) => state.resources.resources
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ResourceCategory | "All">("All");

  const counts = useMemo(() => {
    return {
      Docs: resources.filter((r) => r.category === "Docs").length,
      Guides: resources.filter((r) => r.category === "Guides").length,
      Templates: resources.filter((r) => r.category === "Templates").length,
    };
  }, [resources]);

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();

    return resources.filter((r) => {
      const matchesCategory = category === "All" || r.category === category;
      const matchesSearch =
        query === "" || r.title.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [resources, search, category]);

  return (
    <div className="mx-auto flex w-[95%] max-w-[1450px] flex-col gap-6 py-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[26px] font-bold">Resources</h1>

        <div className="flex items-center gap-2 rounded-full border border-[#dadada57] px-4 py-2 focus-within:border-[#8cc3de]">
          <Icon icon="mdi:search" width={15} className="text-[#868585]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search resources..."
            className="w-[180px] text-[12px] outline-none placeholder:text-[#868585]"
          />
        </div>
      </div>

      <CategoryTiles active={category} counts={counts} onSelect={setCategory} />

      <ResourcesList resources={filteredResources} />
    </div>
  );
}
