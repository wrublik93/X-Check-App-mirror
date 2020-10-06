import { createSlice } from '@reduxjs/toolkit';

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState: {
    successAlert: false,
    successText: '',
    errorAlert: false,
    errorText: '',
    warningAlert: false,
    warningText: '',
    infoAlert: false,
    infoText: '',
  },
  reducers: {
    changeSuccessAlert(state, action) {
      state.successAlert = action.payload as boolean;
    },
    changeSuccessText(state, action) {
      state.successText = action.payload as string;
    },
    changeErrorAlert(state, action) {
      state.errorAlert = action.payload as boolean;
    },
    changeErrorText(state, action) {
      state.errorText = action.payload as string;
    },
    changeWarningAlert(state, action) {
      state.warningAlert = action.payload as boolean;
    },
    changeWarningText(state, action) {
      state.warningText = action.payload as string;
    },
    changeInfoAlert(state, action) {
      state.infoAlert = action.payload as boolean;
    },
    changeInfoText(state, action) {
      state.infoText = action.payload as string;
    },
  },
});

export default alertsSlice.reducer;
