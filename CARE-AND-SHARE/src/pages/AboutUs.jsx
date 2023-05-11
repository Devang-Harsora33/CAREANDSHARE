import React from "react";
import Smit from "../images/smit.jpg";
import Devang from "../images/devang.jpg";
import Om from "../images/om.jpg";
import Harshita from "../images/srk.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import "./AboutUs.css";

const AboutUs = () => {
  return (
      <div class="container1 aboutus">
        <div class="row">
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>

                  <div className="row">
                    <div className="col-md-4">
                    
                      <div className="single-box">
                      <TrackVisibility>
                          {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                              <div className="img-area">
                              <img src={Smit} alt="Smit" />
                              </div>                           
                            </div>}
                          </TrackVisibility>
                        
                        <div className="img-texts">
                          <TrackVisibility>
                            {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Smit Manojkumar Patel</h2>
                            <p>
                              Hi I'm Smit Manojkumar Patel. I'm currently pursuing Diploma in 
                              Shri Bhagubhai Mafatlal Polytechnic Mumbai, and my role in the  
                              project is Backend Developer.
                            </p>
                            </div>}
                          </TrackVisibility>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                          <TrackVisibility>
                            {({isVisible})=>
                              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <div className="img-area">
                                  <img src={Devang} alt="Devang" />
                                </div>                           
                              </div>}
                          </TrackVisibility>
                        
                        <div className="img-text">
                        <TrackVisibility>
                          {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Devang Kamlesh Harsora</h2>
                              <p>
                              Hi I'm Devang Kamlesh Harsora. I'm currently pursuing Diploma in 
                                Shri Bhagubhai Mafatlal Polytechnic Mumbai, and my role in the  
                                project is Backend Developer and Frontend Developer.
                              </p>
                            </div>}
                        </TrackVisibility>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                      <TrackVisibility>
                          {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                              <div className="img-area">
                              <img src={Om} alt="Om" />
                              </div>                          
                            </div>}
                          </TrackVisibility>
                        <div className="img-text">
                        <TrackVisibility>
                          {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                              <h2>Om Chandrakant Kendre</h2>
                              <p>
                                Hi I'm Om Chandrakant Kendre. I'm currently pursuing Diploma in 
                                Shri Bhagubhai Mafatlal Polytechnic Mumbai, and my role in the  
                                project is Frontend Developer.
                              </p>
                            </div>}
                        </TrackVisibility>
                        </div>
                      </div>
                    </div>

                      <div className="col-md-4">
                        <div className="single-box">
                        <TrackVisibility>
                          {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                              <div className="img-area">
                              <img src={Harshita} alt="Harshita" />
                              </div>                          
                            </div>}
                          </TrackVisibility>
                          
                          <div className="img-text2">
                          <TrackVisibility>
                          {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                              <h2>Neha More</h2>
                              <p>
                              Project Guide
                              </p>                           
                            </div>}
                          </TrackVisibility>
                            
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
        </div>
      </div>
  );
};

export default AboutUs;
