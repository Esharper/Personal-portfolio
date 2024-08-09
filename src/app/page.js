import React from "react";
import Service from "./components/Service";

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-green-100">

    <h1 className="mb-6 text-4xl font-bold text-green-800">
      Welcome to Sharper Enterprise and Lawn Services
    </h1>

    <p className="mb-6 text-2xl font-bold text-green-700">
      Premier Luxury Lawn Care in Louisiana
    </p>

    <h3 className="mb-6 text-2xl font-bold text-green-600">Our Exclusive Services</h3>

    <section>
      <Service
        name="Executive Lawn Maintenance"
        description="Top-tier lawn care with weekly maintenance and premium products."
        available="Yes"
        price="Starting at $200/month"
      />

      <Service
        name="Luxury Landscaping Design"
        description="Custom landscape designs with elegant touches, tailored to your preferences."
        available="Yes"
        price="Starting at $5,000"
      />

      <Service
        name="Premium Seasonal Care"
        description="Seasonal treatments to keep your lawn pristine all year round."
        available="Yes"
        price="Starting at $500/season"
      />
    </section>
  </div>
);

export default Home;
