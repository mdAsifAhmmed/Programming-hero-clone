import React from "react";
import Aboutjson from "../json/About.json";
const About = () => {
  return (
    <section>
      <div className="bg-colors-components py-10 dark:bg-gray-800">
        <h1 className="text-center text-gray-100 font-bold text-3xl">About</h1>
        <h1 className="text-center text-gray-100 font-bold text-3xl">
          Programming Hero
        </h1>
        <p className=" w-4/5 m-auto sm:w-4/5  md:w-1/2 text-center py-6 text-gray-100 lg:w-w-10 lg:m-auto">
          আমরা প্রোগ্রামিং হিরো হতে পারি বা না পারি, আমাদের উদ্দেশ্য হচ্ছে যারা
          সিরিয়াসলি প্রোগ্রামিং হিরো হতে চায় তাদের হেল্প করা। তাদের লার্নিং
          প্রসেসকে এঞ্জয়েবল এবং এফেক্টিভ করে তোলা। এই প্রচেষ্টায় আমরা নিত্য নতুন
          জিনিস শিখছি, চেষ্টা করছি।
        </p>
      </div>
      <div className="dark:bg-gray-700">
        <div className="container m-auto py-10">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {Aboutjson.map(({ name, img, pojison }) => {
              return (
                <div className="my-3">
                  <img
                    className=" w-60 h-60 m-auto object-contain"
                    src={img.url}
                    alt={img.uAlt}
                  />
                  <h1 className="text-center font-bold dark:text-gray-100">
                    {name}
                  </h1>
                  <p className="text-center font-medium dark:text-gray-100">
                    {pojison}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
