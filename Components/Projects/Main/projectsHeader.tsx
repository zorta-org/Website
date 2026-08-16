import { Icon } from "@iconify/react";

export type ProjectFilter = "all" | "active" | "archived";

interface ProjectsHeaderProps {
  filter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
  onNewProject: () => void;
}

const tabs: { key: ProjectFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "archived", label: "Archived" },
];

export default function ProjectsHeader({
  filter,
  onFilterChange,
  onNewProject,
}: ProjectsHeaderProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Title + New Project */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[26px] font-bold">Projects</h1>

        <button
          type="button"
          onClick={onNewProject}
          className="flex items-center gap-1.5 rounded-full bg-[#39738b] px-5 py-2.5 text-[12px] font-semibold text-white hover:bg-[#2a6077] cursor-pointer"
        >
          <Icon icon="mdi:plus" width={15} />
          New Project
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1.5">
        {tabs.map((tab) => {
          const isActive = filter === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onFilterChange(tab.key)}
              className={`rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors cursor-pointer ${
                isActive
                  ? "bg-[#8cc3de]/30 font-semibold text-[#39738b]"
                  : "text-[#868585] hover:bg-[#f2f2f2]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
