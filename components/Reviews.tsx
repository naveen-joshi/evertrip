const Reviews = () => {
  return (
    <section className="max-container padding-container my-8">
      <h2 className="text-3xl text-center section-heading text-[#b5b5b5]">
        What Our Clients Say About{" "}
        <span className="evertrip-text">Evertrip</span>
      </h2>

      <div className="my-4 flex flex-col md:flex-row gap-6">
        <div className="bg-white rounded shadow-md p-4">
          <div className="flex gap-6 items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-slate-500 flex items-center justify-center">
              H
            </div>
            <div className="flex flex-col">
              <p>Happy Family</p>
              <p>Some Tour</p>
            </div>
          </div>
          <p>
            "We planned our honeymoon tour to Sikkim with Sikkim Darjeeling
            Taxi. They effortlessly arranged our flight tickets, hotel bookings
            and compiled our sightseeing package at cost-effective rates. We had
            an unforgettable honeymoon tour. Thank you Sikkim Darjeeling Taxi."
          </p>
        </div>
        <div className="bg-white rounded shadow-md p-4">
          <div className="flex gap-6 items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-slate-500 flex items-center justify-center">
              H
            </div>
            <div className="flex flex-col">
              <p>Happy Family</p>
              <p>Some Tour</p>
            </div>
          </div>
          <p>
            "We planned our honeymoon tour to Sikkim with Sikkim Darjeeling
            Taxi. They effortlessly arranged our flight tickets, hotel bookings
            and compiled our sightseeing package at cost-effective rates. We had
            an unforgettable honeymoon tour. Thank you Sikkim Darjeeling Taxi."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
