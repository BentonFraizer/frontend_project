import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      descriptionOfFirstGood: 'This is description of first good',
      descriptionOfSecondGood: 'This is description of second good',
      moreInfo: 'More info',
      toBuy: 'Buy',
      changeLanguageRu: 'RU',
      changeLanguageEn: 'EN',
    },
  },
  ru: {
    translation: {
      descriptionOfFirstGood: 'Это описание первого товара',
      descriptionOfSecondGood: 'Это описание второго товара',
      moreInfo: 'Подробнее',
      toBuy: 'Купить',
      changeLanguageRu: 'РУ',
      changeLanguageEn: 'АНГЛ',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
});

export default i18n;
