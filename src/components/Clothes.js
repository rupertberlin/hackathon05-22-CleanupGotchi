import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


import ClothesData from "../databases/ClothesDatabase.json";

const Clothes = () => {
  const navigate = useNavigate();
  const [allFood, setAllFood] = useState(null);

  return (
    <div>
      {ClothesData.map((clothes) => {
        return (
          <div key={clothes.id}>
            <strong>This clothe :</strong>
            {clothes.name} <strong>use </strong>
            {clothes.impact} <strong>CO2 </strong>
            <button
              onClick={() => {
                setAllFood(
                  // Here, we create a new Object to replace the current one.
                  //Create an empty {}, merge the current object into it, then merge an Object that includes the key/value we want to change.
                  Object.assign({}, setAllFood, {
                    clothes: [clothes.name, 5, clothes.impact, -30],
                  })
                );
                navigate('/');
              }}
            >
              Select this clothe
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Clothes;
