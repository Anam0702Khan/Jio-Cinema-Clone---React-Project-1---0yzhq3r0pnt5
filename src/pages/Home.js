import React, { useEffect, useState } from "react"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import ShortFilm from "./ShortFilm";

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([])
  let video_link ="https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd551.mp4";

  useEffect(() => {
    fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f8565ecdffmsh2de3436aecfe5d9p15859ajsnfea25615dfc7",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.movies || []));
  }, []);


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
          {Array.isArray(popularMovies) &&
            popularMovies.map((movie) => (
              <>
                <div className="posterImage">
                <img src={movie.image} alt={movie.title} />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">
                    {movie ? movie.title : ""}
                  </div>
                  <div className="posterImage__runtime">
                    {movie ? movie.year : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.rating : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">
                    {movie ? movie.description : ""}
                  </div>
                </div>
              </>
            ))}
        </Carousel>
        
        <ShortFilm val="short film" />
        <ShortFilm val="trailer" />
        <Link to={`/video?videoid=${video_link}`}>
        <img style={{ height: "300px", width: "100vw", objectFit: "cover" }} src='https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/14x3-1699207453417.jpg?imformat=chrome'/>
        </Link>
        <ShortFilm val="video song" />
        <ShortFilm val="movie" />
        <ShortFilm val="tv show" />
        <Link to={`/video?videoid=${video_link}`}>
        <img style={{ width: "100vw", objectFit: "cover" }} src='https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/14x3-roadies-1697379655862.jpg?imformat=chrome' />
        </Link>
      </div>
    </>
  )
}

export default Home

