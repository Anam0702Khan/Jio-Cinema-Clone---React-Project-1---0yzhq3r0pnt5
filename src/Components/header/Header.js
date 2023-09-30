
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../slices/userSlice'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import {useDispatch} from "react-redux"

function Header() {
  const [nav, setNav] = useState(false);
  const [avatarVisible, setAvatarVisible] = useState(false);
  const dispatch = useDispatch()

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const handleSliderClick = () => {
    setNav(false);
  };

  const handleAvatarClick = () => {
    if (avatarVisible) {
      setAvatarVisible(false); 
    } else {
      setAvatarVisible(true);
    }
  };

  return (
    <div className='header'>
      <div className='headerLeft'>
        <Link to='/'>
          <img
            className='header_icon'
            src='https://www.jiocinema.com/images/jc_logo_v2.svg'
            alt='logo'
          />
        </Link>
        <div className={`menu-icon ${nav ? 'hidden' : ''}`} onClick={handleNav}>
          ☰
        </div>
        <div className={`menu ${nav ? 'active' : ''}`}>
          <Link to='/subscribe' style={{ textDecoration: 'none' }} className='subscribe'>
            Subscribe
          </Link>
          <Link to='/ott/documentary' style={{ textDecoration: 'none' }}>
            <span>For You</span>
          </Link>
          <Link to='/ott/movie' style={{ textDecoration: 'none' }}>
            <span>Movies</span>
          </Link>
          <Link to='/show' style={{ textDecoration: 'none' }}>
            <span>Tv Shows</span>
          </Link>
          <Link to='/watchlist' style={{ textDecoration: 'none' }}>
            <span>Watchlist</span>
          </Link>
        </div>
      </div>
      <div className='headerRight'>
        <input
          type='text'
          placeholder='Search'
          className={`searchbar ${nav ? 'hidden' : ''}`}
        />
        <div
          className={`avatar-container ${avatarVisible ? 'active' : ''}`}
          onClick={handleAvatarClick}
        >
          <img
            src='https://www.jiocinema.com/images/profile/profile_avatar.svg'
            alt='avatar'
            className='avatar'
          />
          {avatarVisible && (
            <div className='slider'>
              <img
                src='https://www.jiocinema.com/images/profile/profile_avatar.svg'
                alt='avatar'
                className='avatar slide'
                onClick={handleSliderClick}
              />
              <br />
              <hr />
              {/* <h1 className='text'>Sign Up</h1> */}
              <button onClick={handleLogout} className="logout__btn">
                Logout
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;


