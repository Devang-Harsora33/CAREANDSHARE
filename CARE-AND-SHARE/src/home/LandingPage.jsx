import React from "react";
import "./LandingPage.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Slider from "react-slick";
import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../images/carousel_1.jpg"
// import carousel2 from "../images/carousel_2.png"
// import carousel3 from "../images/carousel_3.png"
// import carousel4 from "../images/carousel_4.png"
// import carousel5 from "../images/carousel_5.png"
import {motion} from "framer-motion";
import logoa from "../images/a.jpg";
import Testimonial from "../Testimonial/index";

const redirectpage = () => {
  window.open("https://www.learnpick.in/prime/documents/ppts/details/676/world-hunger")
};
export const LandingPage = () => {
  const dataFeatures = [
    {
      id: 1,
      title: "One time payment",
      logo: "/feature-1.svg",
      content:
        "Check out our best practices and support to quickly make text messaging one of your top 3 revenue channels.",
    },
    {
      id: 2,
      title: "Self-reported data",
      logo: "/feature-2.svg",
      content:
        "You own your data, store design and business plan, but you are free to use the software platform and resources provided by Shopify.",
    },
    {
      id: 3,
      title: "Updates are always free",
      logo: "/feature-3.svg",
      content:
        "Careandshare is so dedicated to keeping its software current that it wont charge any penny for register.",
    },
    {
      id: 4,
      title: "Mobile first design",
      logo: "/feature-4.svg",
      content:
        "With our mobile app, you can allow your customers to check their order status, browse your store and create an account on the spot.",
    },
    {
      id: 5,
      title: "100% Customizable",
      logo: "/feature-5.svg",
      content:
        "You can customize your storefront and everything else in the way you want as the owner of your source code.",
    },
    {
      id: 6,
      title: "Easy task management",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
  ];
  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };
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
          </div>
        </div>
        </section>
        
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36">
        {/* Head Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="text-center flex flex-col items-center"
        >
          <h2 className="subtitle-text2">360° CUSTOMIZABLE</h2>
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
            Have full control over your online store
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            Take total control of your eCommerce business by owning the source
            code and data that drive it.
          </Paragraph>
        </motion.div>

        {/* Feature Items */}
        <div className="grid-section">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} i={index} />
          ))}
        </div>
      </div>
    </div>
    <div className="section21">
    <TrackVisibility>
              {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeInUp": ""}>
                              
                                <div className="container">
                                  <div className="text-center">
                                    <h4 className="subtitle-text">
                                    {/* SHARING A MEAL IS ONE OF THE MOST BASIC HUMAN ACTS OF KINDNESS, AND DONATING FOOD IS AN EXTENSION OF THAT KINDNESS                                    </h4> */}
                                    <b>SHARING</b> a meal is one of the most basic human acts of <b>KINDNESS</b>, and <b>DONATING</b> food is an <b>EXTENSION</b> of that kindness.</h4>
                                    <img className="subtitle-img" src= {logoa} />
                                  </div>
                                </div>
                              </div>}
              </TrackVisibility>
              
              </div>
              <div>
              <TrackVisibility>
              {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeInUp": ""}>
                              <Testimonial/>
                              </div>}
              </TrackVisibility>
              </div>
              
    </div>
    </>
  );
};

export default LandingPage;

