import React,{useEffect,useState}from 'react'
import Cards from '../Components/Cards/Cards';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ShortFilm() {
    
    const [movieList, setMovieList] = useState([]);
  
    useEffect(() =>{
     getData()
    },[])
  
    const accesstoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpc3QiOiIiLCJpYXQiOjE2OTMzODQ1NjYsImV4cCI6MTY5MzM4NDU5NiwianRpIjoiand0X25vbmNlIn0.Qri9Ejnj1I5CMWRBtiU_U4X4yTfhXWWp_SG-pLT-aJI'
  
    const baseUrl = 'https://academics.newtonschool.co/api/v1/ott/show';
  
    const apiUrl = `${baseUrl}?filter={"type": "short film"}`;
  
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
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <>

       <h1 style={{marginTop:"10px",marginBottom:"20px"}}>short film</h1>
        <Carousel responsive={responsive}>
        {
         movieList &&  movieList.map((movie) => {
           return <Cards key={movie.id} movie={movie} />
          })
        }
      </Carousel> 
      </>

      )
      
}



export default ShortFilm