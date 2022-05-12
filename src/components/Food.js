import React from "react";

import FoodData from "./FoodDatabase.json";

const Food =() => {
  return (
  <div>
{FoodData.map(snackData => {
  return (
    <div key={snackData.id}>
      <strong>This food :</strong>{snackData.title} <strong>use </strong>
      {snackData.co2} <strong>CO2 </strong>
      <button>Select this food</button>
    </div>
  )
})}
  </div>
  )
}

export default Food; 
