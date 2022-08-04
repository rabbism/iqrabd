import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./WatchVideo.css";
// import required modules
import { Pagination } from "swiper";



const WatchVideo = () => {

  const [img, setImg] = useState([]);

  // {

  //   img.map(data =><Cards key={data_id} data={data}></Cards>)

  //  }

  useEffect(() => {
    fetch("https://sleepy-depths-81993.herokuapp.com/video")
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);
  return (
    
    
        <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {
        img.map(item => {

<SwiperSlide>
<iframe width="500" height="300" src={`https://www.youtube.com/embed/${item.link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </SwiperSlide>

        })
        }
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>

        

          
    
  );
};

export default WatchVideo;
