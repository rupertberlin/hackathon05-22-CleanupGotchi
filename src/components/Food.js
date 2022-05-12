import React from "react";

import FoodData from "./Food.json";

const Food = () => {
  return (
    <div>
      {FoodData.map((snackData) => {
        return (
          <div key={snackData.id}>
            <strong>This food :</strong>
            {snackData.Name} <strong>use </strong>
            {snackData.Impact} <strong>CO2 </strong>
            <button>Select this food</button>
          </div>
        );
      })}
    </div>
  );
};

export default Food;
