import React from "react";
import CoursesInfoData from "./json/CoursesInfo.json";
const CoursesInfo = () => {
  return (
    <div className="bg_white dark:bg-gray-800 py-20">
      <div className="container m-auto">
        <div className="dark:bg-gray-800 transform bg_white -translate-y-48 z-50 px-5 py-10 shadow-xl rounded-3xl">
          <h1 className="text-center text-3xl dark:text-gray-50 font-bold mt-5 pb-10 text-gray-800">
            পরবর্তী ব্যাচের সময় সূচি
          </h1>
          <div className="my-5 flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <div className="flex flex-row my-1 items-center">
                <div className=" p-1 text-gray-100 rounded-md mr-2 bg-gradient-to-r  from-yellow-600 to-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-calendar"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>

                <p className="text-gray-800 m-0 dark:text-gray-100">
                  রেজিস্ট্রেশন শুরু: ডিসেম্বর ১০, ২০২১ (শুক্রবার)
                </p>
              </div>
              <div className="flex flex-row my-1 items-center">
                <div className=" p-1 text-gray-100 rounded-md mr-2  bg-gradient-to-r from-green-600 to-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-bookmark"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>

                <p className="text-gray-800 m-0 dark:text-gray-100">
                  রেজিস্ট্রেশন শেষ: ডিসেম্বর ২৪, ২০২১ (শুক্রবার)
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex my-1 flex-row  items-center">
                <div className=" p-1 text-gray-100 rounded-md mr-2 bg-gradient-to-r from-purple-600 to-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>

                <p className="text-gray-800 m-0 dark:text-gray-100">
                  ব্যাচের ওরিয়েন্টশন: ডিসেম্বর ২৮, ২০২১ (মঙ্গলবার)
                </p>
              </div>
              <div className="flex flex-row my-1 items-center">
                <div className=" p-1 text-gray-100 rounded-md mr-2 bg-gradient-to-r from-pink-600 to-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-monitor"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>

                <p className="text-gray-800 m-0 dark:text-gray-100">
                  ক্লাস শুরু: ডিসেম্বর ৩১, ২০২১(শুক্রবার)
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:flex-col md:flex-row lg:flex-row xl:flex-row py-1 flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
            <p className="text-gray-50 pl-4 text-lg m-0 font-normal">
              তুমি ৫ম ব্যাচে এনরোল করতে আগ্রহি হলে, ওয়েবসাইটে রেজিস্ট্রেশন করে
              রাখো
            </p>
            <button className="capitalize items-center justify-around mr-1 py-2 pr-10 px-1 pl-5 bg-gradient-to-r flex flex-row from-pink-600 rounded-full to-pink-500 hover:from-pink-500 hover:to-pink-600 text-gray-50">
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
        </div>
      </div>
      <div className="container m-auto">
        <h1 className="text-gray-800 dark:text-gray-50 text-center text-3xl font-bold mb-16">
          এই কোর্স থেকে কি কি শিখতে পারবে:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="dark:bg-gray-700 height_fit bg_white m-2 rounded-md shadow-md dark:shadow-lg">
            <div className="p-10">
              <img
                src="/img/coursePoster.png"
                className="w-full h-80 rounded-md"
                alt="img"
              />
              <button className="rounded-md text-base p-3 text-gray-50 w-full dark:bg-gray-800 shadow-lg bg-blue-800 my-5">
                Registration is Closed
              </button>
              <div className="flex flex-row mb-10">
                <div className="w-full py-3 dark:bg-gray-800 mx-2 flex justify-evenly items-center rounded-full shadow-md">
                  <img src="/img/video.png" alt="img" />
                  <p className="dark:text-gray-50 m-0">660 Videos</p>
                </div>
                <div className="w-full py-3 dark:bg-gray-800 mx-2 flex justify-evenly items-center rounded-full shadow-md">
                  <img src="/img/quizes.png" alt="img" />
                  <p className="dark:text-gray-50 m-0">300 Quizes</p>
                </div>
                <div className="w-full py-3 dark:bg-gray-800 mx-2 flex justify-evenly items-center rounded-full shadow-md">
                  <img src="/img/assignment.png" alt="img" />
                  <p className="dark:text-gray-50 m-0">11 Assignment</p>
                </div>
              </div>
              <h2 className="text-4xl font-medium dark:text-gray-50 text-gray-800">
                ৳ 5500
              </h2>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {CoursesInfoData.map(({ id, content }) => {
                return (
                  <div
                    key={id}
                    className="dark:bg-gray-800 bg_white dark:text-gray-100 flex flex-row sm:flex-col lg:flex-col md:flex-col xl:flex-col m-2 p-4 rounded-md shadow-md text-gray-700"
                  >
                    <div className="mr-3">
                      <svg
                        style={{
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          "stroke-linejoin": "round",
                          "stroke-miterlimit": 2,
                        }}
                        aria-hidden="true"
                        focusable="false"
                        data-icon="check-square"
                        role="img"
                        data-prefix="fas"
                        viewBox="0 0 448 512"
                        width="24px"
                        height="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                      >
                        <path
                          d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="m-0">{content}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <p className="dark:bg-gray-800 bg_white dark:text-gray-50 flex m-2 p-4 rounded-md shadow-md text-gray-700">
                তবে যারা একটু ফাঁকিবাজ তাদের জন্য দুঃসংবাদ হচ্ছে। প্রত্যেক ভিডিও
                এর পরে প্রশ্ন থাকছে। প্রত্যেক মডিউল শেষে ফাইনাল কুইজ আছে। আর
                প্রত্যেকটা প্রজেক্টের পর একটা করে টেক-এওয়ে হোমওয়ার্ক আছে।
              </p>
              <p className="dark:bg-gray-800 bg_white dark:text-gray-50 flex m-2 p-4 rounded-md shadow-md text-gray-700">
                এই কোর্স ফলো করে কেউ যদি ওয়েব ডেভেলপার না হতে পারে, দুনিয়ার আর
                কেউ তাকে ওয়েব ডেভেলপার বানাতে পারবে না।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesInfo;
