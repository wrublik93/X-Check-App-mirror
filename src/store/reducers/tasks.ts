import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementTasks(state) {
      state.count += 1;
    },
  },
});

export default tasksSlice.reducer;
