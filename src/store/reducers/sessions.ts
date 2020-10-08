import { createSlice } from '@reduxjs/toolkit';

export const sessionsSlice = createSlice({
  name: 'sessions',
  initialState: {
    sessions: [],
  },
  reducers: {
    getAllSessions(state, action) {
      const arraySessions: [] = [];
      state.sessions = arraySessions.concat(action.payload);
    },
  },
});

export default sessionsSlice.reducer;
