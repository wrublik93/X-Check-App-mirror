import { createSlice } from '@reduxjs/toolkit';

import { User } from '@/types/entities';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userCurrent: {},
    users: [],
  },
  reducers: {
    getCurrentUser(state, action) {
      state.userCurrent = { ...(action.payload as User) };
    },
    getAllUsers(state, action) {
      state.users = state.users.concat(action.payload);
    },
  },
});

export default usersSlice.reducer;
