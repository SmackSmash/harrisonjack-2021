import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Home = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src="http://lorempixel.com/1600/900/" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="http://lorempixel.com/1600/900/" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="http://lorempixel.com/1600/900/" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="http://lorempixel.com/1600/900/" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="http://lorempixel.com/1600/900/" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
