import React from 'react';
import s from './modal.module.scss';

export const Modal = ({ close, description }) => {
  return (
    <div className={s.modal}>
      <div className={s.modal__content}>
        <h4 className={s.modal__title}>Подробнее о товаре:</h4>
        <div className={s.modal__description}>{description.description}</div>
        <div className={s.modal__img}>
          <img src={description.img} alt={description.description} />
        </div>
        <button className={s.modal__close_btn} onClick={() => close()}>
          Закрыть
        </button>
      </div>
    </div>
  );
};
