import React from 'react'

export default function Bike
({ make, model, engine, available, color}) {
  return (
    <div className="m-5 p-5 bg-red-500 border border-black rounded-md w-250">
        Make: {make}
        <br></br>
        Model:{model}
        <br></br>
        Engine:{engine}
        <br></br>
        Available:{available}
        <br></br>
        Color: {color}
    </div>
  )
}
