
import axios from 'axios'
import {useState,useEffect} from 'react'
import { Footer } from '../components/Footer'
export const Series = () => {
  
  const api_key ="429cf7b92eae71c483b6174e8212df4e"
  const [series,setSeries]=useState([])

  const fetchData =async()=>{

    const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}`)
    console.log(response.data.results)
    
    setSeries(response.data.results)

  }

  useEffect(()=>{ 
    fetchData();
  },[])

  return (
    
    <>
    {
      series.map((serie)=>(
        <img  style={{with:"300px",height:"250px",marginLeft:"10px",marginTop:"30px"}}src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}/>
       
      ))
    }

    <Footer/>
    </> 
  
  )
}
 