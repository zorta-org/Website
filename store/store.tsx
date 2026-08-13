import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authslice';
import coinsReducer from './slices/coinSlice';
import progressReducer from "./slices/progressSlice";
import streakReducer from "./slices/streakSlice";
import dailyTasksReducer from "./slices/dailyTasksSlice";
 
export const store = configureStore({
    reducer: {
        auth: authReducer,
        coins: coinsReducer,
        progress: progressReducer,
        streak: streakReducer,
        dailyTasks: dailyTasksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;