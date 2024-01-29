import './App.css';
import uniqueId from 'lodash/uniqueId';
import { Header } from './components/Header/Header.tsx';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

function App() {
  // если не использовать хук useMemo, при повторном рендеринге функции uniqueId вызываются повторно
  // соответственно изменяются значения и слетают стили
  const firstUniqueId = useMemo(() => uniqueId('item-'), []);
  const secondUniqueId = useMemo(() => uniqueId('item-'), []);
  // const firstUniqueId = uniqueId('item-');
  // const secondUniqueId = uniqueId('item-');

  const { t } = useTranslation();

  return (
    <div className="app">
      <Header />
      <div className="body">
        <div className="items">
          <div className={`${firstUniqueId}`}>
            <div className={`${firstUniqueId}__img`}>
              <img src="https://source.unsplash.com/random/200x200" alt="random view" />
            </div>
            <p className={`${firstUniqueId}__description`}>{t('descriptionOfFirstGood')}</p>
            <a className={`${firstUniqueId}__link`} href="https://google.com" target="_blank" rel="noopener noreferrer">
              {t('moreInfo')}
            </a>
            <button className={`${firstUniqueId}__btn`}>{t('toBuy')}</button>
          </div>

          <div className={`${secondUniqueId}`}>
            <div className={`${secondUniqueId}__img`}>
              <img src="https://source.unsplash.com/random/200x200" alt="random view" />
            </div>
            <p className={`${secondUniqueId}__description`}>{t('descriptionOfSecondGood')}</p>
            <a className={`${secondUniqueId}__link`} href="https://google.com" target="_blank" rel="noopener noreferrer">
              {t('moreInfo')}
            </a>
            <button className={`${firstUniqueId}__btn`}>{t('toBuy')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
