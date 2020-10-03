import { createSlice } from '@reduxjs/toolkit';

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    openLogIn: false,
    openSignUp: false,
  },
  reducers: {
    openLogInWindow(state) {
      state.openLogIn = !state.openLogIn;
    },
    openSignUpWindow(state) {
      state.openSignUp = !state.openSignUp;
    },
  },
});

export default modalsSlice.reducer;
