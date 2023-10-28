import React from "react";

function Tabs() {
  return (
    <div>
      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 my-2 mx-6">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
            >
              Home
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active "
              aria-current="page"
            >
              Calendar
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
            >
              Results
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
            >
              Live
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tabs;
