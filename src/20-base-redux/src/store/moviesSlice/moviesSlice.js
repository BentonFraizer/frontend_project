import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    addMovies: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
