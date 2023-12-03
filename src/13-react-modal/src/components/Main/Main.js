import React, { useState } from 'react';
import data from '../../mocks';
import s from './main.module.scss';
import { Card } from '../Card/Card';
import { Modal } from '../Modal/Modal';

export const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState('');

  const onOpenBtnClick = () => {
    setIsModalOpen(true);
  };

  const onCloseBtnClick = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={s.main}>
      <div className={s.layout}>
        <div className={s.cards}>
          {data.map((card) => (
            <Card card={card} key={card.id} open={onOpenBtnClick} setDescription={setDescription} />
          ))}
        </div>
      </div>

      {isModalOpen && <Modal close={onCloseBtnClick} description={description} />}
    </main>
  );
};
