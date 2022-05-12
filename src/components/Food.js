import React from "react";

import FoodData from "./FoodDatabase.json";

export default function Food() {
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
