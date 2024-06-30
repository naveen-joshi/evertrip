"use client";

import { tours } from "@/constants";
import Card from "./Card";
import { useState } from "react";

interface Package {
  name: string;
  price: number;
  duration: string;
  description: string;
  image: string;
  id: string;
}

interface Tour {
  state: string;
  packages: Package[];
}

interface TourListProps {
  tours: Tour[];
}

const Tours = () => {
  const [selectedState, setSelectedState] = useState<string>("All");

  const states = ["All", ...tours.map((tour) => tour.state)];

  const filteredTours =
    selectedState === "All"
      ? tours.flatMap((tour) => tour.packages)
      : tours.find((tour) => tour.state === selectedState)?.packages || [];

  return (
    <section className="max-container padding-container my-8" id="tours">
      <h2 className="text-center text-3xl font-bold text-[#b5b5b5]">
        <span className="evertrip-text">Evertrip's</span> Tours
      </h2>
      <div className="flex items-center justify-center mt-2">
        <div className="inline-flex flex-wrap rounded-md shadow-sm">
          {states.map((state, index) => (
            <a
              key={state}
              className={`px-4 py-2 text-sm font-medium bg-white border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
                ${selectedState === state ? "bg-red-600 text-white" : ""}
                ${index === 0 ? "rounded-t-lg md:rounded-l-lg md:rounded-r-none" : ""}
                ${index === states.length - 1 ? "rounded-b-lg md:rounded-r-lg md:rounded-l-none" : ""}`}
              onClick={() => setSelectedState(state)}
            >
              {state}
            </a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTours.map((pkg, index) => (
          <div key={index} className="m-4">
            <Card
              title={pkg.name}
              price={pkg.price}
              description={pkg.description}
              thumbnail={pkg.thumbnail}
              duration={pkg.duration}
              id={pkg.id}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tours;
