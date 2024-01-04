import React, { useEffect } from 'react';
import { Header } from '../../Header/Header';
import movies from '../../../movies.json';
import { addMovies } from '../../../store/moviesSlice/moviesSlice';
import { useDispatch } from 'react-redux';
import { MoviesCards } from '../../MoviesCards/MoviesCards';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addMovies(movies));
  }, [dispatch]);

  return (
    <>
      <Header />
      <h3>Фильмы</h3>
      <MoviesCards />
    </>
  );
};
