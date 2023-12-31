import { Provider } from 'react-redux';
import store from '../../store/index';
import './App.css';
import { MainPage } from '../pages/MainPage/MainPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
