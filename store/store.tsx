import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authslice';
import coinsReducer from './slices/coinSlice';
import progressReducer from "./slices/progressSlice";
import streakReducer from "./slices/streakSlice";
import dailyTasksReducer from "./slices/dailyTasksSlice";
import projectsReducer from "./slices/projectsSlice";
import marketplaceReducer from "./slices/marketplaceSlice";
import tasksReducer from "./slices/tasksSlice";
import developersReducer from "./slices/developersSlice";
import communityReducer from "./slices/communitySlice";
import resourcesReducer from "./slices/resourcesSlice";
import rewardsReducer from "./slices/rewardsSlice";
import premiumReducer from "./slices/premiumSlice";
 
export const store = configureStore({
    reducer: {
        auth: authReducer,
        coins: coinsReducer,
        progress: progressReducer,
        streak: streakReducer,
        dailyTasks: dailyTasksReducer,
        projects: projectsReducer,
        marketplace: marketplaceReducer,
        tasks: tasksReducer,
        developers: developersReducer,
        community: communityReducer,
        resources: resourcesReducer,
        rewards: rewardsReducer,
        premium: premiumReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;