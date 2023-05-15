import React from "react";
import image1 from '../../assets/category/image1.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./Carousel.css"
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={48}
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
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        className="swiperCategory"
      >
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">White Edition</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image1} alt="image-1"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">White Edition</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image1} alt="image-1"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">White Edition</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image1} alt="image-1"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">White Edition</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image1} alt="image-1"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">White Edition</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image1} alt="image-1"/>
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



{/* <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="swiperCategory"
      >
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3 title-category">White Edition</span>
                <img className="position-absolute top-50 start-50 translate-middle image-category" src={image1} alt="image-1"/>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">White Edition</span>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">White Edition</span>
            </div>
        </SwiperSlide>  
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">White Edition</span>
            </div>
        </SwiperSlide>       
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">White Edition</span>
            </div>
        </SwiperSlide>  
        <SwiperSlide className="swiper-slide-cat">
            <div className="category-display position-relative">
                <span className="position-absolute top-50 start-50 translate-middle fw-bolder text-light fs-3">White Edition</span>
            </div>
        </SwiperSlide>  
      </Swiper> */}



            
