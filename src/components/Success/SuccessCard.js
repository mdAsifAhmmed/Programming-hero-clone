import React from "react";
import { Pagination } from "@material-ui/lab";
import { usePagination } from "./hook/Pagination";
const SuccessCard = ({ yourVideos }) => {
  // eslint-disable-next-line no-unused-vars
  const [totalPages, startPageIndex, endPageIndex, currentPage, dispPage] =
    usePagination(2, yourVideos.length);
  return (
    <div className="dark:bg-gray-700 bg-gray-100">
      <div className="container m-auto py-10">
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {(() => {
            const dispPosts = [];
            for (let i = startPageIndex; i <= endPageIndex; i++) {
              dispPosts.push(
                <div
                  key={yourVideos[i].id}
                  className="my-3 mx-3 bg-gray-00 bg-white dark:bg-gray-800 shadow-lg overflow-hidden rounded-md"
                >
                  <div className="flex overflow-hidden">
                    <img
                      className=" w-40 h-40 sm:h-60 sm:w-60 md:h-60 md:w-60 lg:h-60 lg:w-60 xl:w-60 xl:h-60 object-cover"
                      src={yourVideos[i].img.url}
                      alt={yourVideos[i].img.salt}
                    />
                    <div className="p-6 success_coment ml-5">
                      <p className="dark:text-gray-100  pr-3 line_clamp_8 sm:line_clamp_5 md:line_clamp_5 lg:line_clamp_5 xl:line_clamp_5 success_coment_text">
                        {yourVideos[i].comment}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex success_card_f  justify-between  ${
                      "colors_body_" + yourVideos[i].id
                    }`}
                  >
                    <div className="px-3 flex justify-center flex-col">
                      <h6 className=" font-bold text-gray-100">{yourVideos[i].name}</h6>
                      <p className="font-medium text-xs text-gray-100">
                        {yourVideos[i].pojishon}
                      </p>
                    </div>
                    <p
                      className={`batch flex items-center uppercase text-gray-100 text-sm h-full px-3 ${
                        "colors_body_s_" + yourVideos[i].id
                      }`}
                    >
                      batch {yourVideos[i].batch}
                    </p>
                  </div>
                </div>
              );
            }
            return dispPosts
          })()}
          {/* {Successjson.map(
              ({ id, name, img, pojishon, batch, comment, bg_color }) => {
                return (
                  <div
                    key={id}
                    className="my-3 mx-3 bg-gray-00 bg-white dark:bg-gray-800 shadow-lg overflow-hidden rounded-md"
                  >
                    <div className="flex overflow-hidden">
                      <img
                        className=" w-40 h-40 sm:h-60 sm:w-60 md:h-60 md:w-60 lg:h-60 lg:w-60 xl:w-60 xl:h-60 object-cover"
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
            )} */}
        </div>
        <div className="w-80 m-auto">
          <Pagination
            count={totalPages}
            color="primary"
            onChange={(event, value) => dispPage(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
