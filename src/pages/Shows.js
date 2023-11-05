import React, { useState,useEffect } from 'react'
import Cards from '../Components/Cards/Cards';
import MovieList from '../Components/movielist/MovieList';


const Shows = () => {
  const [movieList, setMovieList] = useState([]);
  const [page,setPage] = useState(1)
  const  limit = 10;

  const accesstoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpc3QiOiIiLCJpYXQiOjE2OTMzODQ1NjYsImV4cCI6MTY5MzM4NDU5NiwianRpIjoiand0X25vbmNlIn0.Qri9Ejnj1I5CMWRBtiU_U4X4yTfhXWWp_SG-pLT-aJI'

  const baseUrl = 'https://academics.newtonschool.co/api/v1/ott/show';
  
  const getData = () => {
    const apiUrl = `${baseUrl}?filter={"type": "web series"}&page=${page}&limit=${limit}`;
    
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
        setMovieList(prev => [...prev, ...data.data]);
      })
      .catch(error => console.error('Error:', error));
  };
  
  useEffect(() => {
    getData()
 },[page])
 
    useEffect(() => {
      const handleInfiniteScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          setPage(prev => prev + 1);
        }
      };

      window.addEventListener('scroll', handleInfiniteScroll);

      return () => {
        window.removeEventListener('scroll', handleInfiniteScroll);
      };
    }, []);


  return (
    <>
       <div className='movie__list'>
      <h2 className='list__title'></h2>
      <div className='list__cards'>
        {  movieList && movieList.map(movie => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Shows