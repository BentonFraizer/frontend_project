import React from 'react';
import s from './card.module.scss';

export const Card = ({ card, open, setDescription }) => {
  const { id, img, rating, price, description, discount } = card;

  const handleOpenBtnClick = () => {
    open();
    setDescription(card);
  };

  return (
    <div className={s.card}>
      <div className={s.card__image}>
        <img src={img} alt={`rand pict ${id}`} />
      </div>
      <div className={s.card__info}>
        <div className={s.rating}>
          <div className={s.rating__stars}>
            <ul>
              <li>
                <img
                  src="https://gallery.retailrocket.net/5ba1feda97a5252320437f20/star.2.26fe6451.svg"
                  width="12"
                  height="12"
                  alt=""
                  aria-hidden="true"
                />
              </li>
              <li>
                <img
                  src="https://gallery.retailrocket.net/5ba1feda97a5252320437f20/star.2.26fe6451.svg"
                  width="12"
                  height="12"
                  alt=""
                  aria-hidden="true"
                />
              </li>
              <li>
                <img
                  src="https://gallery.retailrocket.net/5ba1feda97a5252320437f20/star.2.26fe6451.svg"
                  width="12"
                  height="12"
                  alt=""
                  aria-hidden="true"
                />
              </li>
              <li>
                <img
                  src="https://gallery.retailrocket.net/5ba1feda97a5252320437f20/star.2.26fe6451.svg"
                  width="12"
                  height="12"
                  alt=""
                  aria-hidden="true"
                />
              </li>
              <li>
                <img
                  src="https://gallery.retailrocket.net/5ba1feda97a5252320437f20/star.2.26fe6451.svg"
                  width="12"
                  height="12"
                  alt=""
                  aria-hidden="true"
                />
              </li>
            </ul>
          </div>
          <div className={s.rating__reviews}>{rating} Отзывов</div>
        </div>
        <div className={s.description}>{description}</div>
      </div>
      <div className={s.price}>
        <div className={s.price__wrapper}>
          <div className={s.price__discount}>
            {discount !== 0 && (
              <>
                <div className={s.old}>{price} р.</div>
                <div className={s.discount}>-{discount}</div>
              </>
            )}
          </div>
          <div className={s.price__current}>{price - discount} р.</div>
        </div>
        <div className={s.price__basket}>
          <img src="https://static.eldorado.ru/images/icon_svg/add.svg" alt="basket image" />
        </div>
      </div>
      <button className={s.info__btn} onClick={handleOpenBtnClick}>
        Подробнее
      </button>
    </div>
  );
};
