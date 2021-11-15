import React from "react";
import { Container } from "react-bootstrap";
// import TestMonialApi from "./json/TestMonialApi.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.min.css";
// import "swiper/core/"

const TestMonial = () => {
  return (
    <div className="feet-back-components py-20">
      <Container className="m-auto">
        <h2 className="text-center text-gray-800 font-bold font_family text-3xl">
          স্টুডেন্টদের কোর্স সম্পর্কে মতামত
        </h2>
        <div>
          {/* <Swiper>
            {TestMonialApi.map(({ image, id, comment }) => {
              return (
                <SwiperSlide key={id}>
                  <div>
                    <img src={image} alt="img" />
                    <p>{comment}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper> */}
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </div>
        <button className="capitalize width_fit items-center m-auto justify-around mr-3 py-1 px-1 pl-20 bg-gradient-to-r flex flex-row from-pink-500 rounded-full to-pink-600 hover:from-pink-600 hover:to-pink-500 text-gray-50">
          <p className="m-0 pl-4">View Success page</p>
          <div className="p-2 text-pink-500 bg-gray-50 rounded-full ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </button>
      </Container>
    </div>
  );
};

export default TestMonial;
