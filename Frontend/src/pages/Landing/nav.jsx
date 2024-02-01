import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import './slick.css'
import useAuth from '../../components/hooks/useAuth';
import Status from '../../components/Status/Status'
import SideLogin from '../../components/SideLogin/SideLogin'
import './style.css'

const Nav = () => {

   const authenticated = useAuth();

   return (
      <>
         {/* //  <div class="banner_bg_main"> */}
         {/* <!-- header top section start --> */}
         <div class="container">
            <div class="header_section_top">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="custom_menu">
                        <ul>
                           <li><a href="/">HOME</a></li>
                           {/* <li><a href="#">Gift Ideas</a></li> */}
                           <li><a href="/about">ABOUT</a></li>
                           {/* <li><a href="#">Contact</a></li> */}
                           {authenticated ? (
                              <>
                              <li>
                                 <a href='sell'>SELL</a>
                              </li>
                              <li>
                                 <a href='/dashboard'>BUY</a>
                              </li>
                              </>
                           ) : (
                              <li>
                                 <a href='/login'>Sign In</a>
                              </li>
                           )}

                        </ul>
                        {/* <button onClick={handleLogOut} className='logout' ><FontAwesomeIcon icon={faSignOut} /></button> */}
                     </div>
                  </div>
               </div>
            </div>
         </div></>
   )
}

export default Nav