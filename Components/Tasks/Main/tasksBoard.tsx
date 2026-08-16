import type { Task, TaskStatus } from "@/store/slices/tasksSlice";
import TaskCard from "./taskCard";

interface Column {
  id: TaskStatus;
  label: string;
  dotColor: string;
}

const columns: Column[] = [
  { id: "open", label: "Open", dotColor: "#868585" },
  { id: "in_progress", label: "In Progress", dotColor: "#eea82c" },
  { id: "done", label: "Done", dotColor: "#119e5b" },
];

export default function TasksBoard({ tasks }: { tasks: Task[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {columns.map((column) => {
        const columnTasks = tasks.filter((t) => t.status === column.id);

        return (
          <div key={column.id} className="flex flex-col gap-3">
            <div className="flex items-center gap-2 px-1">
              <span
                style={{ backgroundColor: column.dotColor }}
                className="h-1.5 w-1.5 rounded-full"
              />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[#868585]">
                {column.label}
              </span>
              <span className="text-[11px] font-semibold text-[#868585]">
                {columnTasks.length}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {columnTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}

              {columnTasks.length === 0 && (
                <div className="rounded-xl border border-dashed border-[#dadada] py-8 text-center text-[11px] text-[#868585]">
                  No tasks here
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
