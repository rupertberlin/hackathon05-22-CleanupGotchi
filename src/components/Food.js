import React from "react";

import FoodData from "./FoodDatabase.json";

const Food =() => {
  return (
  <div>
{FoodData.map(snackData => {
  return (
    <div key={snackData.id}>
      {snackData.title}
    </div>
  )
})}
  </div>
  )
}

export default Food; 
