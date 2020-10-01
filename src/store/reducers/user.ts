import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    count: 0,
    users: [],
  },
  reducers: {
    incrementUser(state) {
      state.count += 1;
    },
  },
});

export default userSlice.reducer;
