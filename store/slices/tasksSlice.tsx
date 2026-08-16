import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskStatus = "open" | "in_progress" | "done";

export interface Task {
  id: number;
  title: string;
  reward: number;
  assigneeInitial: string;
  assigneeColor: string;
  dueDate: string;
  status: TaskStatus;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  // TEMPORARY — remove when backend is connected
  tasks: [
    {
      id: 1,
      title: "Design onboarding flow",
      reward: 120,
      assigneeInitial: "A",
      assigneeColor: "#432bf6",
      dueDate: "Aug 20",
      status: "open",
    },
    {
      id: 2,
      title: "Fix mobile nav overflow bug",
      reward: 60,
      assigneeInitial: "R",
      assigneeColor: "#3a8cfd",
      dueDate: "Aug 18",
      status: "open",
    },
    {
      id: 3,
      title: "Write API docs for Bazaar",
      reward: 90,
      assigneeInitial: "K",
      assigneeColor: "#119e5b",
      dueDate: "Aug 19",
      status: "in_progress",
    },
    {
      id: 4,
      title: "Review Discord bot PR",
      reward: 40,
      assigneeInitial: "M",
      assigneeColor: "#eea82c",
      dueDate: "Aug 17",
      status: "in_progress",
    },
    {
      id: 5,
      title: "Set up CI pipeline",
      reward: 150,
      assigneeInitial: "A",
      assigneeColor: "#432bf6",
      dueDate: "Aug 14",
      status: "done",
    },
    {
      id: 6,
      title: "Ship landing page copy",
      reward: 75,
      assigneeInitial: "R",
      assigneeColor: "#3a8cfd",
      dueDate: "Aug 12",
      status: "done",
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    moveTask: (
      state,
      action: PayloadAction<{ id: number; status: TaskStatus }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },

    // Will be useful when backend data arrives
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { moveTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
