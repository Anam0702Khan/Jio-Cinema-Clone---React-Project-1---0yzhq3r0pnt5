import React, { useEffect, useState } from 'react'
import "./Cards.css"
import {Link} from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Cards = ({movie})  => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
     setTimeout(() =>{
       setIsLoading(false)
     },1500)
  },[])

  return (
    <>
    {
      isLoading ?
      <div className='cards'>
      <SkeletonTheme color='#202020' highlightColor='#444'>
        <Skeleton height={300} duration={2}/>

      </SkeletonTheme>
      </div>
      :
       <Link to={`/show/${movie._id}`} style={{textDecoration: "none", color: "white"}}> 
          <div className='cards'>
            <img  className ="cards__img" src={movie.thumbnail}/>
            <div className='cards__overlay'>
              <div className='cards__title'>{movie ? movie.title: ""} </div>
              <div className='crads__description'>{movie ? movie.description : ""}</div>
            </div>
          </div>
      </Link> 
    }
     
    </>
  )
}

export default Cards