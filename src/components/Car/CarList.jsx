import React from "react";
import CarCard from "./CarCard";

const CarList = () => {
  // Sample data for car listings
  const cars = [
    {
      id: 1,
      make: "TOYOTA",
      model: "SW4 Diamond",
      year: "2023",
      mileage: "114.9km",
      price: 390000,
      image: "https://via.placeholder.com/600x400?text=TOYOTA+SW4",
    },
    {
      id: 2,
      make: "AUDI",
      model: "RS6 Avant 4.0 TFSI Quattro",
      year: "2023",
      mileage: "80km",
      price: 1180000,
      image: "https://via.placeholder.com/600x400?text=AUDI+RS6",
    },
    {
      id: 3,
      make: "LAND ROVER",
      model: "Range Rover Sport",
      year: "2024",
      mileage: "57km",
      price: 970000,
      image: "https://via.placeholder.com/600x400?text=LAND+ROVER+Range+Rover",
    },
  ];

  return (
    <div className="w-2/3 mx-auto p-4">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 gap-[3rem] sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;