import { alertsSlice } from '@/store/reducers/alerts';

export const {
  changeSuccessAlert,
  changeSuccessText,
  changeErrorAlert,
  changeErrorText,
  changeInfoAlert,
  changeWarningAlert,
} = alertsSlice.actions;
