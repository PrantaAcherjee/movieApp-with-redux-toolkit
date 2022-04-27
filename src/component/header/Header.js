import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
     
        <Link style={{textDecoration:'none'}} to="/">
        <div className='logo'>
          Movie App
        </div>
        </Link>     
      <div className='movieImg'>
        <img src='https://img.freepik.com/free-photo/people-holding-media-player-icons-clapper-icon_53876-65386.jpg?w=740&t=st=1651039678~exp=1651040278~hmac=c1d60c58d33ebba01341b71dda160593403fe37d086986a458e974efa3fdae62'/>
      </div>
    </div>
  )
}

export default Header