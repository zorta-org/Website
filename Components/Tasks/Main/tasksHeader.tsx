import { Icon } from "@iconify/react";

export type TasksView = "board" | "list";

interface TasksHeaderProps {
  view: TasksView;
  onViewChange: (view: TasksView) => void;
}

export default function TasksHeader({ view, onViewChange }: TasksHeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-[26px] font-bold">Tasks</h1>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-full border border-[#dadada57] p-1">
          <button
            type="button"
            onClick={() => onViewChange("board")}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors cursor-pointer ${
              view === "board"
                ? "bg-[#8cc3de]/30 text-[#39738b]"
                : "text-[#868585] hover:bg-[#f2f2f2]"
            }`}
          >
            <Icon icon="mage:board" width={14} />
          </button>
          <button
            type="button"
            onClick={() => onViewChange("list")}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors cursor-pointer ${
              view === "list"
                ? "bg-[#8cc3de]/30 text-[#39738b]"
                : "text-[#868585] hover:bg-[#f2f2f2]"
            }`}
          >
            <Icon icon="mynaui:list" width={16} />
          </button>
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full bg-[#39738b] px-5 py-2.5 text-[12px] font-semibold text-white hover:bg-[#2a6077] cursor-pointer"
        >
          <Icon icon="mdi:plus" width={15} />
          Post a Task
        </button>
      </div>
    </div>
  );
}
