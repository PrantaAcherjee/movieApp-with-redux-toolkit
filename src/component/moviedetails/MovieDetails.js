import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMoviesOrShowsDetails, getSelctedDetails, removeSelectedDetails } from '../../features/movies/movieSlice';
import "./MovieDetails.scss";

const MovieDetails = () => {
  const data=useSelector(getSelctedDetails);
  // console.log(data)
  const {imdbID}=useParams();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchAsyncMoviesOrShowsDetails(imdbID));
    return()=>{
      dispatch(removeSelectedDetails())
    }
  },[dispatch,imdbID])
  
  return (
    <div className='movie-section'>
    {Object.keys(data).length===0?(<div>Loading...</div>):(
       <>
       <div className='section-left'>
         <div className='movie-title'>
           {data.Title}
         </div>
         <div className='movie-rating'>
           <span>
             IMDB Ratings: {data.imdbRating}
           </span>
           <span>
             IMDB Votes: {data.imdbVotes}
           </span>
           <span>
             IMDB Runtime: {data.imdbRuntime}
           </span>
           <span>
             IMDB Year: {data.Year}
           </span>
         </div>
         <div className='movie-plot'>
          Plot: {data.Plot}
         </div>
         <div className='movie-info'>
           <div>
           <span className=''>Director</span>
           <span className=''>{data.Director}</span>
           </div>
           <div>
           <span className=''>Actors</span>
           <span className=''>{data.Actors}</span>
           </div>
           <div>
           <span className=''>Genres</span>
           <span className=''>{data.Genre}</span>
           </div>
           <div>
           <span className=''>Language</span>
           <span className=''>{data.Language}</span>
           </div>
           <div>
           <span className=''>Awards</span>
           <span className=''>{data.Awards}</span>
           </div>         
         </div>
       </div>
       <div className='section-right'>
         <img src={data.Poster} />
       </div>
       </>
    )}
     
    </div>
  )
}

export default MovieDetails;