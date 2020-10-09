import { modalsSlice } from '@/store/reducers/modals';

export const {
  openLogInWindow,
  openSignUpWindow,
  startSpin,
  openAddCourseWindow,
  openAddTaskWindow,
  openViewCoursesTable,
  startViewCoursesSpin,
  startViewUsersSpin,
  openViewUsersTable,
  openAddCriterionWindow,
  startAddCriterionSpin,
} = modalsSlice.actions;
