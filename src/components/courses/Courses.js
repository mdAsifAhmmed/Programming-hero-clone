import React, { useState } from "react";
import couseAbout1 from "../json/couseAbout1.json";
import couseAbout2 from "../json/couseAbout2.json";
const Courses = () => {
  const [active, setActive] = useState(1);
  const [showText, setShowText] = useState(false);
  return (
    <section className="py-20 feet-back-components">
      <div className="container m-auto">
        <div className="rounded-md flex px-10 bg_white dark:bg-gray-800 courses_about_button_wrapper shadow-lg m-auto">
          <div
            onClick={() => setActive(1)}
            className={
              active === 1
                ? "cursor-pointer w-full height_fit md:w-60 lg:w-60 xl:w-60 sm:w-full flex flex-col items-center px-8 py-3  active_before relative text-pink-600 justify-evenly"
                : "cursor-pointer w-full height_fit md:w-60 lg:w-60 xl:w-60 sm:w-full flex flex-col items-center px-8 py-3 justify-evenly dark:text-gray-100"
            }
          >
            <svg
              height="48px"
              width="48px"
              style={{
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                "stroke-linejoin": "round",
                "stroke-miterlimit": 2,
              }}
              aria-hidden="true"
              focusable="false"
              data-icon="star"
              role="img"
              data-prefix="fas"
              version="1.1"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-inline--fa fa-star fa-w-18"
            >
              <path
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                fill="currentColor"
              />
            </svg>
            <p className="text-sm mt-3 m-0">এই কোর্সের বিশেষত্ব কি?</p>
          </div>
          <div
            onClick={() => setActive(2)}
            className={
              active === 2
                ? "cursor-pointer w-full height_fit md:w-60 lg:w-60 xl:w-60 sm:w-full flex flex-col items-center px-8 py-3  active_before relative text-pink-600  justify-evenly"
                : "cursor-pointer w-full height_fit md:w-60 lg:w-60 xl:w-60 sm:w-full flex flex-col items-center px-8 py-3  dark:text-gray-100  justify-evenly"
            }
          >
            <svg
              height="48px"
              width="48px"
              style={{
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                "stroke-linejoin": "round",
                "stroke-miterlimit": 2,
              }}
              aria-hidden="true"
              focusable="false"
              data-icon="star"
              role="img"
              data-prefix="fas"
              version="1.1"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              className=" svg-inline--fa fa-star fa-w-18"
            >
              <path
                d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"
                fill="currentColor"
              />
            </svg>
            <p className="text-sm mt-3 m-0">এই কোর্স কিভাবে চলবে?</p>
          </div>
        </div>
        <div className=" my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
            {active === 1
              ? couseAbout1.map(
                  ({ image, title, description, hidded_description, id }) => {
                    return (
                      <div
                        className=" bg_white dark:bg-gray-800 p-6 m-3 rounded-xl"
                        key={id}
                      >
                        <img className="w-20 h-20 mb-5" src={image} alt="img" />
                        <h1 className="text-sm dark:text-gray-100 font-bold">
                          {title}
                        </h1>
                        <p className="text-xs pt-2 dark:text-gray-100">
                          {description}
                        </p>
                        {!showText === id ? (
                          <p className="text-xs pb-2 dark:text-gray-100">
                            {hidded_description}
                          </p>
                        ) : null}

                        <button
                          className="text-pink-600 mt-8"
                          onClick={() => setShowText(id)}
                        >
                          আরও দেখুন...
                        </button>
                      </div>
                    );
                  }
                )
              : null}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {active === 2
              ? couseAbout2.map(({ serial, description, id }) => {
                  return (
                    <div
                      className="flex dark:bg-gray-800 sm:flex-row md:flex-row lg:flex-row xl:flex-row flex-col rounded-md p-10 items-center m-3 bg_white shadow-lg"
                      key={id}
                    >
                      <h1 className="text-7xl font-bold mr-10 dark:text-gray-500 text-gray-400">
                        {serial}
                      </h1>
                      <p className="text-gray-700 dark:text-gray-200 text-sm">{description}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
