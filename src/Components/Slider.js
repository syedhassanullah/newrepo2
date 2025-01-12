import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Container } from 'react-bootstrap';
function Slider() {
  return (
    <div style={{height:'200px'}}>  
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        // pagination={{
        //   clickable: false,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div style={{width:"200px",height:"200px",backgroundColor:"red"}}><h1>hello</h1></div></SwiperSlide>
        <SwiperSlide><div style={{width:"200px",height:"200px",backgroundColor:"red"}}><h1>hello</h1></div></SwiperSlide>
        <SwiperSlide><div style={{width:"200px",height:"200px",backgroundColor:"red"}}><h1>hello</h1></div></SwiperSlide>
        <SwiperSlide><div style={{width:"200px",height:"200px",backgroundColor:"red"}}><h1>hello</h1></div></SwiperSlide>
        <SwiperSlide><div style={{width:"200px",height:"200px",backgroundColor:"red"}}><h1>hello</h1></div></SwiperSlide>
        <SwiperSlide><div style={{width:"200px",height:"200px",backgroundColor:"red"}}><h1>hello</h1></div></SwiperSlide>
        <SwiperSlide><div style={{width:"200px",height:"200px",backgroundColor:"red"}}><h1>hello</h1></div></SwiperSlide>
        <SwiperSlide><div style={{width:"200px",height:"200px",backgroundColor:"red"}}><h1>hello</h1></div></SwiperSlide>
        <SwiperSlide><div style={{width:"200px",height:"200px",backgroundColor:"red"}}><h1>hello</h1></div></SwiperSlide>
      </Swiper>
   
    </div>
  )
}

export default Slider