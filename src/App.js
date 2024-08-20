import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CharactersPage from './components/CharactersPage/CharactersPage';
import Header from "./components/Header/Header"
import CharactersDetailPage from './components/Characters-detailPage/CharactersDetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path='/' element={<CharactersPage />} />
            <Route path='/characters' element={<CharactersPage />}/>
            <Route path='/characters-detail/:id' element={<CharactersDetailPage />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
