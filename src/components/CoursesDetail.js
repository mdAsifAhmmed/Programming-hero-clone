import React, { useState } from "react";
import { Container } from "react-bootstrap";
import coursesClass from "./json/coursesClass.json";
const CoursesDetail = () => {
  const [classdetail, setClassdetail] = useState();
  return (
    <section className="py-10 dark:bg-gray-800">
      <Container>
        <h1 className="text-center font-bold text-3xl text-gray-800 dark:text-gray-50 py-10">
          কোর্সে যা কিছু আছে
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="dark:bg-gray-700 p-3 height_fit bg_white m-2 rounded-md shadow-md dark:shadow-lg">
            <img
              src="/img/coursePoster.png"
              className="w-full h-80 rounded-md"
              alt="img"
            />
            <button className="capitalize w-full my-2 items-center justify-center relative mr-3 py-1 px-1 pl-20 bg-gradient-to-r flex flex-row from-pink-500 rounded-full to-pink-600 hover:from-pink-600 hover:to-pink-500 text-gray-50">
              <p className="m-0 py-2">Enroll now</p>
              <div className="p-2 text-pink-500 bg-gray-50 absolute top-1 right-1 rounded-full ml-3">
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
          <ul className="overflow-y-scroll dark_classInFo">
            {coursesClass.map(({ id, description }) => {
              return (
                <li
                  key={id}
                  className="cursor-pointer"
                  onClick={() => setClassdetail(id)}
                >
                  <p className="m-0 text-2xl dark:text-gray-50 py-3">
                    {description}
                  </p>
                  {classdetail === id ? (
                    <p className={classdetail ? "h-0" : " h-1"}></p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default CoursesDetail;
