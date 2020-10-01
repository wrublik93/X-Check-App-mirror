import { createSlice } from '@reduxjs/toolkit';

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCourses(state) {
      state.count += 1;
    },
  },
});

export default coursesSlice.reducer;
