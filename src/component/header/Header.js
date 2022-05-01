import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import "./Header.scss";

const Header = () => {
  const [search,setSearch]=useState("");
  const dispatch=useDispatch();

  const submitHandler=(e)=>{
    if(search==="")return alert('Write something you want');
    
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncShows(search));
    setSearch("");
    e.preventDefault();
  }

    return (
    <div className='header'>
     
        <Link style={{textDecoration:'none'}} to="/">
        <div className='logo'>
          Movie App
        </div>
        </Link>
        <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} placeholder="Seach your movie or shows" onChange={(e)=>setSearch(e.target.value)}/>
          <button type='submit'>Search</button>
        </form>
        </div>    
      <div className='movieImg'>
        <img src='https://img.freepik.com/free-photo/people-holding-media-player-icons-clapper-icon_53876-65386.jpg?w=740&t=st=1651039678~exp=1651040278~hmac=c1d60c58d33ebba01341b71dda160593403fe37d086986a458e974efa3fdae62'/>
      </div>
    </div>
  )
}

export default Header