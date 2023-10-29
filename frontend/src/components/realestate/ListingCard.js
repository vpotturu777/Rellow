import React from "react";

function ListingCard(props) {
  const { images, title, price, location } = props;

  return (
    <div className="listing-card bg-white border rounded-xl shadow-lg overflow-hidden my-2 mx-2 w-60">
      <div className="image-carousel">
        {/* Insert a carousel or image slider component here to display property images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property ${index}`}
            className="w-full h-40 object-cover rounded-b-xl"
          />
        ))}
      </div>
      <div className="property-details p-4">
        <h2 className="property-title text-md font-bold mb-2">{title}</h2>
        <p className="property-price text-md font-bold text-blue-500">
          ${price}
        </p>
        <p className="property-location text-sm text-gray-600">{location}</p>
      </div>
    </div>
  );
}

export default ListingCard;
