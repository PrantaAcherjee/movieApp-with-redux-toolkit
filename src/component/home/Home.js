import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import MovieListing from '../movieListing/MovieListing'

const Home = () => {
  
  const dispatch=useDispatch()

  useEffect(()=>{   
     dispatch(fetchAsyncMovies());
     dispatch(fetchAsyncShows())    
  },[dispatch])

  return (
    <div >
       <div className='banner-img'>
        <MovieListing></MovieListing>
       </div> 
    </div>
  )
}

export default Home