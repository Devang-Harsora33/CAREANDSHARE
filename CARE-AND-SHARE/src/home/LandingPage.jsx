import React from "react";
import "./LandingPage.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../images/carousel_1.jpg"
import carousel2 from "../images/carousel_2.png"
import carousel3 from "../images/carousel_3.png"
// import carousel4 from "../images/carousel_4.png"
// import carousel5 from "../images/carousel_5.png"

const redirectpage = () => {
  window.open("https://www.learnpick.in/prime/documents/ppts/details/676/world-hunger")
};
export const LandingPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2,
    fade: true,
  };
  return (
    <>
    
    <div className="wrapper">
      <section class="home-banner">
        <div class="banner-bg">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rZJIMvhmliwmde8a6/videoblocks-children-at-the-dump-dispossessed-orphans-hungry-children-looking-for-food-in-a-landfill_s_xc33qn3l__ae8f0d805fe0b6e1d7203dc4b39b688e__P360.mp4"
              type="video/mp4"
            ></source>
          </video>
          <div class="container-fluid h-100">
            <div class="row h-100 d-flex align-items-center">
              <div class="col-md-6 d-md-none">
                
              </div>
              <div class="col-md-12">
                <div class="banner-caption-wrap">
                  <h1 class="tlt">
                    <br />
                    <br />
                  </h1>
                  {/* {<img class="logo" src={letsplay}></img>} */}

                  <h3 class="tlt">
                    <h2>Think Of The Poor</h2>
                  </h3>
                  <h2>Before You Waste Your Food </h2>
                  <div class="banner-btns">
                    
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-none d-md-block">
                <div class="banner-img-wrap">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***************** */}
      <section class="app-features-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <TrackVisibility>
                {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__fadeInDownBig": ""}>
                      <div className="landing-page-imgs">
                          <img
                            src="https://img.icons8.com/ios-filled/344/charity-box.png"
                            class="img-fluid wow animated bounceIn slower"
                            alt="Playspots"
                            />
                      </div> 
                      <div className="text-tag">
                      <h4>Donate</h4></div>            
                    </div>}
              </TrackVisibility>
              <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                      
                                <div class="content">
                                  <p>
                                    The problem is not actual number of calories we are 
                                    producing ,we have food waste issues. 
                                    Save Food , Donate Food
                                    
                                    
                                  </p>
                                </div>              
                    </div>}              
              </TrackVisibility>                     
            </div>
            <div class="col-md-6">
            <TrackVisibility>
                {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeInDownBig": ""}>
                              <div className="landing-page-imgs">
                              <img
                                  src="https://www.playspots.in/wp-content/uploads/2020/02/search.png"
                                  class="img-fluid wow animated bounceIn slower"
                                  alt="Playspots"
                                />
                                
                              </div>
                              <div className="text-tag">
                              <h4>Search</h4>
                                </div>
                            </div>}
              </TrackVisibility> 
              <TrackVisibility>
              {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                              <div className="content">
                                    <p>
                                      Search for food donors. You can get waste food 
                                      which are donated by <br></br>restuarants and other similar
                                      donors.
                                    </p>

                                </div>
                                </div>}
              </TrackVisibility>
            </div>
          </div><button className="button-62" onClick={redirectpage}></button>
        </div>
        {/* <Slider className="slider"{...settings}>
                                  <div className="slider_track">
                                    <h1>1</h1>
                                      <div className="slider_track_bar">
                                        <img src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.learnpick.in%2Fuserfiles%2Fresources_conversion_files%2Fpresentation_world_hunger_(original)_1460538171_201563-7.jpg&tbnid=epEzPIm5TbyMqM&vet=12ahUKEwiDk8aH-M_-AhWNyHMBHZIYApsQMygCegUIARDEAQ..i&imgrefurl=https%3A%2F%2Fwww.learnpick.in%2Fprime%2Fdocuments%2Fppts%2Fdetails%2F676%2Fworld-hunger&docid=NgguApeplroYGM&w=3000&h=2250&q=WHAT%20CAUSES%20WORLD%20HUNGER%3F&ved=2ahUKEwiDk8aH-M_-AhWNyHMBHZIYApsQMygCegUIARDEAQ"}/>
                                      </div>
                                  </div>
                                  <div className="slider_track">
                                    <h1>2</h1>
                                  </div>
                                  <div className="slider_track">
                                    <h1>lorem epsum
                                    </h1>
                                  </div>
                                  <div className="slider_track">
                                    <h1>4</h1>
                                  </div>
                                  <div className="slider_track">
                                    <h1>5</h1>
                                  </div>
                                  <div className="slider_track">
                                    <h1>6</h1>
                                  </div>
                                </Slider> */}
        </section>
        <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="false"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={carousel1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={carousel2} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={carousel3} class="d-block w-100" alt="..." />
        </div>
        {/* <div class="carousel-item">
          <img src={carousel4} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={carousel5} class="d-block w-100" alt="..." />
        </div> */}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" style={{color:"black"}}></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>  
    </div>
    </>
  );
};

export default LandingPage;

