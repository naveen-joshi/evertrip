"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface TripDetails {
  title: string;
  description: string;
  itinerary: string[];
  faqs: { question: string; answer: string }[];
}

const fetchTripDetails = async (id: string): Promise<TripDetails> => {
  // Simulate a fetch request to get trip details
  return {
    title: decodeURIComponent(id),
    description: "This is a sample description for the trip.",
    itinerary: [
      "Day 1: Arrival and Welcome",
      "Day 2: City Tour",
      "Day 3: Mountain Biking",
      "Day 4: Beach Day",
      "Day 5: Cultural Activities",
      "Day 6: Free Day",
      "Day 7: Departure",
    ],
    faqs: [
      {
        question: "What should I pack?",
        answer: "You should pack casual clothes, biking gear, and beachwear.",
      },
      {
        question: "Is there a guide?",
        answer: "Yes, there will be a guide for the entire trip.",
      },
    ],
  };
};

const DetailsPage: React.FC = () => {
  const { id } = useParams() as { id: string };
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null);

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
        <h2 className="text-2xl font-bold mb-4">{tripDetails.title}</h2>
        <p className="mb-4">{tripDetails.description}</p>

        <h3 className="text-xl font-semibold mb-2">Itinerary</h3>
        <ul className="list-disc list-inside mb-4">
          {tripDetails.itinerary.map((item, index) => (
            <li key={index}>{item}</li>
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
