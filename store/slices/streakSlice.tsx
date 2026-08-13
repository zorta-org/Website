import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StreakState {
  currentStreak: number;
  week: boolean[];
}

const initialState: StreakState = {
  currentStreak: 14,
  week: [true, true, true, true, true, false, false],
};

const streakSlice = createSlice({
  name: "streak",
  initialState,
  reducers: {
    setStreak: (state, action: PayloadAction<StreakState>) => {
      state.currentStreak = action.payload.currentStreak;
      state.week = action.payload.week;
    },
  },
});

export const { setStreak } = streakSlice.actions;

export default streakSlice.reducer;