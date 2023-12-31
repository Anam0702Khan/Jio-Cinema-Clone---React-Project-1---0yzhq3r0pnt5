import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Moviepage.css"
import {db} from "../../firebase"
import {addDoc ,collection} from "firebase/firestore"

function Moviepage() {

  const [currentMovieDetail, setMovie] = useState({})

  const { id } = useParams();

  const baseUrl = 'https://academics.newtonschool.co/api/v1/ott/show/';
  const apiUrl = `${baseUrl}${id}`

  useEffect(() => {
    getData()
    window.scrollTo(0, 0)
  }, [id])

  const getData = () => {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        
        'projectId': ` f104bi07c490`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        setMovie(data.data);
      })
      .catch(error => console.error('Error:', error));
  }  
  
  function addToWatchlist() {
    const thumbnailUrl = currentMovieDetail ? currentMovieDetail.thumbnail : "";

    if (thumbnailUrl) {
      const watchlistCollection = collection(db, "watchlist"); // Get the collection reference
      addDoc(watchlistCollection, {
        thumbnailUrl: thumbnailUrl,
      })
        .then(() => {
          alert("Added to Watchlist!");
        })
        .catch((error) => {
          console.error("Error adding to Watchlist: ", error);
        });
    }
  }

  return (
    <>
      <div className="movie__container">
        <div className="movie__left">
          <img className="movie__backdrop" src={currentMovieDetail ? currentMovieDetail.thumbnail : ""} alt="" />
          <button className='watch__btn' onClick={addToWatchlist} > Add to Watchlist</button>
            {
              console.log("currentMovieDetail.video_url",currentMovieDetail.video_url)
            }
           <Link to={`/video?videoid=${currentMovieDetail.video_url}`}>
           <button className='movie__btn'>Watch Now</button>
           </Link>

          <h2 className='movie__type'> Type - {currentMovieDetail ? currentMovieDetail.type : ""}</h2>
          <h1 className='movie__title'>{currentMovieDetail ? currentMovieDetail.title : ""}</h1>
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