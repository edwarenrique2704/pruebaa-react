import axios from 'axios'
import {useState,useEffect} from 'react'
import { Footer } from '../components/Footer'
export const Movies = () => {
  
  const api_key ="429cf7b92eae71c483b6174e8212df4e"
  const [movies,setMovies]=useState([])

  const fetchData =async()=>{

    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
    console.log(response.data.results)
    
    setMovies(response.data.results)

  }

  useEffect(()=>{ 
    fetchData();
  },[])

  return (
    
    <>
    {
      movies.map((movie)=>(
        <img  style={{with:"300px",height:"250px",marginLeft:"10px",marginTop:"30px"}}src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
       
      ))
    }

    <Footer/>
    </> 
  
  )
}
 