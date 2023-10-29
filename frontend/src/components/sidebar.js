import React from "react";

function Sidebar() {
  return (
    <div class="flex justify-start ">
      <div class="relative bg-gray-800 rounded-2xl my-2 mx-3">
        <div class="flex flex-col">
          <div class="h-max w-50 h-[98vh]">
            <nav class="px-6">
              <a
                class="flex items-center justify-start p-2 my-6 text-white transition-colors duration-200 hover:text-gray-800 bg-gray-50 dark:bg-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                href="#"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#5e72e4"
                    d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
                  ></path>
                </svg>
                <span class="mx-4 font-normal text-md">Rellow</span>
              </a>
              <div>
                <p class="w-full pb-2 mb-4 ml-2 font-normal text-gray-300 border-b-2 border-gray-100 text-md">
                  Properties
                </p>
                <a
                  class="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  href="http://localhost:3000/realestate/manage"
                >
                  <span class="text-left">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 2048 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#5e72e4"
                        d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                      ></path>
                    </svg>
                  </span>
                  <span class="mx-4 font-normal text-md">Manage</span>
                </a>
                <a
                  class="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  href="http://localhost:3000/realestate/dashboard"
                >
                  <span class="text-left">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="m-auto"
                      viewBox="0 0 2048 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#5e72e4"
                        d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
                      ></path>
                    </svg>
                  </span>
                  <span class="mx-4 font-normal text-md">Dashboard</span>
                </a>
                <a
                  class="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  href="http://localhost:3000/realestate/chat"
                >
                  <span class="text-left">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="m-auto"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#5e72e4"
                        d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"
                      />
                    </svg>
                  </span>
                  <span class="mx-4 font-normal text-md">Chat</span>
                </a>
              </div>
              <div>
                <p class="w-full pb-2 mb-4 ml-2 font-normal text-gray-300 border-b-2 border-gray-100 text-md">
                  Stock
                </p>
                <a
                  class="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  href="#"
                >
                  <span class="text-left">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 2048 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#5e72e4"
                        d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                      ></path>
                    </svg>
                  </span>
                  <span class="mx-4 font-normal text-md">Manage</span>
                </a>
                <a
                  class="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  href="#"
                >
                  <span class="text-left">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="m-auto"
                      viewBox="0 0 2048 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#5e72e4"
                        d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"
                      ></path>
                    </svg>
                  </span>
                  <span class="mx-4 font-normal text-md">Dashboard</span>
                </a>
              </div>
              <div>
                <p class="w-full pb-2 mb-4 ml-2 font-normal text-gray-300 border-b-2 border-gray-100 text-md">
                  Crypto
                </p>
                <a
                  class="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  href="#"
                >
                  <span class="text-left">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 2048 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#5e72e4"
                        d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                      ></path>
                    </svg>
                  </span>
                  <span class="mx-4 font-normal text-md">Manage</span>
                </a>
              </div>
              <div className="flex items-center pb-5"></div>
              <div>
                <a
                  class="flex items-center justify-start align-bottom p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  href="#"
                >
                  <span class="text-left">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 2048 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#5e72e4"
                        d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                      ></path>
                    </svg>
                  </span>
                  <span class="mx-4 font-normal text-md">Help & Support</span>
                </a>
                <a
                  class="flex items-center justify-start align-bottom p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                  href="#"
                >
                  <span class="text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#be123c"
                        d="M 10.490234 2 C 10.011234 2 9.6017656 2.3385938 9.5097656 2.8085938 L 9.1757812 4.5234375 C 8.3550224 4.8338012 7.5961042 5.2674041 6.9296875 5.8144531 L 5.2851562 5.2480469 C 4.8321563 5.0920469 4.33375 5.2793594 4.09375 5.6933594 L 2.5859375 8.3066406 C 2.3469375 8.7216406 2.4339219 9.2485 2.7949219 9.5625 L 4.1132812 10.708984 C 4.0447181 11.130337 4 11.559284 4 12 C 4 12.440716 4.0447181 12.869663 4.1132812 13.291016 L 2.7949219 14.4375 C 2.4339219 14.7515 2.3469375 15.278359 2.5859375 15.693359 L 4.09375 18.306641 C 4.33275 18.721641 4.8321562 18.908906 5.2851562 18.753906 L 6.9296875 18.1875 C 7.5958842 18.734206 8.3553934 19.166339 9.1757812 19.476562 L 9.5097656 21.191406 C 9.6017656 21.661406 10.011234 22 10.490234 22 L 13.509766 22 C 13.988766 22 14.398234 21.661406 14.490234 21.191406 L 14.824219 19.476562 C 15.644978 19.166199 16.403896 18.732596 17.070312 18.185547 L 18.714844 18.751953 C 19.167844 18.907953 19.66625 18.721641 19.90625 18.306641 L 21.414062 15.691406 C 21.653063 15.276406 21.566078 14.7515 21.205078 14.4375 L 19.886719 13.291016 C 19.955282 12.869663 20 12.440716 20 12 C 20 11.559284 19.955282 11.130337 19.886719 10.708984 L 21.205078 9.5625 C 21.566078 9.2485 21.653063 8.7216406 21.414062 8.3066406 L 19.90625 5.6933594 C 19.66725 5.2783594 19.167844 5.0910937 18.714844 5.2460938 L 17.070312 5.8125 C 16.404116 5.2657937 15.644607 4.8336609 14.824219 4.5234375 L 14.490234 2.8085938 C 14.398234 2.3385937 13.988766 2 13.509766 2 L 10.490234 2 z M 12 8 C 14.209 8 16 9.791 16 12 C 16 14.209 14.209 16 12 16 C 9.791 16 8 14.209 8 12 C 8 9.791 9.791 8 12 8 z"
                      ></path>
                    </svg>
                  </span>
                  <span class="mx-4 font-normal text-md text-rose-700">
                    Logout
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
