import React from 'react'
import { getFullYear } from '../../utils/utils'
// import './Footer.css'

const footerStyles = {
    backgroundColor: 'lightgray',
    color: 'black',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    zIndex: '1',
    marginTop: 'auto',
    marginBottom: '-100px',
}

function Footer() {
    return (

        <div className='page-container'>
            <div className='content-wrapper'>
                <div class="footer_section layout_padding">
                    <div class="container">
                        {/* <div class="footer_logo"><a href="index.html"><img src="images/footer-logo.png"/></a></div> */}
                        <div class="input_bt">
                            <input type="text" class="mail_bt" placeholder="Your Email" name="Your Email" />
                            <span class="subscribe_bt" id="basic-addon2"><a href="#"></a></span>
                        </div>
                        <div class="input_bt">
                            <input type="text" class="mail_bt" placeholder="comment" name="Your Email" />

                            <span class="subscribe_bt" id="basic-addon2"><a href="#">Submit</a></span>
                        </div>
                        <div class="footer_menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">property</a></li>
                                <li><a href="#">profile</a></li>
                                {/* <li><a href="#">Today's Deals</a></li> */}
                                <li><a href="#">Customer Service</a></li>
                            </ul>
                        </div>
                        <div class="location_main">Help Line  Number : <a href="#">+251994009300</a></div>
                    </div>
                </div>
                <div class="copyright_section">
                    <div class="container">
                        <p class="copyright_text">© {getFullYear()} All Rights Reserved <a href=""></a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer