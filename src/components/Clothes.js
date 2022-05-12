import React from "react";

import ClothesData from "./ClothesDatabase.json";

const Clothes = () => {
  return (
    <div>
      {ClothesData.map((clothe) => {
        return (
          <div key={clothe.id}>
            <strong>This clothe :</strong>
            {clothe.name} <strong>use </strong>
            {clothe.impact} <strong>CO2 </strong>
            <button>Select this clothe</button>
          </div>
        );
      })}
    </div>
  );
};

export default Clothes;