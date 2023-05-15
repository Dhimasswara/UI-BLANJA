import React from "react";
import image1 from '../../assets/category/image1.png'
import image2 from '../../assets/category/image2.png'
import image3 from '../../assets/category/image3.png'
import image4 from '../../assets/category/image4.png'
import image5 from '../../assets/category/image5.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./Carousel.css"

// import required modules
import { FreeMode,  Navigation  } from "swiper";

export default function CarouselCat() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={48}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          451: {
            slidesPerView: "auto",
            spaceBetween: 10,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 48,
          },
        }}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="swiperCategory"
      >
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">Shirt</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image1} alt="image-1"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">Shoes</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image2} alt="image-1"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">Jeans</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image3} alt="image-1"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">Jackets</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image4} alt="image-1"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">Pants</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image5} alt="image-1"/>
            </div>
        </SwiperSlide> 
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">White Edition</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image1} alt="image-1"/>
            </div>
        </SwiperSlide>   
      </Swiper>
    </>
  );
}




            
