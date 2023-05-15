import React from "react";
import fashion1 from '../../assets/display/fashion1.jpg'
import fashion2 from '../../assets/display/fashion2.jpg'
import fashion3 from '../../assets/display/fashion3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css"

// import required modules
import { FreeMode, Pagination,  Navigation  } from "swiper";

export default function CarouselTrend() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        centeredSlides={false}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            centeredSlides: true,
            freeMode: false,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          425: {
            centeredSlides: false,
            slidesPerView: "auto",
            spaceBetween: 20,
            
          }
          
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-trend"> 
            <div className="fashion-display position-relative">
                <img className="fashion-display" src={fashion1} alt="" />
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">White Edition</span>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-trend"> 
            <div className="fashion-display position-relative">
                <img className="fashion-display" src={fashion2} alt="" />
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">Mix Edition</span>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-trend"> 
            <div className="fashion-display position-relative">
                <img className="fashion-display" src={fashion3} alt="" />
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">Cream Edition</span>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-trend"> 
            <div className="fashion-display position-relative">
                <img className="fashion-display" src={fashion1} alt="" />
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">White Edition</span>
            </div>
        </SwiperSlide>
        
       
      </Swiper>
    </>
  );
}




            
