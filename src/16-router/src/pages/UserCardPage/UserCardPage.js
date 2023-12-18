import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './user-card.module.css';

export const UserCardPage = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState([]);
  const { name, username, phone, website, email } = userData;
  console.log('userData', userData);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className={s.user__card_wrapper}>
      <h3 className={s.title}>Это карточка с данными пользователя, имеющего идентификатор №{id}</h3>
      <div className={s.small__wrapper}>
        <div>
          <div>
            <span>Имя: </span>
            {name}
          </div>
          <div>
            <span>Никнейм: </span>
            {username}
          </div>
          <div>
            <span>Номер телефона: </span>
            {phone}
          </div>
          <div>
            <span>Личная страница: </span>
            {website}
          </div>
          <div>
            <span>Электронная почта: </span>
            {email}
          </div>
        </div>
      </div>
    </div>
  );
};
