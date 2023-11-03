import React, { useEffect, useState } from "react"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import ShortFilm from "./ShortFilm";

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, [])

  const [apidata, setApidata] = useState([])
  const accesstoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpc3QiOiIiLCJpYXQiOjE2OTMzODQ1NjYsImV4cCI6MTY5MzM4NDU5NiwianRpIjoiand0X25vbmNlIn0.Qri9Ejnj1I5CMWRBtiU_U4X4yTfhXWWp_SG-pLT-aJI'


  useEffect(() => {

    fetch('https://academics.newtonschool.co/api/v1/ott/show?page=63&limit=10', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accesstoken}`,
        'projectId': `4ehlg17pvngm`
      }
    })
      .then(response => response.json())
      .then(data => setApidata(data.data))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            popularMovies.map(movie => (
              <>

                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                </div>
              </>

            ))
          }
        </Carousel>
        <ShortFilm val="short film" />
        <ShortFilm val="trailer" />
        <img style={{ height: "300px", width: "100vw", objectFit: "cover" }} src='https://v3img.voot.com/resizeHigh,w_1920,h_1080/v3Storage/assets/kyy-s5-16x9-6-1693554814025.jpg' />
        <ShortFilm val="video song" />
        <ShortFilm val="movie" />
        <ShortFilm val="tv show" />
        <img style={{ width: "100vw", objectFit: "cover" }} src='https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/14x3-roadies-1697379655862.jpg?imformat=chrome' />
      </div>
    </>
  )
}

export default Home

