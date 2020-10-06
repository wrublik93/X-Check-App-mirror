import { createSlice } from '@reduxjs/toolkit';

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    openLogIn: false,
    openSignUp: false,
    startSpin: false,
  },
  reducers: {
    openLogInWindow(state, action) {
      state.openLogIn = action.payload as boolean;
    },
    openSignUpWindow(state, action) {
      state.openSignUp = action.payload as boolean;
    },
    startSpin(state, action) {
      state.startSpin = action.payload as boolean;
    },
  },
});

export default modalsSlice.reducer;
