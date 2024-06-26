"use client";

import { useState } from "react";
import { DatePickerWithRange } from "./ui/datepickerwithrange";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";

const AboutUs = () => {
  const inputClass = `block h-11 w-full min-w-[300px] rounded-md border bg-background text-[#585757] px-3 py-2  ring-offset-primary file:border-0 file:bg-transparent file:font-medium placeholder:text-[#b6b2b2] caret-primary focus-visible:outline-none text-[16px] hover:border-1 hover:border-primary focus-visible:border-2 focus-visible:border-primary  mt-1`;

  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [noTravellers, setnoTravellers] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, settravelDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      contactNumber,
      email,
      message,
      noTravellers,
      destination,
      travelDate,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <section className="max-container padding-container my-8" id="contact_us">
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl text-center section-heading text-[#b5b5b5]">
          Plan Customised Tour with{" "}
          <span className="evertrip-text">Evertrip</span>
        </h2>

        <div className="flex flex-col gap-4 my-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              className={inputClass}
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              className={inputClass}
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="email"
              className={inputClass}
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              className={inputClass}
              placeholder="No. of Travellers"
              value={noTravellers}
              onChange={(e) => setnoTravellers(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <select
              id="countries"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className={inputClass}
            >
              <option defaultValue={"andaman"} disabled>
                Select Preferred Destination
              </option>
              <option value="andaman">Andaman & Nicobar Island</option>
              <option value="kashmir">Kashmir</option>
              <option value="ladakh">Ladakh</option>
              <option value="rajasthan">Rajasthan</option>
            </select>
            <input
              type="date"
              className={inputClass}
              placeholder="Travel Date"
              value={travelDate}
              onChange={(e) => settravelDate(e.target.value)}
              required
            />
          </div>
          <input
            type="text"
            className={inputClass}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default AboutUs;
