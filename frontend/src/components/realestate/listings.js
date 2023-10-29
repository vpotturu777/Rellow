const listings = [
  {
    images: [
      "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
    ],
    title: "Modern 2-Bedroom Apartment",
    price: "275,000",
    location: "4567 Oak Street, City, State, Zip Code",
  },
  {
    images: [
      "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp",
    ],
    title: "Spacious 4-Bedroom House with Pool",
    price: "650,000",
    location: "789 Elm Avenue, City, State, Zip Code",
  },
  {
    images: [
      "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    ],
    title: "Cozy 1-Bedroom Condo",
    price: "150,000",
    location: "1234 Maple Lane, City, State, Zip Code",
  },
  {
    images: ["https://mygate.com/wp-content/uploads/2023/07/110.jpg"],
    title: "Luxury 5-Bedroom Villa with Ocean View",
    price: "1,200,000",
    location: "5678 Pine Road, City, State, Zip Code",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
    ],
    title: "Modern 2-Bedroom Apartment",
    price: "275,000",
    location: "4567 Oak Street, City, State, Zip Code",
  },
  {
    images: [
      "https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg",
    ],
    title: "Spacious 4-Bedroom House with Pool",
    price: "650,000",
    location: "789 Elm Avenue, City, State, Zip Code",
  },
  {
    images: [
      "https://cdn.houseplansservices.com/content/oanrn2hpo2onko9gr94416qock/w991x660.jpg?v=10",
    ],
    title: "Cozy 1-Bedroom Condo",
    price: "150,000",
    location: "1234 Maple Lane, City, State, Zip Code",
  },
  {
    images: [
      "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
    ],
    title: "Modern 2-Bedroom Apartment",
    price: "275,000",
    location: "4567 Oak Street, City, State, Zip Code",
  },
  {
    images: [
      "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp",
    ],
    title: "Spacious 4-Bedroom House with Pool",
    price: "650,000",
    location: "789 Elm Avenue, City, State, Zip Code",
  },
  {
    images: [
      "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    ],
    title: "Cozy 1-Bedroom Condo",
    price: "150,000",
    location: "1234 Maple Lane, City, State, Zip Code",
  },
  {
    images: ["https://mygate.com/wp-content/uploads/2023/07/110.jpg"],
    title: "Luxury 5-Bedroom Villa with Ocean View",
    price: "1,200,000",
    location: "5678 Pine Road, City, State, Zip Code",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
    ],
    title: "Modern 2-Bedroom Apartment",
    price: "275,000",
    location: "4567 Oak Street, City, State, Zip Code",
  },
  {
    images: [
      "https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg",
    ],
    title: "Spacious 4-Bedroom House with Pool",
    price: "650,000",
    location: "789 Elm Avenue, City, State, Zip Code",
  },
  {
    images: [
      "https://cdn.houseplansservices.com/content/oanrn2hpo2onko9gr94416qock/w991x660.jpg?v=10",
    ],
    title: "Cozy 1-Bedroom Condo",
    price: "150,000",
    location: "1234 Maple Lane, City, State, Zip Code",
  },
  {
    images: [
      "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
    ],
    title: "Modern 2-Bedroom Apartment",
    price: "275,000",
    location: "4567 Oak Street, City, State, Zip Code",
  },
  {
    images: [
      "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp",
    ],
    title: "Spacious 4-Bedroom House with Pool",
    price: "650,000",
    location: "789 Elm Avenue, City, State, Zip Code",
  },
  {
    images: [
      "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    ],
    title: "Cozy 1-Bedroom Condo",
    price: "150,000",
    location: "1234 Maple Lane, City, State, Zip Code",
  },
  {
    images: ["https://mygate.com/wp-content/uploads/2023/07/110.jpg"],
    title: "Luxury 5-Bedroom Villa with Ocean View",
    price: "1,200,000",
    location: "5678 Pine Road, City, State, Zip Code",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
    ],
    title: "Modern 2-Bedroom Apartment",
    price: "275,000",
    location: "4567 Oak Street, City, State, Zip Code",
  },
  {
    images: [
      "https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg",
    ],
    title: "Spacious 4-Bedroom House with Pool",
    price: "650,000",
    location: "789 Elm Avenue, City, State, Zip Code",
  },
  {
    images: [
      "https://cdn.houseplansservices.com/content/oanrn2hpo2onko9gr94416qock/w991x660.jpg?v=10",
    ],
    title: "Cozy 1-Bedroom Condo",
    price: "150,000",
    location: "1234 Maple Lane, City, State, Zip Code",
  },
];

  export default listings;