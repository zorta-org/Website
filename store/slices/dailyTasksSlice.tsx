import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DailyTask {
  id: string;
  title: string;
  reward: number;
  completed: boolean;
  repeatable: boolean;
  type: "LOGIN" | "MARKETPLACE" | "COMPLETE_TASK" | "REFER";
}

interface DailyTasksState {
  tasks: DailyTask[];
  resetAt: string;
}

const initialState: DailyTasksState = {
  // TEMPORARY — remove when backend is connected
  resetAt: "2026-08-13T00:00:00+05:00",

  tasks: [
    {
      id: "TASK_LOGIN",
      title: "Login to Zorta",
      reward: 10,
      completed: true,
      repeatable: true,
      type: "LOGIN",
    },
    {
      id: "TASK_MARKETPLACE",
      title: "Visit Marketplace",
      reward: 15,
      completed: true,
      repeatable: true,
      type: "MARKETPLACE",
    },
    {
      id: "TASK_COMPLETE",
      title: "Complete a Task",
      reward: 25,
      completed: false,
      repeatable: true,
      type: "COMPLETE_TASK",
    },
    {
      id: "TASK_REFER",
      title: "Refer a Friend",
      reward: 50,
      completed: false,
      repeatable: false,
      type: "REFER",
    },
  ],
};

const dailyTasksSlice = createSlice({
  name: "dailyTasks",
  initialState,
  reducers: {
    // TEMP ONLY
    demoCompleteTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(
        (task) => task.id === action.payload
      );

      if (task) {
        task.completed = true;
      }
    },

    // Will be useful when backend data arrives
    setDailyTasks: (
      state,
      action: PayloadAction<DailyTasksState>
    ) => {
      state.tasks = action.payload.tasks;
      state.resetAt = action.payload.resetAt;
    },
  },
});

export const {
  demoCompleteTask,
  setDailyTasks,
} = dailyTasksSlice.actions;

export default dailyTasksSlice.reducer;