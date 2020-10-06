import { createSlice } from '@reduxjs/toolkit';

export const rolesSlice = createSlice({
  name: 'roles',
  initialState: {
    roles: [],
  },
  reducers: {
    getAllRoles(state, action) {
      state.roles = state.roles.concat(action.payload);
    },
  },
});

export default rolesSlice.reducer;
