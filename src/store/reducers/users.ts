import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    count: 0,
    users: [],
  },
  reducers: {
    incrementUsers(state) {
      state.count += 1;
    },
    getUsersAction(state, action) {
      state.users = state.users.concat(action.payload);
    },
  },
});

export default usersSlice.reducer;
