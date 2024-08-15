"use client"
// src/components/Service.js
import React from 'react';

const Service = ({ name, description, available, price }) => (
  <div className="service bg-white p-4 border rounded shadow-md mb-4">
    <h2 className="text-xl font-semibold text-green-800">{name}</h2>
    <p className="text-gray-700 mt-2">{description}</p>
    <p className="mt-2 font-medium">Available: {available}</p>
    <p className="mt-2 font-bold text-green-600">{price}</p>
  </div>
);

export default Service;
