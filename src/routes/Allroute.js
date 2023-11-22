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
import WatchList from '../Components/watchlist/WatchList';
import Video from '../pages/Video';

 function Allroute() {
    
return (
    <div className='App'>
        <HashRouter> 
        <Header />
        <Routes>
           <Route  index  element={<Home />}/>
            <Route path='/show' element={<Shows /> }/> 
           <Route  path='/subscribe' element={<Subscribe />}/>
           <Route  path='/watchlist' element={<WatchList />}/>
           <Route path='/ott/:type' element={<MovieList />}></Route>
           <Route path='/show/:id' element={<Moviepage />}></Route>
           <Route path='/video' element={<Video />}/>
        
           {/* <Route  component={Error }/> */}
 
          </Routes>
      </HashRouter> 
    </div>
   );
 }
 
 export default Allroute;