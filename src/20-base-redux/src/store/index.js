import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  devTools: true,
});

export default store;
