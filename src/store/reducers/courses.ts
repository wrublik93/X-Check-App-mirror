import { createSlice } from '@reduxjs/toolkit';

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
  },
  reducers: {
    getAllCourses(state, action) {
      const arrayCourses: [] = [];
      state.courses = arrayCourses.concat(action.payload);
    },
  },
});

export default coursesSlice.reducer;
