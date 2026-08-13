import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProgressState {
  level: number;
  xp: number;
  xpRequired: number;
}

const initialState: ProgressState = {
  level: 27,
  xp: 8450,
  xpRequired: 12000,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setProgress: (state, action: PayloadAction<ProgressState>) => {
      state.level = action.payload.level;
      state.xp = action.payload.xp;
      state.xpRequired = action.payload.xpRequired;
    },
  },
});

export const { setProgress } = progressSlice.actions;

export default progressSlice.reducer;