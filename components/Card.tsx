"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface CardProps {
  title: string;
  price: number;
  description: string;
  imageSrc: string;
  duration: string;
  id: string;
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  description,
  imageSrc,
  duration,
  id,
}) => {
  const router = useRouter();

  const navigateToDetails = (id: string) => {
    const encodedId = encodeURIComponent(id);
    router.push(`/tours/${encodedId}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col items-center relative m-2">
      <div className="relative">
        <span className="p-2 bg-white font-bold rounded absolute bottom-[-10px] left-[35%]">
          &#8377; {price}
        </span>
        <img
          src="sample.jpeg"
          width={320}
          height={120}
          className="rounded-xl h-48 object-cover mb-4"
        />
      </div>
      <p className="text-xl text-black text-center mt-4">{title}</p>
      <div className="flex items-center justify-between w-full my-2">
        <p>{description}</p>
        <p className="font-semibold">{duration}</p>
      </div>
      <button className="btn-primary" onClick={() => navigateToDetails(id)}>
        View Details
      </button>
    </div>
  );
};

export default Card;
