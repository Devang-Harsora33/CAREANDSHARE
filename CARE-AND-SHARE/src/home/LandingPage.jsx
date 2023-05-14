import React from "react";
import "./LandingPage.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

import FeatureItem from "./featureItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logoa from "../images/a.jpg";
import Testimonial from "../Testimonial/index";

const redirectpage = () => {
  window.open("https://www.learnpick.in/prime/documents/ppts/details/676/world-hunger")
};
export const LandingPage = () => {
  const dataFeatures = [
    {
      id: 1,
      title: "WHAT IS HUNGER?",
      logo: "/feature-1.svg",
      content:
        "Hunger is more complicated than empty bellies. It’s a multifaceted problem with many root causes and far-reaching impact. The first step to ending the global hunger crisis is to understand what it is and why it exists in a world of plenty.",
    },
    {
      id: 2,
      title: "WHO DOES HUNGER AFFECT?",
      logo: "/feature-2.svg",
      content:
        "An overwhelming majority of the world's hungry people reside in the developing world, where extreme poverty and lack of access to nutritious food often leads to malnutrition. Women and children are particularly vulnerable.",
    },
    {
      id: 3,
      title: "WHAT CAUSES WORLD HUNGER?",
      logo: "/feature-3.svg",
      content:
        "poverty, climate change, conflict and war, unequal distribution of resources, lack of infrastructure, food waste, limited access to education and healthcare.",
    },
    {
      id: 4,
      title: "THE BENEFITS OF FOOD DONATION:",
      logo: "/feature-4.svg",
      content:
        "Food donation helps reduce food waste, provides access to food for those in need, and promotes sustainability, community building, improved health, and support for the local economy.",
    },
    {
      id: 5,
      title: "WAYS TO DONATE FOOD!",
      logo: "/feature-5.svg",
      content:
        "There are various ways to donate food, including through food banks, food drives, and online donations. Donors can also support local farmers and food producers, reduce food waste, and volunteer their time to help with food donation programs.And using our application CARE AND SHARE.",
    },
    {
      id: 6,
      title: "CONTACT THE RHA-INDIA HQ:",
      logo: "/feature-6.svg",
      content:
        "CONTACT NO.: 8971966164. CAN USE THIS FOR WHATSAPP TOO.",
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
        <TrackVisibility>
              {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeInUp": ""}>
                              <b><p className="subtitle-text2">GLOBAL HUNGER CRISIS IN 2023</p></b>
          <p className="subtitle-text3">
          After steadily declining for a decade, world hunger is on the rise, affecting nearly 10% of people globally. 
          From 2019 to 2022, the number of undernourished people grew by as many as 150 million, a crisis driven largely by conflict,
          climate change, and the COVID-19 pandemic.
          </p>
          <b><p style={{fontSize:"20px"}}>More Information</p></b>
                              </div>}
              </TrackVisibility>
          
        

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
                              
                                <div className="container3">
                                  <div className="text-center">
                                    <h4 className="subtitle-text">
                                      <br></br><br></br><br></br><br></br><br></br><br></br>
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
              <h4 className="thanking">THANKING YOU RHA_INDIA FOR VERIFYING AND APPROVING OUR PROJECT.</h4>
              <a href="https://robinhoodarmy.com/" className="thanking-a"target="_blank">Contact RHA INDIA from here.</a>
    </div>
    </>
  );
};

export default LandingPage;

