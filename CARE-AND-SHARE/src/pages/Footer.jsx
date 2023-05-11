import React from "react";
// import { NavLink } from "react-router-dom";
import "./Footer.css";
import letsplay from "../images/cas-logo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const redirectdonate = () => {
  window.open("https://buy.stripe.com/test_8wMcOr54y2Y685W144","_blank")
};
const Footer = () => {
  return (
    <>
      <footer>
        <section class="footer-section">
          <div class="container-fluid">
            <div class="row d-flex align-items-center">
              <div class="col-md-3">
                <div class="footer-logo">
                  <a href="/#">
                    <img
                      src={letsplay}
                      class="img-fluid wow animated bounceIn slower"
                      alt=""
                      title="Click to visit Landing Page"
                    />
                  </a>
                </div>
              </div>

              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-4">
                  <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                      <div class="menu-wrapper wow animated fadeIn slow">
                      <h4 class="wow animated fadeInUp slow"></h4>
                      <ul
                        id="menu-header-menu-1"
                        class="footer-menu-list d-none d-md-block"
                      >
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-111 nav-item">
                          <a class="nav-link" >
                            <h5>About Us</h5>
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96 nav-item">
                          <a class="nav-link" href="#">
                            <h5>Partner With Us</h5>
                            
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1136 nav-item">
                          <a class="nav-link" href="#">
                            
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-63 nav-item">
                          <h5><a class="footer-item-wrap" href="https://mail.google.com/mail/u/1/#inbox?compose=new" target="_blank" rel="noopener">
                            Careers
                          </a></h5>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2039 nav-item">
                          <a class="nav-link" href="#">
                            
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-250 nav-item">
                          <a class="nav-link" href="#">
                            
                          </a>
                        </li>
                      </ul>{" "}
                      <ul class="footer-menu-list d-md-none">
                        <li>
                          <a href="#">Book Now</a>
                        </li>
                        <li>
                          <a href="#">Join Now</a>
                        </li>
                      </ul>
                    </div>        
                    </div>}
                  </TrackVisibility>
                    
                  </div>
                  
                  <div class="col-md-4">
                    <div class="menu-wrapper wow animated fadeIn slow">
                    <TrackVisibility>
                            {({isVisible})=>
                              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h4 class="wow animated fadeInUp slow">Contact</h4>
                                <div class="footer-item-wrap">
                                  <div>
                                    <p>
                                      DAC 2023 <br />
                                      India
                                    </p>
                                  </div>
                                  <p class="d-none d-md-block">
                                    Phone :{" "}
                                    <a href="#" target="_blank">
                                      +91 9082915877
                                    </a>
                                  </p>
                                  <p>
                                    Email : <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" target="_blank" rel="noopener">careandshare1230@gmail.com</a>
                                  </p>
                                </div>                          
                              </div>}
                          </TrackVisibility>
                      
                    </div>
                  </div>
                  <div class="col-md-4"><TrackVisibility>
                    
                            {({isVisible})=>
                              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                  <div class="menu-wrapper wow animated fadeIn slow">
                                    <h4 class="wow animated fadeInUp slow">Connect Us</h4>
                                    <ul class="footer-social-media">
                                      <li>
                                        <a class="fb" href="/#">
                                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                                        </a>
                                      </li>
                                      <li>
                                        <a class="insta" href="https://www.instagram.com/rha_india/"target="_blank">
                                          <FontAwesomeIcon icon={faInstagram} size="2x" />
                                        </a>
                                      </li>
                                      <li>
                                        <a class="twitter" href="/#">
                                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                                        </a>
                                      </li>
                                      <li>
                                        <a class="youtube" href="/#">
                                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                                        </a>
                                      </li>
                                      <li>
                                        <a class="whatsapp" href="/#">
                                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                                        </a>
                                      </li>
                                      <li>
                                        <a class="telegram" href="https://buy.stripe.com/test_8wMcOr54y2Y685W144" target="_blank">
                                        <FontAwesomeIcon icon={faTelegram} size="2x" />
                                        </a>
                                      </li>
                                    </ul>
                                    <div>
                                      <br></br>
                                      <button className="button-62" onClick={redirectdonate} >FUND DONATION</button>
                                      </div>

                                </div>                          
                              </div>}
                          </TrackVisibility>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="footer-extra-menu">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
              <TrackVisibility>
                {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                          <ul id="menu-footer-menu" class="extra-menu-list">
                      <li
                        id="menu-item-88"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-88 nav-item"
                      >
                        <a class="nav-link" href="/#">
                          FAQ
                        </a>
                      </li>
                      <li
                        id="menu-item-914"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-914 nav-item"
                      >
                        <a class="nav-link" href="/#">
                          Site Map
                        </a>
                      </li>
                      <li
                        id="menu-item-1119"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1119 nav-item"
                      >
                        <a class="nav-link" href="/#">
                          Terms of Service
                        </a>
                      </li>
                      <li
                        id="menu-item-1120"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1120 nav-item"
                      >
                        <a class="nav-link" href="/#">
                          Refund Policy
                        </a>
                      </li>
                    </ul>           
                    </div>}
              </TrackVisibility>
                
              </div>
            </div>
          </div>
        </section>
        <section class="copyright-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="content">
                  Copyright © 2023.Designed by{" "}
                  <a href="/#" target="_blank">
                    Devang-Smit-Om.
                  </a>{" "}
                  | DAC 2023
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
