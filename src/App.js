import './App.css';
import Banner from './components/Banner';
import MovieList from './components/movieList';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <MovieList/>
    </>
    );
}

export default App;