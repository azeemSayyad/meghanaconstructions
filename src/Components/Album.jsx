import img1 from "../Images/img7.jpeg";
import img2 from "../Images/img8.jpeg";
import img3 from "../Images/img9.jpeg";
import img4 from "../Images/img10.jpeg";

import img11 from "../Images/house_1_1.jpg"
import img12 from "../Images/house_1_2.jpeg"
import img13 from "../Images/house_1_3.jpg"
import img14 from "../Images/house_1_4.jpg"
import img15 from "../Images/house_1_5.jpg"

import img21 from "../Images/house_2_1.jpeg"
import img22 from "../Images/house_2_2.jpeg"
import img23 from "../Images/house_2_3.jpeg"
import img24 from "../Images/house_2_4.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation,Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Album = () => {

    const images = [img1,img2,img3,img4,img11,img12,img13,img14,img15,img21,img22,img23,img24];

  return (
    <div className="w-full px-4 ">
    <p className="text-4xl text-black font-semibold text-center my-4">Album</p>
    <div className="md:hidden">
      <Swiper
        loop={true}
        spaceBetween={1}
        slidesPerView={2}
        navigation={true}
        modules={[Navigation,Autoplay]}
        autoplay={{ delay: 4000 }}
        className=" rounded-lg "
      >
        {images.map((img,i) => (
          <SwiperSlide key={i}>
            <img className="object-cover w-full h-[300px]" src={img} alt="siteImage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="hidden md:block lg:hidden">
      <Swiper
        loop={true}
        spaceBetween={1}
        slidesPerGroup={3}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation,Autoplay]}
        autoplay={{ delay: 4000 }}
        className=" rounded-lg "
      >
        {images.map((img,i) => (
          <SwiperSlide key={i}>
            <img className="object-cover w-full h-[300px]" src={img} alt="siteImage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="hidden lg:block">
      <Swiper
        loop={true}
        spaceBetween={1}
        slidesPerGroup={3}
        slidesPerView={4}
        navigation={true}
        modules={[Navigation,Autoplay]}
        autoplay={{ delay: 4000 }}
        className=" rounded-lg "
      >
        {images.map((img,i) => (
          <SwiperSlide key={i}>
            <img className="object-cover w-full h-[300px]" src={img} alt="siteImage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    </div>
  )
}

export default Album