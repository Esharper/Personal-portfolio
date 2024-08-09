"use client"; // Ensures this component is rendered on the client side

import React from "react";

// Define an array of project objects
const projects = [
  {
    title: "Luxury Lawn Care Service",
    description: "Enhancing outdoor spaces with precision and luxury.",
    link: "https://example.com/project1", // Replace with actual URL
  },
  {
    title: "High-Performance Mowers",
    description: "Top-of-the-line riding lawnmowers for a perfect cut.",
    link: "https://example.com/project2", // Replace with actual URL
  },
  {
    title: "Custom Landscaping Designs",
    description: "Tailored landscaping solutions to meet your needs.",
    link: "https://example.com/project3", // Replace with actual URL
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Our Projects</h1>

      <p className="mb-6 text-xl text-gray-700 text-center max-w-3xl">
        Explore some of our recent projects that showcase our commitment to excellence and our ability to deliver outstanding results.
      </p>

      <div className="w-full max-w-4xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-6 p-6 bg-white shadow-lg rounded-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            <p className="mt-2 text-gray-700">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
