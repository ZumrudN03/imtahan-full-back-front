import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HeaderSection.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

function HeaderSection() {
  return (
    <div className="header">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h2>Food And More</h2>
          <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <h2>Special Dish.</h2>
          <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <h2>Hygienic Food.</h2>
          <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg.webp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeaderSection;
