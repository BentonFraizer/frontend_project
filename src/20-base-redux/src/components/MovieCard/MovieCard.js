import React from 'react';
import s from './movie__card.module.css';

export const MovieCard = ({ movieData }) => {
  const { nameRu, nameEn, posterUrl, year, genres, ratingKinopoisk, ratingImdb } = movieData;
  const [genre] = genres;

  return (
    <div className={s.card}>
      <div className={s.left}>
        <div className={s.poster__img}>
          <img src={posterUrl} alt="Изображение постера" />
        </div>
      </div>
      <div className={s.middle}>
        <div>
          Название фильма на русском: <b>{nameRu}</b>
        </div>
        <div>
          Название фильма на английском: <b>{nameEn}</b>
        </div>
      </div>
      <div className={s.right}>
        <div>
          Год выпуска: <b>{year}</b>
        </div>
        <div>
          Жанр: <b>{genre.genre}</b>
        </div>
        <div>
          Рейтинг Кинопоиск: <b>{ratingKinopoisk}</b>
        </div>
        <div>
          Рейтинг IMDB: <b>{ratingImdb}</b>
        </div>
      </div>
    </div>
  );
};
