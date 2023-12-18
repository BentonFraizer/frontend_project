import React from 'react';
import s from './header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={s.header}>
      <h1>16 routes</h1>
      <div className={s.menu}>
        <Link to="/">Главная страница</Link>
        <Link to="/catalog">Каталог</Link>
      </div>
    </header>
  );
};
