import { createSlice } from '@reduxjs/toolkit';

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
  },
  reducers: {
    getAllReviews(state, action) {
      state.reviews = state.reviews.concat(action.payload);
    },
  },
});

export default reviewsSlice.reducer;
