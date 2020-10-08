import { createSlice } from '@reduxjs/toolkit';

export const rolesSlice = createSlice({
  name: 'roles',
  initialState: {
    roles: [],
  },
  reducers: {
    getAllRoles(state, action) {
      const arrayRoles: [] = [];
      state.roles = arrayRoles.concat(action.payload);
    },
  },
});

export default rolesSlice.reducer;
