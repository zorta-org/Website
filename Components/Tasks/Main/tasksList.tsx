import { Icon } from "@iconify/react";
import type { Task, TaskStatus } from "@/store/slices/tasksSlice";

const statusLabel: Record<TaskStatus, string> = {
  open: "Open",
  in_progress: "In Progress",
  done: "Done",
};

const statusStyle: Record<TaskStatus, string> = {
  open: "bg-[#f2f2f2] text-[#868585]",
  in_progress: "bg-[#fdeee0] text-[#eea82c]",
  done: "bg-[#dcf4e3] text-[#119e5b]",
};

export default function TasksList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="flex flex-col rounded-xl border border-[#dadada57] overflow-hidden">
      {tasks.map((task, i) => (
        <div
          key={task.id}
          className={`flex items-center gap-3 px-4 py-3.5 cursor-pointer hover:bg-[#f9fbfc] ${
            i !== 0 ? "border-t border-[#dadada57]" : ""
          }`}
        >
          <div
            style={{ backgroundColor: task.assigneeColor }}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white"
          >
            {task.assigneeInitial}
          </div>

          <p className="min-w-0 flex-1 truncate text-[13px] font-medium">
            {task.title}
          </p>

          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-[9.5px] font-semibold ${
              statusStyle[task.status]
            }`}
          >
            {statusLabel[task.status]}
          </span>

          <span className="shrink-0 text-[10.5px] text-[#868585] w-[52px] text-right">
            {task.dueDate}
          </span>

          <div className="flex shrink-0 items-center gap-1 w-[54px] justify-end">
            <Icon icon="twemoji:coin" width={13} />
            <span className="text-[11px] font-bold text-[#363636]">
              {task.reward}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
