import React from 'react';
import './header.css';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageToEN = () => {
    i18n.changeLanguage('en');
  };

  const changeLanguageToRU = () => {
    i18n.changeLanguage('ru');
  };

  return (
    <header className="header">
      <button className="en-btn" onClick={changeLanguageToEN}>
        {t('changeLanguageEn')}
      </button>
      <button className="ru-btn" onClick={changeLanguageToRU}>
        {t('changeLanguageRu')}
      </button>
    </header>
  );
};
