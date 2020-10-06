import { createSlice } from '@reduxjs/toolkit';

export const sessionsSlice = createSlice({
  name: 'sessions',
  initialState: {
    sessions: [],
  },
  reducers: {
    getAllSessions(state, action) {
      state.sessions = state.sessions.concat(action.payload);
    },
  },
});

export default sessionsSlice.reducer;
