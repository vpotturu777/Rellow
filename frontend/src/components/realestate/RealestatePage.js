import React from "react";
import ListingCard from "./ListingCard";
import listings from "./listings";
import Tabs from "./RealestateTabs";

function RealestatePage() {
  return (
    <div class="flex flex-col px-2">
      <Tabs />
      <div class="w-2/3 h-2/6">
        <div className="overflow-y-auto h-[88vh]">
          <div className="flex flex-wrap p-2">
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
}

export default RealestatePage;
