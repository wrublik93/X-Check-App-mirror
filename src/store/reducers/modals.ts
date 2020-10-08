import { createSlice } from '@reduxjs/toolkit';

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    openLogIn: false,
    openSignUp: false,
    startSpin: false,
    viewCoursesSpin: false,
    viewUsersSpin: false,
    openAddCourse: false,
    openCoursesTable: false,
    openUsersTable: false,
  },
  reducers: {
    openLogInWindow(state, action) {
      state.openLogIn = action.payload as boolean;
    },
    openSignUpWindow(state, action) {
      state.openSignUp = action.payload as boolean;
    },
    startSpin(state, action) {
      state.startSpin = action.payload as boolean;
    },
    startViewCoursesSpin(state, action) {
      state.viewCoursesSpin = action.payload as boolean;
    },
    startViewUsersSpin(state, action) {
      state.viewUsersSpin = action.payload as boolean;
    },
    openAddCourseWindow(state, action) {
      state.openAddCourse = action.payload as boolean;
    },
    openViewCoursesTable(state, action) {
      state.openCoursesTable = action.payload as boolean;
    },
    openViewUsersTable(state, action) {
      state.openUsersTable = action.payload as boolean;
    },
  },
});

export default modalsSlice.reducer;
