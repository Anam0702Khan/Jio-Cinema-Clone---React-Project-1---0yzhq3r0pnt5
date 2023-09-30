import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import "./Moviepage.css"

function Moviepage() {

    const [currentMovieDetail, setMovie] = useState({})
    const { id } = useParams();
    console.log(id);

    const accesstoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpc3QiOiIiLCJpYXQiOjE2OTM3NTc3MDQsImV4cCI6MTY5Mzc1NzczNCwianRpIjoiand0X25vbmNlIn0.LMUTQaT577lJZeF3SnCNoTDpQFZvrkVqhcZPBIe05pw'
    const baseUrl = 'https://academics.newtonschool.co/api/v1/ott/show/';
    const apiUrl = `${baseUrl}${id}`

    useEffect(() =>{
      getData()
      window.scrollTo(0,0)
     },[id])

    const getData = () => {
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accesstoken}`,
          'projectId': ` f104bi07c490`
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("data",data);
          setMovie(data.data);
        })
        .catch(error => console.error('Error:', error));
    }

    
  return (
    <>
    <div className="movie__container">
    <div className="movie__left">
    <img  className="movie__backdrop" src={currentMovieDetail ? currentMovieDetail.thumbnail : ""} alt=""/>
    
    <button className='movie__btn' >Watch Now</button>
    <h2 className='movie__type'> Type - {currentMovieDetail ? currentMovieDetail.type : ""}</h2>
    <h1 className='movie__title'>{ currentMovieDetail ? currentMovieDetail.title : ""}</h1>
    <h3 className='movie__description'>{currentMovieDetail ? currentMovieDetail.description : ""}</h3>
    
    </div>
  
      <div className="movie__cast"> Cast-
      {currentMovieDetail && currentMovieDetail.cast ? (
      currentMovieDetail.cast.join(', ')
    
    ) : (
      <span>No cast information available</span>
    )}
      </div>
   
    
    </div>
   
    </>
  )
}

export default Moviepage