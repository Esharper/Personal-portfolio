import React from "react";

const ProductsAndProjects = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-green-50">
    
    {/* Products Section */}
    <h1 className="mb-6 text-4xl font-bold text-green-800">
      Our Premium Products
    </h1>

    <p className="mb-6 text-xl text-green-700 max-w-3xl text-center">
      At Sharper Enterprise and Lawn Services, we believe that exceptional results begin with exceptional products. 
      We use only the finest materials to ensure that your lawn is not only beautiful but also healthy and sustainable. 
      Discover the premium products that set us apart.
    </p>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">Organic Fertilizers</h2>
        <p className="text-gray-700">Our eco-friendly fertilizers promote lush growth without harming the environment. Perfect for maintaining vibrant, green lawns.</p>
      </div>

      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">Premium Grass Seed</h2>
        <p className="text-gray-700">We use only the highest quality grass seed varieties to ensure a resilient, lush lawn that thrives in the Louisiana climate.</p>
      </div>

      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">Custom Blended Mulch</h2>
        <p className="text-gray-700">Our custom blended mulch is designed to enrich your soil while enhancing the aesthetic appeal of your landscape.</p>
      </div>

      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">Luxury Turf Grass</h2>
        <p className="text-gray-700">For those seeking perfection, our luxury turf grass options provide a flawless, manicured appearance.</p>
      </div>

      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">Eco-Friendly Pest Control</h2>
        <p className="text-gray-700">Keep your lawn pest-free with our safe and effective pest control solutions, designed to protect your lawn without compromising the environment.</p>
      </div>

      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">Smart Irrigation Systems</h2>
        <p className="text-gray-700">Our smart irrigation systems ensure your lawn receives the perfect amount of water, reducing waste and promoting healthy growth.</p>
      </div>
    </section>

    {/* Projects Section */}
    <h1 className="mb-6 text-4xl font-bold text-green-800">
      Our Signature Projects
    </h1>

    <p className="mb-6 text-xl text-green-700 max-w-3xl text-center">
      Sharper Enterprise and Lawn Services is proud to have transformed some of the most beautiful lawns in Louisiana. 
      Our projects reflect our commitment to quality, craftsmanship, and innovation. 
      Take a look at some of our signature projects and see the difference that luxury lawn care can make.
    </p>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">The French Quarter Estate</h2>
        <image /> src="french-quarter-estate.jpg" alt="French Quarter Estate" className="w-full h-48 object-cover mb-4 rounded" /
        <p className="text-gray-700">A complete landscape transformation for a historic estate in the heart of the French Quarter, featuring luxury turf grass and a custom irrigation system.</p>
      </div>

      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">The Garden District Oasis</h2>
        <image /> src="garden-district-oasis.jpg" alt="Garden District Oasis" className="w-full h-48 object-cover mb-4 rounded" /
        <p className="text-gray-700">This project involved the creation of a lush, private oasis in the Garden District, complete with organic fertilizers and custom-blended mulch.</p>
      </div>

      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">The Lakeshore Parkland</h2>
        <image /> src="lakeshore-parkland.jpg" alt="Lakeshore Parkland" className="w-full h-48 object-cover mb-4 rounded" /
        <p className="text-gray-700">A sprawling parkland project along Lakeshore Drive, featuring eco-friendly pest control and smart irrigation systems.</p>
      </div>

      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">The Uptown Retreat</h2>
        <image /> src="uptown-retreat.jpg" alt="Uptown Retreat" className="w-full h-48 object-cover mb-4 rounded" /
        <p className="text-gray-700">A sophisticated outdoor living space in Uptown New Orleans, enhanced with luxury turf and sustainable landscaping practices.</p>
      </div>

      <div className="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">The River Ridge Residence</h2>
        <image /> src="river-ridge-residence.jpg" alt="River Ridge Residence" className="w-full h-48 object-cover mb-4 rounded" /
        <p className="text-gray-700">A modern and minimalist lawn design for a contemporary residence in River Ridge, featuring premium grass seed and a custom irrigation system.</p>
      </div>

      <div classNam e="p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-green-800">The Baton Rouge Manor</h2>
        <image /> src="baton-rouge-manor.jpg" alt="Baton Rouge Manor" className="w-full h-48 object-cover mb-4 rounded" /
        <p className="text-gray-700">An elegant and timeless lawn renovation for a manor in Baton Rouge, utilizing organic fertilizers and luxury turf grass.</p>
      </div>
    </section>
  </div>
);

export default ProductsAndProjects;
