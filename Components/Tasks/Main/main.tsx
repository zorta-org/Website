"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import TasksHeader, { type TasksView } from "./tasksHeader";
import TasksBoard from "./tasksBoard";
import TasksList from "./tasksList";

export default function Main() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [view, setView] = useState<TasksView>("board");

  return (
    <div className="mx-auto flex w-[95%] max-w-[1450px] flex-col gap-6 py-9">
      <TasksHeader view={view} onViewChange={setView} />

      {view === "board" ? (
        <TasksBoard tasks={tasks} />
      ) : (
        <TasksList tasks={tasks} />
      )}
    </div>
  );
}
