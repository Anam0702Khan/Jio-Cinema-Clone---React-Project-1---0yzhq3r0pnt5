import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards';
import "./MovieList.css"
import { useParams } from 'react-router-dom'

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  useEffect(() =>{
   getData()
  },[])

  const accesstoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpc3QiOiIiLCJpYXQiOjE2OTMzODQ1NjYsImV4cCI6MTY5MzM4NDU5NiwianRpIjoiand0X25vbmNlIn0.Qri9Ejnj1I5CMWRBtiU_U4X4yTfhXWWp_SG-pLT-aJI'

  const baseUrl = 'https://academics.newtonschool.co/api/v1/ott/show';

  const apiUrl = `${baseUrl}?filter={"type": "${type}"}&limit=100`;

  const getData = () => {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accesstoken}`,
        'projectId': `4ehlg17pvngm`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovieList(data.data);
      })
      .catch(error => console.error('Error:', error));
  }

  return (
    <div className='movie__list'>
      <h2 className='list__title'>{type.charAt(0).toUpperCase() || "MOVIE"}{type.slice(1) || "MOVIE"}</h2>
      <div className='list__cards'>
        { movieList && movieList.map(movie => (
          console.log(movie._id),

          <Cards key={movie.id} movie={movie} />
          
        ))}
      </div>
      {/* <h2 className='list__title'>{type || "MOVIE"}</h2>
      <div className='list__cards'> */}
    
        {/* {movieList.map(movie => (
          console.log(movie._id),
          <Cards key={movie.id} movie={movie}  />
        ))} */}
      {/* </div> */}
    </div>
  )
}
export default MovieList
