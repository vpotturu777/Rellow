import React from "react";
import ListingCard from "./ListingCard";
import listings from "./listings";

const Dashboard = () => {
  return (
    <div className="flex flex-row justify-center">
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
  );
};

export default Dashboard;
