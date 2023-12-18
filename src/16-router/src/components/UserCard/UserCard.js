import React from 'react';
import s from './user-card.module.css';
import { Link } from 'react-router-dom';

export const UserCard = ({ id, name, username }) => {
  return (
    <div className={s.user__card}>
      <div className={s.user__main_info}>
        <div className={s.name}>Name: {name}</div>
        <div className={s.username}>Username: {username}</div>
        <div className={s.user__avatar}>
          <img src="https://i.pravatar.cc/200" alt="user avatar" />
        </div>
      </div>

      <Link to={`/catalog/${id}`}>More info</Link>
    </div>
  );
};
