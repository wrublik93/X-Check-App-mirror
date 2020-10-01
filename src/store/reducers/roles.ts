import { createSlice } from '@reduxjs/toolkit';

export const rolesSlice = createSlice({
  name: 'roles',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementRoles(state) {
      state.count += 1;
    },
  },
});

export default rolesSlice.reducer;
