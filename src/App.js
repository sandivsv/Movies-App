// install    npm i react-router-dom


import './App.css';
import Banner from './components/Banner';
import MovieList from './components/movieList';
import NavBar from './components/NavBar';
import Fav from './components/Fav'
// eslint-disable-next-line
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'

function App() {

   window.addEventListener("scroll", function(event) {
    var scroll_y = this.scrollY;
    if(scroll_y > 50){
      var element = document.querySelector('.bg-dark');
      element.classList.add('scrolled');
    }
    else{
      var elementR = document.querySelector('.bg-dark');
      elementR.classList.remove('scrolled');
    }

});
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="" element={<><Banner/><MovieList/></>}/>
        <Route path="/favourites" element={<Fav/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    );
}

export default App;