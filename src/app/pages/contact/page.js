"use client"; // This line tells Next.js that this is a Client Component

import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-green-50">
      <h1 className="mb-6 text-4xl font-bold text-green-800">Contact Elgin Sharper</h1>

      <p className="mb-6 text-xl text-green-700 text-center max-w-3xl">
        At Sharper Enterprise and Lawn Services, we pride ourselves on offering the best services at unbeatable prices.
        Contact me today to get a quote and see how we can enhance your outdoor space with luxury and precision.
      </p>

      <div className="text-lg text-green-800 text-center mb-6">
        <p className="mb-2 font-semibold">
          Phone: <a href="tel:+19853273174" className="text-green-600">985-327-3174</a>
        </p>
        <p className="mb-2 font-semibold">
          Email: <a href="mailto:elginsharper87@gmail.com" className="text-green-600">elginsharper87@gmail.com</a>
        </p>
        <p className="mb-6">Specializing in beating out prices and quotes!</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-green-800 text-lg font-semibold mb-2">
            Name:
          </label>
          <input
            className="w-full p-2 border border-green-300 rounded text-black"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-800 text-lg font-semibold mb-2">
            Email:
          </label>
          <input
            className="w-full p-2 border border-green-300 rounded text-black"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required // Make this field required
          />
        </div>

        <div className="mb-6">
          <label className="block text-green-800 text-lg font-semibold mb-2">
            Message:
          </label>
          <textarea
            className="w-full p-2 border border-green-300 rounded text-black"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-800 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {successMessage && <p className="mt-4 text-green-600 text-lg">{successMessage}</p>}
    </div>
  );
};

export default ContactMe;
