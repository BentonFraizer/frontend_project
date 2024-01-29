import './App.css';
import uniqueId from 'lodash/uniqueId';

function App() {
  const firstUniqueId = uniqueId('item-');
  const secondUniqueId = uniqueId('item-');

  return (
    <div className="app">
      <header className="header">
        <div className="items">
          <div className={`${firstUniqueId}`}>
            <div className={`${firstUniqueId}__img`}>
              <img src="https://source.unsplash.com/random/200x200" alt="random view" />
            </div>
            <p className={`${firstUniqueId}__description`}>Это описание первого товара</p>
            <a className={`${firstUniqueId}__link`} href="https://google.com" target="_blank" rel="noopener noreferrer">
              Подробнее
            </a>
            <button className={`${firstUniqueId}__btn`}>Купить</button>
          </div>

          <div className={`${secondUniqueId}`}>
            <div className={`${secondUniqueId}__img`}>
              <img src="https://source.unsplash.com/random/200x200" alt="random view" />
            </div>
            <p className={`${secondUniqueId}__description`}>Это описание второго товара</p>
            <a className={`${secondUniqueId}__link`} href="https://google.com" target="_blank" rel="noopener noreferrer">
              Подробнее
            </a>
            <button className={`${firstUniqueId}__btn`}>Купить</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
