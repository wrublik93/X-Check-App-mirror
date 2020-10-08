import { createSlice } from '@reduxjs/toolkit';

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
  },
  reducers: {
    getAllReviews(state, action) {
      const arrayCReviews: [] = [];
      state.reviews = arrayCReviews.concat(action.payload);
    },
  },
});

export default reviewsSlice.reducer;
