import { combineReducers, configureStore } from '@reduxjs/toolkit';

import alertsSliceReducer from '@/store/reducers/alerts';
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
  alerts: alertsSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  preloadedState: localStorage['x-check-app-redux']
    ? JSON.parse(localStorage['x-check-app-redux'])
    : {},
});

store.subscribe(() => {
  localStorage['x-check-app-redux'] = JSON.stringify(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
