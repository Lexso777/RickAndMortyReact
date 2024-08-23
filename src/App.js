import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CharactersPage from './components/CharactersPage/CharactersPage';
import Header from "./components/Header/Header"
import CharactersDetailPage from './components/Characters-detailPage/CharactersDetailPage';
import LocationsPage from './components/LocationsPage/LocationsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path='/' element={<CharactersPage />} />
            <Route path='/characters' element={<CharactersPage />} />
            <Route path='/characters-detail/:id' element={<CharactersDetailPage />} />

            <Route path='/locations' element={<LocationsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
