import { createSlice } from '@reduxjs/toolkit';

export const sessionsSlice = createSlice({
  name: 'sessions',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementSessions(state) {
      state.count += 1;
    },
  },
});

export default sessionsSlice.reducer;
