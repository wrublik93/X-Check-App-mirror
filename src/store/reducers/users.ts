import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementUsers(state) {
      state.count += 1;
    },
  },
});

export default usersSlice.reducer;
