import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Routes,Route}from 'react-router-dom'
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import PlaysPage from './pages/PlaysPage';
import NoPage from './pages/NoPage';
import axios from 'axios';

axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]="cbef1a7b78298bab3abff57f0ab5017b";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movie/:id' element={<MoviePage/>}/>
      <Route path='/plays' element={<PlaysPage/>}/>
      <Route path="*" element={<NoPage/>} />
    </Routes>
  );
}

export default App;
