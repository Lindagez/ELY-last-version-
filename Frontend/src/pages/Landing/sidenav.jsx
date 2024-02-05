import React from 'react'
import { useState } from 'react';
// import imgs from '../../../assets/images/images/untitled.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';

const Sidenav = () => {
  const [navWidth, setNavWidth] = useState(0);

  const openNav = () => {
    setNavWidth(250);
  };

  const closeNav = () => {
    setNavWidth(0);
  };


  const handleLogOut = () => {
    const confirm = window.confirm("Are you sure you want to log out?");
    if (confirm) {
      localStorage.removeItem('Token');
      window.location.href = '/';
    }
  };


  return (
    <>
      <div class="header_section">
        <div class="container">
          <div class="containt_main">
            <div id="mySidenav" style={{ width: `${navWidth}px` }} className="sidenav"></div>
            <div id="mySidenav" style={{ width: `${navWidth}px` }} className="sidenav">
              <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
              {/* <a href="settings">Profile Management</a> */}
              <a href="post"> Your Post</a>
              <a href="profile">Update Profile</a>
              <a href="ClosedPost">Closed Post</a>
              <a><button
                class='btn btn-yellow'
                onClick={handleLogOut} >Sign Out &nbsp;<FontAwesomeIcon icon={faSignOut} /></button></a>

            </div>
            <span className="toggle_icon" onClick={openNav}>
              <div className='bar1'></div>
              <div className='bar2'></div>
              <div className='bar3'></div>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidenav