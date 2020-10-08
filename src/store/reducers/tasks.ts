import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    getAllTasks(state, action) {
      const arrayTasks: [] = [];
      state.tasks = arrayTasks.concat(action.payload);
    },
  },
});

export default tasksSlice.reducer;
