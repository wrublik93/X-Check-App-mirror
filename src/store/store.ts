import { combineReducers, configureStore } from '@reduxjs/toolkit';

import taskSliceReducer from '@/store/reducers/task';
import userSliceReducer from '@/store/reducers/user';

const rootReducer = combineReducers({
  user: userSliceReducer,
  task: taskSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
