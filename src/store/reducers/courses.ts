import { createSlice } from '@reduxjs/toolkit';

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
  },
  reducers: {
    getAllCourses(state, action) {
      state.courses = state.courses.concat(action.payload);
    },
  },
});

export default coursesSlice.reducer;
