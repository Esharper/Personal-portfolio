// components/Service.js
import React from "react";

const Service = ({ name, description, available, price }) => (
  <div className="p-4 mb-4 bg-white rounded shadow-md">
    <h2 className="text-xl font-bold text-green-800">{name}</h2>
    <p className="text-gray-700">{description}</p>
    <p className="text-gray-500">Available: {available}</p>
    <p className="text-gray-700 font-bold">Price: {price}</p>
  </div>
);

export default Service;
