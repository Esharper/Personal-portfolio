import React from "react";
import Bike from "./components/Bike";


const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">

<h1 className="mb-6 text-4xl font-bold text-blue-600">
Welcome to Sharper Enterprise.</h1>

<p className="mb-6 text-2xl font-bold text-blue-600">
  The Best Hyabusa's in Louisiana</p>

<h3 className="mb-6 text-2xl font-bold text-blue-600"> Bike List</h3>

<section>
<Bike
make= "Suzuki"
model= "Hyabusa"
engine= "1,300 cc"
available= "3"
color= "Red"

/>

<Bike
make= "Suzuki"
model= "Hyabusa"
engine= "1,300 cc"
available= "3"
color= "black"
/>

<Bike
make= "Suzuki"
model= {"Hyabusa"}
engine= "1,300 cc"
available= "3"
color= "white"
/>
</section>
  </div>
  

);


export default Home;