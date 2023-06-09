import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";
import TestimonialItem from "./testimonialItem";
import TestimonialItem2 from "./testimonialItem2";
// import IconButton from '@material-ui/core/IconButton';
// import { ArrowLeft, ArrowRight } from '@material-ui/icons';

export default function Testimonial() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  // const Arrow = ({ direction, clickFunction, icon }) => (
  //   <IconButton className={`swiper-arrow ${direction}`} onClick={clickFunction}>
  //     {icon}
  //   </IconButton>
  // );
  return (
    <div className="bg-tertiary-300">
      <div className="container mx-auto max-w-[1344px]">
        <div className="px-5 pt-10 pb-[52px] sm:px-10">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="relative"
          >
            <SwiperSlide>
              <TestimonialItem/>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem2/>
            </SwiperSlide>
            <div className="absolute bottom-0 right-0 sm:right-10 z-10 flex items-center gap-6">
              <button
                className="testimonial-button prev"
                ref={navigationPrevRef}
              >
                <img
                  className="w-2 h-4.5 object-cover"
                  src="/arrow-left.svg"
                  alt="arrow"
                />
              </button>
              {/* <Arrow direction="left" clickFunction={navigationPrevRef} icon={<ArrowLeft />} />
  <Arrow direction="right" clickFunction={navigationNextRef} icon={<ArrowRight />} />  */}
              <button
                className="testimonial-button next"
                ref={navigationNextRef}
              >
                <img
                  className="w-2 h-4.5 object-cover"
                  src="/arrow-right.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
