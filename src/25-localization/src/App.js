import './App.css';
import uniqueId from 'lodash/uniqueId';

function App() {
  const firstUniqueId = uniqueId();
  const secondUniqueId = uniqueId();

  return (
    <div className="app">
      <header className="header">
        <div className="items">
          <div className={`item-${firstUniqueId}`}>
            <div className={`item-${firstUniqueId}__img`}>
              <img src="https://source.unsplash.com/random/200x200" alt="random view" />
            </div>
            <p className={`item-${firstUniqueId}__description`}>Это описание первого товара</p>
            <a className={`item-${firstUniqueId}__link`} href="https://google.com" target="_blank" rel="noopener noreferrer">
              Подробнее
            </a>
          </div>

          <div className={`item-${secondUniqueId}`}>
            <div className={`item-${secondUniqueId}__img`}>
              <img src="https://source.unsplash.com/random/200x200" alt="random view" />
            </div>
            <p className={`item-${secondUniqueId}__description`}>Это описание второго товара</p>
            <a className={`item-${secondUniqueId}__link`} href="https://google.com" target="_blank" rel="noopener noreferrer">
              Подробнее
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
