import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodData from "../databases/Food.json";

// IMPORT allConsumption, setAllConsumption

const Food = ({ allConsumption, setAllConsumption }) => {
  const navigate = useNavigate();

  return (
    <div>
      {FoodData.map((snackData) => {
        return (
          <div key={snackData.id}>
            <strong>This food :</strong>
            {snackData.Name}&nbsp;
            <button
              onClick={() => {
                setAllConsumption(
                  // Here, we create a new Object to replace the current one.
                  //Create an empty {}, merge the current object into it, then merge an Object that includes the key/value we want to change.
                  Object.assign({}, allConsumption, {
                    food: [snackData.Name, 5, snackData.Impact, -5],
                  })
                );
                navigate("/");
              }}
            >
              Select this food
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Food;
