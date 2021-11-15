import React, { useEffect, useState } from "react";
import Successjson from "../json/Success.json";
const Success = () => {
  const [color, setColor] = useState(1);
  const colors = color;
  useEffect(() => {
    setColor(colors);
  });
  return (
    <section>
      <div className="bg-colors-components py-10 dark:bg-gray-800">
        <h1 className="text-center text-gray-200 font-bold text-3xl">
          Successful Students
        </h1>
        <p className=" w-4/5 m-auto sm:w-4/5  md:w-1/2 text-center py-6 text-gray-100 lg:w-w-10 lg:m-auto">
          আমাদের কোর্স থেকে শিখে যারা বিভিন্ন জায়গায় চাকরি/ইন্টার্ন পেয়েছে তাদের
          মধ্যে কয়েকজন এর প্রোফাইল নিচে দেয়া হলো
        </p>
      </div>
      <div className="dark:bg-gray-700 bg-gray-100">
        <div className="container m-auto py-10">
          <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {Successjson.map(
              ({ id, name, img, pojishon, batch, comment, bg_color }) => {
                return (
                  <div
                    key={id}
                    className="my-3 mx-3 bg-gray-00 dark:bg-gray-800 shadow-lg overflow-hidden rounded-md"
                  >
                    <div className="flex overflow-hidden">
                      <img
                        className=" w-40 h-40 sm:h-60 sm:w-60 md:h-60 md:w-60 lg:h-60 lg:w-60 xl:w-60 xl:h-60 object-contain"
                        src={img.url}
                        alt={img.uAlt}
                      />
                      <div className="p-6 success_coment ml-5">
                        <p className="dark:text-gray-100  pr-3 line_clamp_8 sm:line_clamp_5 md:line_clamp_5 lg:line_clamp_5 xl:line_clamp_5 success_coment_text">
                          {comment}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex success_card_f  justify-between  ${
                        "colors_body_" + id
                      }`}
                    >
                      <div className="px-3 flex justify-center flex-col">
                        <h6 className=" font-bold text-gray-100">{name}</h6>
                        <p className="font-medium text-xs text-gray-100">
                          {pojishon}
                        </p>
                      </div>
                      <p
                        className={`batch flex items-center uppercase text-gray-100 text-sm h-full px-3 ${
                          "colors_body_s_" + id
                        }`}
                      >
                        batch {batch}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
