import { createSlice } from '@reduxjs/toolkit';

export const reviewsSlice = createSlice({
  name: 'users',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementReviews(state) {
      state.count += 1;
    },
  },
});

export default reviewsSlice.reducer;
