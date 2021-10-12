import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
const HomePageSlider = () => {
  return (
    <Slider>
      <Swiper pagination={true} spaceBetween={70} slidesPerView={1} className="mySwiper">
        <SwiperSlide>
          <Img src="./images/slider-badag.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src="./images/slider-badging.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src="./images/slider-scale.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src="./images/slider-scales.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </Slider>
  );
};
const Slider = styled.div``;

const Img = styled.img`
  position: relative;
  min-width: 30vh;
  max-width: 90vh;
  border: none;
  transition: all 0.2s ease-out;
  border-radius: 15px;
  border: 2px solid transparent;
  box-shadow: 0px 0px 10px 0px #3f3f3f;

  &:hover {
    border: 2px solid #fff;
    transform: scale(1.01);
  }
`;
export default HomePageSlider;
