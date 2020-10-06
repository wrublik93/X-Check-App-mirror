import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    getAllTasks(state, action) {
      state.tasks = state.tasks.concat(action.payload);
    },
  },
});

export default tasksSlice.reducer;
