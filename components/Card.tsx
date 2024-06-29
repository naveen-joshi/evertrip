"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface CardProps {
  title: string;
  price: number;
  description: string;
  cover?: string;
  thumbnail: string;
  duration: string;
  id: string;
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  description,
  cover,
  thumbnail,
  duration,
  id,
}) => {
  const router = useRouter();

  const navigateToDetails = (id: string) => {
    const encodedId = encodeURIComponent(id);
    router.push(`/tours/${encodedId}`);
  };

  return (
    <div className="bg-white shadow-xl p-2 flex flex-col items-center relative m-2 card-border">
      <div className="relative">
        <span className="p-2 bg-white font-bold rounded absolute bottom-[-10px] left-[35%]">
          &#8377; {price}
        </span>
        <img
          src={thumbnail}
          width={320}
          height={120}
          className="rounded-xl h-48 object-cover mb-4"
        />
      </div>
      <p className="font-bold text-black text-center mt-4">{title}</p>
      <div className="flex items-center justify-between w-full my-2">
        <p className="text-center">
          {description} ({duration})
        </p>
      </div>
      <button
        className="bg-orange-400 py-1 px-3 flex items-center rounded text-white font-semibold"
        onClick={() => navigateToDetails(id)}
      >
        View Details
      </button>
    </div>
  );
};

export default Card;
