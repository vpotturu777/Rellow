import React from "react";
import ListingCard from "./ListingCard";
import listings from "./listings";

const Dashboard = () => {
  return (
    <div>
        <h1 className="fixed font-bold text-xl pl-16 pt-2">Purchased</h1>
      <div className="flex flex-row flex-wrap justify-center mt-6">
        <div className="w-11/12 h-2/6">
          <div className="overflow-x-auto h-[50vh]">
            <div className="flex flex-nowrap p-2">
              {listings.map((listing) => (
                <div className="ListingCard">
                  <ListingCard {...listing} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start ml-16">
        <article class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 m-2 mr-10 w-64 shadow-xl">
          <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <span class="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong class="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span class="text-2xl font-medium text-gray-900"> $404.32 </span>

              <span class="text-xs text-gray-500"> from $240.94 </span>
            </p>
          </div>
        </article>
        <article class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 m-2 mr-10 w-64 shadow-xl">
          <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>

            <span class="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong class="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span class="text-2xl font-medium text-gray-900"> $240.94 </span>

              <span class="text-xs text-gray-500"> from $404.32 </span>
            </p>
          </div>
        </article>{" "}
        <article class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 m-2 mr-10 w-64 shadow-xl">
          <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <span class="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong class="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span class="text-2xl font-medium text-gray-900"> $404.32 </span>

              <span class="text-xs text-gray-500"> from $240.94 </span>
            </p>
          </div>
        </article>
        <article class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 m-2 mr-10 w-64 shadow-xl">
          <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>

            <span class="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong class="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span class="text-2xl font-medium text-gray-900"> $240.94 </span>

              <span class="text-xs text-gray-500"> from $404.32 </span>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Dashboard;
