import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CharactersPage from './components/CharactersPage/CharactersPage';
import Header from "./components/Header/Header"
import CharactersDetailPage from './components/Characters-detailPage/CharactersDetailPage';
import LocationsPage from './components/LocationsPage/LocationsPage';
import LocationDetailPage from './components/Location-detailPage/LocationDetailPage';
import EpisodesPage from './components/EpisodesPage/EpisodesPage';
import EpisodesDetailPage from './components/Episodes-detailPage/EpisodesDetailPage';

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
            <Route path='/locations-detail/:id' element={<LocationDetailPage/>} />

            <Route path='/episodes' element={<EpisodesPage />} />
            <Route path='/episodes-detail/:id' element={<EpisodesDetailPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
