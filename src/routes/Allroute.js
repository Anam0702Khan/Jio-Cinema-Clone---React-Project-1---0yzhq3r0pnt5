import '../App.css';
import React from 'react';
import {HashRouter,Route,Routes} from 'react-router-dom';
import Header from '../Components/header/Header';
import Subscribe from '../pages/Subscribe';
import Shows from '../pages/Shows';
import ShortFilm from '../pages/ShortFilm';
import MovieList from '../Components/movielist/MovieList';
import Moviepage from '../Components/moviedetail/Moviepage';
import Home from '../pages/Home';

 function Allroute() {
    
return (
    <div className='App'>
        <HashRouter> 
        <Header />
        <Routes>
           <Route  index  element={<Home />}/>
            <Route path='/show' element={<Shows /> }/> 
           <Route  path='/subscribe' element={<Subscribe />}/>
           <Route  path='/watchlist' element={<h1>working on it</h1>}/>
           <Route path='/ott/:type' element={<MovieList />}></Route>
           <Route path='/show/:id' element={<Moviepage />}></Route>
           {/* <Route  component={Error }/> */}
 
          </Routes>
      </HashRouter> 
    </div>
   );
 }
 
 export default Allroute;