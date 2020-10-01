import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementTask(state) {
      state.count += 1;
    },
  },
});

export default taskSlice.reducer;
