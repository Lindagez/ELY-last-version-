import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {v4} from "uuid"; 
import "./header.css";
// import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
// import bc from "../resources/images/logo final.png"
// import { useRef } from 'react';
const Navbar = ({ children }) => {
  const [click, setClick] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const init = () => {
  //   setIsLogin(isAuthenticated());
  // }

  // useEffect(() => {
  //   init();
  // }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Property', to: '/property' },
    { name: 'Notification', to: '/Notification' },
    // { name: 'News', to: '/news' },
    // { name: 'About', to: '/About' },
    // { name: 'Login', to: '/login' },
  ]

  const loginNavLinks = [
    { name: 'Home', to: '/' },
    // { name: 'Property', to: '/property' },

    // { name: 'News', to: '/news' },
    // { name: 'About', to: '/About' },
    // { name: 'Dashboard', to: '/profile' },
    // { name: 'Logout', to: '/logout' },
  ]


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo " onClick={closeMobileMenu}>
            <div className=""><img src={""} alt="" width="60px"
              height="60px" className="mr-2" /></div>
          ELY
          </Link>

          <div className="menu-icon" onClick={handleClick} style={{ zIndex: '1000', position: "fixed" }}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {
              isLogin === true &&
              loginNavLinks.map((nav, index) =>
                <li className="nav-item" key={index}>
                  <NavLink
                    to={nav.to}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}>
                    {nav.name}
                  </NavLink>
                </li>
              )
            }
            {
              isLogin === false &&
              navLinks.map((nav, index) =>
                <li className="nav-item" key={index}>
                  <NavLink
                    to={nav.to}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}>
                    {nav.name}
                  </NavLink>
                </li>
              )
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;