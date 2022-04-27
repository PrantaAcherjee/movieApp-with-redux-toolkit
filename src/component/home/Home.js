import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import movieapi from '../../common/api/movieapi'
import { apiKey } from '../../common/api/movieApiKeys'
import { addMovies } from '../../features/movies/movieSlice'
import MovieListing from '../movieListing/MovieListing'

const Home = () => {
  const text='Harry'
  const dispatch=useDispatch()

  useEffect(()=>{   
    const fetchMovies=async()=>{
      const response=await movieapi.get(`?apikey=${apiKey}&s=${text}&type=movie`)
      .catch((err)=>{
        console.log(err);
      })
       dispatch(addMovies(response.data))
    }
    fetchMovies() 
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