const Hero = () => {
  return (
    <section className="bg-[#F2FDFF]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl hero-text">
            Discover the Magic of Incredible India
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Experience the breathtaking beauty and vibrant cultures of Andaman,
            Kashmir, Ladakh and Rajasthan with{" "}
            <span className="font-bold">Evertrip's</span> expertly curated
            tours.
          </p>
          <a href="#contact_us" className="inline-flex btn-primary">
            Enquire Now
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="sample.jpeg" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
