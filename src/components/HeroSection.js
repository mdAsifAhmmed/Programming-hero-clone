import React from "react";
import HeroCarouselApi from "./json/HeroCarouselApi.json";
import { Carousel, CarouselItem, Container } from "react-bootstrap";
const HeroSection = () => {
  return (
    <div className=" pb-48 pt-28 z-10 bg-gradient-to-b from-indigo-600 to-purple-500">
      <Container className="m-auto">
        <Carousel controls={false} fade indicators={true}>
          {HeroCarouselApi.map(({ Title, Description, Image, id }) => {
            return (
              <CarouselItem interval={2000} d="none" key={id}>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div className="flex justify-center flex-col">
                    <h1 className="text-gray-50 my-10 font-bold text-4xl">
                      {Title}
                    </h1>
                    <p className="text-gray-50 mb-12 text-lg">{Description}</p>
                    <button className="capitalize width_fit items-center justify-around mr-3 py-1 px-1 pl-20 bg-gradient-to-r flex flex-row from-pink-500 rounded-full to-pink-600 hover:from-pink-600 hover:to-pink-500 text-gray-50">
                      <p className="m-0 pl-4">Enroll now</p>
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
                  </div>
                  <div className="w-full h-96">
                    <img
                      className="w-full h-full object-contain"
                      src={Image}
                      alt="img"
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
};

export default HeroSection;
