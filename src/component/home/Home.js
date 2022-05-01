import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import MovieListing from '../movieListing/MovieListing'

const Home = () => {
  const movieText="Harry";
  const showText="Friends";
  const dispatch=useDispatch()

  useEffect(()=>{   
     dispatch(fetchAsyncMovies(movieText));
     dispatch(fetchAsyncShows(showText))    
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