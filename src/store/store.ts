import { combineReducers, configureStore } from '@reduxjs/toolkit';

import coursesSliceReducer from '@/store/reducers/courses';
import modalsSliceReducer from '@/store/reducers/modals';
import reviewsSliceReducer from '@/store/reducers/reviews';
import rolesSliceReducer from '@/store/reducers/roles';
import sessionsSliceReducer from '@/store/reducers/sessions';
import tasksSliceReducer from '@/store/reducers/tasks';
import usersSliceReducer from '@/store/reducers/users';

const rootReducer = combineReducers({
  users: usersSliceReducer,
  courses: coursesSliceReducer,
  roles: rolesSliceReducer,
  sessions: sessionsSliceReducer,
  tasks: tasksSliceReducer,
  reviews: reviewsSliceReducer,
  modals: modalsSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
