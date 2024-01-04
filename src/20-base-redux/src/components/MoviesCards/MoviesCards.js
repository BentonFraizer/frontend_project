import React from 'react';
import { useSelector } from 'react-redux';
import { getMovies } from '../../store/moviesSelectors/moviesSelectors';
import { MovieCard } from '../MovieCard/MovieCard';
import s from './movies__cards.module.css';

export const MoviesCards = () => {
  const movies = useSelector(getMovies);

  return (
    <div className={s.cards__wrapper}>
      {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.kinopoiskId} movieData={movie} />)}
    </div>
  );
};
