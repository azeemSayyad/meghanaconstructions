import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../Images/img1.jpeg";
import img2 from "../Images/img2.jpeg";
import img3 from "../Images/img3.jpeg";

const SwiperSlides = () => {
  return (
    <div className="w-full h-[70%] ">
      <Swiper
        loop={true}
        spaceBetween={1}
        modules={[Autoplay]}
        autoplay={
          {delay: 4000,}
        }
        className="h-[70%] rounded-bl-lg rounded-br-2xl"
      >
        <SwiperSlide>
          <img
            className="object-cover w-full h-[200px] md:h-[300px]"
            src={img1}
            alt="siteImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-[200px] md:h-[300px]"
            src={img2}
            alt="siteImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-[200px] md:h-[300px]"
            src={img3}
            alt="siteImage"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlides;
