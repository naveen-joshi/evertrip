import Image from "next/image";
import Card from "@/components/Card";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import Reviews from "@/components/Reviews";
import AboutUs from "@/components/AboutUs";
import { client } from "@/utils/sanity";

// Fetch content with GROQ
// async function getContent() {
//   const CONTENT_QUERY = `*[_type == "tour"] {
//   ...,
//   images[] {
//     image {
//       ...,
//       asset->
//     }
//   },
//   content[] {
//     _type,
//     ...,
//     defined(string) => string
//   },
//   highlights[],
//   category->,
//   included[],
//   excluded[],
//   itinerary[] {
//     null
//   }
// }
// `;
//   const content = await client.fetch(CONTENT_QUERY);
//   return content;
// }

export default function Home() {
  // getContent().then((content) => console.log(content));
  return (
    <>
      <Hero />
      <Tours />
      <Features />
      {/* <Reviews /> */}
      <AboutUs />
    </>
  );
}
