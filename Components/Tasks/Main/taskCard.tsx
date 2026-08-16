import { Icon } from "@iconify/react";
import type { Task } from "@/store/slices/tasksSlice";

export default function TaskCard({ task }: { task: Task }) {
  const { title, reward, assigneeInitial, assigneeColor, dueDate } = task;

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[#dadada57] bg-white p-3.5 cursor-pointer hover:border-[#6aa9c1] transition-colors">
      <p className="text-[13px] font-semibold leading-snug">{title}</p>

      <div className="flex items-center gap-1">
        <Icon icon="twemoji:coin" width={13} />
        <span className="text-[11.5px] font-bold text-[#363636]">
          {reward}
        </span>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#dadada57]">
        <div
          style={{ backgroundColor: assigneeColor }}
          className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-semibold text-white"
        >
          {assigneeInitial}
        </div>
        <span className="text-[10px] text-[#868585]">{dueDate}</span>
      </div>
    </div>
  );
}
