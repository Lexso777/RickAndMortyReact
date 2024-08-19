import './App.css';
import CharactersPage from './components/CharactersPage/CharactersPage';
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <CharactersPage />
      </div>
    </div>
  );
}

export default App;
