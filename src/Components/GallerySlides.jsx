import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const GallerySlides = ({ gallery }) => {
    console.log(gallery)
  return (
    <div className="w-full">
      <Swiper
        loop={true}
        spaceBetween={1}
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        className=" rounded-lg "
      >
        {gallery.map((img,i) => (
          <SwiperSlide key={i}>
            <img className="object-cover w-full h-[300px]" src={img} alt="siteImage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlides;
