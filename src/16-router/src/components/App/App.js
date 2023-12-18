import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from '../../pages/MainPage/MainPage';
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage';
import { Header } from '../Header/Header';
import { UserCardPage } from '../../pages/UserCardPage/UserCardPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/catalog/:id" element={<UserCardPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
