"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { tours } from "@/constants";

interface FAQ {
  question: string;
  answer: string;
}

interface ItineraryItem {
  title: string;
  description: string;
}

interface Package {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  cover: string;
  thumbnail: string;
  faqs: FAQ[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryItem[];
}

const fetchTripDetails = async (id: string): Promise<Package | null> => {
  for (const tour of tours) {
    for (const pkg of tour.packages) {
      if (pkg.id === id) {
        return pkg;
      }
    }
  }
  return null;
};

const DetailsPage: React.FC = () => {
  const { id } = useParams() as { id: string };
  const [tripDetails, setTripDetails] = useState<Package | null>(null);

  useEffect(() => {
    const getTripDetails = async () => {
      const details = await fetchTripDetails(id);
      setTripDetails(details);
    };
    getTripDetails();
  }, [id]);

  if (!tripDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-[#f2fdff]">
      <div className="container mx-auto p-4 max-container padding-container">
        <img
          src={tripDetails.cover}
          alt=""
          className="rounded-xl w-full h-[60dvh]"
        />
        <h2 className="text-2xl font-bold mb-2 mt-2 text-center evertrip-text">
          {tripDetails.name} - &#8377;{tripDetails.price}
        </h2>
        <p className="mb-4 text-center">
          <span className="font-semibold">Popular Locations: </span>{" "}
          {tripDetails.description}
        </p>

        <h3 className="text-xl font-semibold mb-2">Itinerary</h3>
        <ul className="mb-4">
          {tripDetails.itinerary.map((item, index) => (
            <div
              className="rounded-xl p-4 my-2 border border-black"
              key={index}
            >
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={"item-" + index}>
                  <AccordionTrigger>
                    <p className="font-bold">{item.title}</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3">{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Inclusions</h3>
        <ul className="mb-4 list-disc list-inside">
          {tripDetails.inclusions.map((inclusion, index) => (
            <li key={index}>{inclusion}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Exclusions</h3>
        <ul className="mb-4 list-disc list-inside">
          {tripDetails.exclusions.map((exclusion, index) => (
            <li key={index}>{exclusion}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">FAQs</h3>
        <div>
          {tripDetails.faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{faq.question}</p>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
