import { Icon } from "@iconify/react";
import type { ResourceCategory } from "@/store/slices/resourcesSlice";

interface Tile {
  id: ResourceCategory;
  label: string;
  icon: string;
  bg: string;
  color: string;
}

const tiles: Tile[] = [
  { id: "Docs", label: "Docs", icon: "lucide:file-text", bg: "#dce9f8", color: "#3a8cfd" },
  { id: "Guides", label: "Guides", icon: "lucide:compass", bg: "#dcf4e3", color: "#119e5b" },
  { id: "Templates", label: "Templates", icon: "lucide:layout-template", bg: "#e6e1fb", color: "#432bf6" },
];

interface CategoryTilesProps {
  active: ResourceCategory | "All";
  counts: Record<ResourceCategory, number>;
  onSelect: (category: ResourceCategory | "All") => void;
}

export default function CategoryTiles({
  active,
  counts,
  onSelect,
}: CategoryTilesProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {tiles.map((tile) => {
        const isActive = active === tile.id;

        return (
          <button
            key={tile.id}
            type="button"
            onClick={() => onSelect(isActive ? "All" : tile.id)}
            className={`flex flex-col items-center gap-2.5 rounded-xl border bg-white py-6 transition-colors cursor-pointer ${
              isActive
                ? "border-[#6aa9c1]"
                : "border-[#dadada57] hover:border-[#6aa9c1]"
            }`}
          >
            <div
              style={{ backgroundColor: tile.bg, color: tile.color }}
              className="flex h-12 w-12 items-center justify-center rounded-full"
            >
              <Icon icon={tile.icon} width={22} />
            </div>
            <p className="text-[14px] font-semibold">{tile.label}</p>
            <p className="text-[10.5px] text-[#868585]">
              {counts[tile.id]} resources
            </p>
          </button>
        );
      })}
    </div>
  );
}
