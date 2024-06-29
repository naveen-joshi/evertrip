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
        <div className="inline-flex rounded-md shadow-sm">
          {states.map((state) => (
            <a
              key={state}
              className={`px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${selectedState === state ? "bg-blue-700  hover:bg-blue-700" : ""}`}
              onClick={() => setSelectedState(state)}
            >
              {state}
            </a>
          ))}

          {/* <a
            href="#"
            aria-current="page"
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            All
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Leh & Ladakh
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Rajasthan
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          >
            Himachal Pradesh
          </a> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTours.map((pkg, index) => (
          <div key={index} className="m-4">
            {/* <h2 className="text-2xl font-bold mb-4">{tour.state}</h2> */}
            <Card
              key={index}
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
