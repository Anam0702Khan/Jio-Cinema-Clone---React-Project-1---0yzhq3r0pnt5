import React, { useEffect, useState } from 'react'
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ShortFilm from './ShortFilm';

function Home() {
     const [apidata,setApidata] = useState([])
     const accesstoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpc3QiOiIiLCJpYXQiOjE2OTMzODQ1NjYsImV4cCI6MTY5MzM4NDU5NiwianRpIjoiand0X25vbmNlIn0.Qri9Ejnj1I5CMWRBtiU_U4X4yTfhXWWp_SG-pLT-aJI'


     useEffect(() =>{
      
      fetch('https://academics.newtonschool.co/api/v1/ott/show?page=63&limit=10', {  method: 'GET',
      headers: {
      'Authorization': `Bearer ${accesstoken}`,
      'projectId': `4ehlg17pvngm` // this is how you set JWT token
      }
      })
      .then(response => response.json())
      .then(data => setApidata(data.data))
      .catch(error => console.error('Error:', error))
       },[])

  
  
  return (
    <>
       <div className='poster'>
       <Carousel
          transitionTime={3}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
        >
         {
          apidata && apidata.map(movie => (
            <div className='posterImage' key={movie.id}>
              <img src={movie.thumbnail} alt='image'/>
              <div className='posterImage__overlay'>
                <div className='posterImage__title'>{movie ? movie.title : ""}</div>
                <div className='posterImage__type'>{movie ? movie.type : ""}</div>
                <div className='posterImage__description'>{movie ? movie.description : ""}</div>
              </div>
            </div>
          ))
        }

        </Carousel>
        </div>
       <ShortFilm />
    </>
  )
}

export default Home