import React from "react";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-full bg-colors-components dark:bg-gray-800">
      <div className="container m-auto pt-10 pb-2">
        <div className="flex sm:flex-wrap px-3 flex-wrap decoration-clone justify-between">
          <ul className="">
            <li className="mb-3">
              <img src="/img/programmingHeroIcon.png" alt="img" />
            </li>
            <li className="flex items-center my-3">
              <svg
                height="18px"
                width="18px"
                className="mr-3"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                  fill="#fff"
                />
                <path d="M0 0h48v48h-48z" fill="none" />
              </svg>
              <p className="text-gray-100 m-0">
                Level-4, 34, Awal Centre, Banani, Dhaka
              </p>
            </li>
            <li className="flex items-center my-3">
              <svg
                enable-background="new 0 0 24 24"
                height="18px"
                width="18px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className=" object-contain mr-3"
              >
                <path
                  clip-rule="evenodd"
                  d="M11.984,13C10.031,13-0.031,4.891-0.031,4.891V4c0-1.104,0.896-2,2.002-2h20.026  C23.104,2,24,2.896,24,4l-0.016,1C23.984,5,14.031,13,11.984,13z M11.984,15.75c2.141,0,12-7.75,12-7.75L24,20  c0,1.104-0.896,2-2.003,2H1.971c-1.105,0-2.002-0.896-2.002-2l0.016-12C-0.016,8,10.031,15.75,11.984,15.75z"
                  fill-rule="evenodd"
                  fill="#fff"
                />
              </svg>
              <p className="text-gray-100 m-0 ">
                Official :{" "}
                <a
                  className="hover:cursor-pointer no-underline hover:underline hover:text-gray-100 text-gray-100"
                  href="/"
                >
                  web@programming-hero.com
                </a>
              </p>
            </li>
            <li className="flex items-center justify-center my-3">
              <svg
                height="18px"
                width="18px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className=" object-contain mr-3"
              >
                <path d="M0 0h48v48H0z" fill="none" />
                <path
                  d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49C35.1 30.6 37.51 31 40 31c1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2C21.22 42 6 26.78 6 8c0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z"
                  fill="#fff"
                />
              </svg>

              <p className="text-gray-100 m-0">
                Helpline : 01322810867 (Available : 09:00am to 7:00pm)
              </p>
            </li>
            <li className="my-3">
              <img src="/img/googleplay.png" alt="img" />
            </li>
          </ul>
          <div className="mt-2 mb-5">
            <ul className="">
              <li className="text-gray-100 hover:underline my-2">About us</li>
              <li className="text-gray-100 hover:underline my-2">Success</li>
              <li className="text-gray-100 hover:underline my-2">
                Refund policy
              </li>
              <li className="text-gray-100 hover:underline my-2">
                Terms and Conditions
              </li>
              <li className="text-gray-100 hover:underline my-2">
                Privacy Policy
              </li>
            </ul>
            <ul className=" flex items-center">
              <li className="pr-6">
                <svg
                  height="18px"
                  width="18px"
                  style={{
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": 2,
                  }}
                  version="1.1"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z"
                    fill="#fff"
                  />
                </svg>
              </li>
              <li className="pr-6">
                <svg
                  height="18px"
                  width="18px"
                  style={{
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": 2,
                  }}
                  version="1.1"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"
                    fill="#fff"
                  />
                </svg>
              </li>
              <li className="pr-6">
                <svg
                  height="18px"
                  width="18px"
                  style={{
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": 2,
                  }}
                  version="1.1"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-193.446,81c-47.527,0 -53.487,0.201 -72.152,1.053c-18.627,0.85 -31.348,3.808 -42.48,8.135c-11.508,4.472 -21.267,10.456 -30.996,20.184c-9.729,9.729 -15.713,19.489 -20.185,30.996c-4.326,11.132 -7.284,23.853 -8.135,42.48c-0.851,18.665 -1.052,24.625 -1.052,72.152c0,47.527 0.201,53.487 1.052,72.152c0.851,18.627 3.809,31.348 8.135,42.48c4.472,11.507 10.456,21.267 20.185,30.996c9.729,9.729 19.488,15.713 30.996,20.185c11.132,4.326 23.853,7.284 42.48,8.134c18.665,0.852 24.625,1.053 72.152,1.053c47.527,0 53.487,-0.201 72.152,-1.053c18.627,-0.85 31.348,-3.808 42.48,-8.134c11.507,-4.472 21.267,-10.456 30.996,-20.185c9.729,-9.729 15.713,-19.489 20.185,-30.996c4.326,-11.132 7.284,-23.853 8.134,-42.48c0.852,-18.665 1.053,-24.625 1.053,-72.152c0,-47.527 -0.201,-53.487 -1.053,-72.152c-0.85,-18.627 -3.808,-31.348 -8.134,-42.48c-4.472,-11.507 -10.456,-21.267 -20.185,-30.996c-9.729,-9.728 -19.489,-15.712 -30.996,-20.184c-11.132,-4.327 -23.853,-7.285 -42.48,-8.135c-18.665,-0.852 -24.625,-1.053 -72.152,-1.053Zm0,31.532c46.727,0 52.262,0.178 70.715,1.02c17.062,0.779 26.328,3.63 32.495,6.025c8.169,3.175 13.998,6.968 20.122,13.091c6.124,6.124 9.916,11.954 13.091,20.122c2.396,6.167 5.247,15.433 6.025,32.495c0.842,18.453 1.021,23.988 1.021,70.715c0,46.727 -0.179,52.262 -1.021,70.715c-0.778,17.062 -3.629,26.328 -6.025,32.495c-3.175,8.169 -6.967,13.998 -13.091,20.122c-6.124,6.124 -11.953,9.916 -20.122,13.091c-6.167,2.396 -15.433,5.247 -32.495,6.025c-18.45,0.842 -23.985,1.021 -70.715,1.021c-46.73,0 -52.264,-0.179 -70.715,-1.021c-17.062,-0.778 -26.328,-3.629 -32.495,-6.025c-8.169,-3.175 -13.998,-6.967 -20.122,-13.091c-6.124,-6.124 -9.917,-11.953 -13.091,-20.122c-2.396,-6.167 -5.247,-15.433 -6.026,-32.495c-0.842,-18.453 -1.02,-23.988 -1.02,-70.715c0,-46.727 0.178,-52.262 1.02,-70.715c0.779,-17.062 3.63,-26.328 6.026,-32.495c3.174,-8.168 6.967,-13.998 13.091,-20.122c6.124,-6.123 11.953,-9.916 20.122,-13.091c6.167,-2.395 15.433,-5.246 32.495,-6.025c18.453,-0.842 23.988,-1.02 70.715,-1.02Zm0,53.603c-49.631,0 -89.865,40.234 -89.865,89.865c0,49.631 40.234,89.865 89.865,89.865c49.631,0 89.865,-40.234 89.865,-89.865c0,-49.631 -40.234,-89.865 -89.865,-89.865Zm0,148.198c-32.217,0 -58.333,-26.116 -58.333,-58.333c0,-32.217 26.116,-58.333 58.333,-58.333c32.217,0 58.333,26.116 58.333,58.333c0,32.217 -26.116,58.333 -58.333,58.333Zm114.416,-151.748c0,11.598 -9.403,20.999 -21.001,20.999c-11.597,0 -20.999,-9.401 -20.999,-20.999c0,-11.598 9.402,-21 20.999,-21c11.598,0 21.001,9.402 21.001,21Z"
                    fill="#fff"
                  />
                </svg>
              </li>
              <li className="pr-6">
                <svg
                  enable-background="new 0 0 32 32"
                  height="20px"
                  width="20px"
                  id="Layer_1"
                  version="1.0"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <g>
                    <path
                      d="M31.67,9.179c0,0-0.312-2.353-1.271-3.389c-1.217-1.358-2.58-1.366-3.205-1.443C22.717,4,16.002,4,16.002,4   h-0.015c0,0-6.715,0-11.191,0.347C4.171,4.424,2.809,4.432,1.591,5.79C0.633,6.826,0.32,9.179,0.32,9.179S0,11.94,0,14.701v2.588   c0,2.763,0.32,5.523,0.32,5.523s0.312,2.352,1.271,3.386c1.218,1.358,2.815,1.317,3.527,1.459C7.677,27.919,15.995,28,15.995,28   s6.722-0.012,11.199-0.355c0.625-0.08,1.988-0.088,3.205-1.446c0.958-1.034,1.271-3.386,1.271-3.386s0.32-2.761,0.32-5.523v-2.588   C31.99,11.94,31.67,9.179,31.67,9.179z"
                      fill="#fff"
                    />
                    <polygon fill="currentColor" points="12,10 12,22 22,16  " />
                  </g>
                </svg>
              </li>
            </ul>
          </div>

          <div className="">
            <img src="/img/paymentFooter.png" alt="img" />
          </div>
        </div>
        <div className="text-center pt-5">
          <p className="text-gray-100">Copyright © 2021 Md Asif Ahmed</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
