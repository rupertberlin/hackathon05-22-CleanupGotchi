import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import TransportData from "../databases/TransportDatabase.json";

const Moves = ({ allConsumption, setAllConsumption }) => {

const navigate = useNavigate();


  return (
    <div>
      {TransportData.map((move) => {
        return (
          <div key={move.id}>
            <strong>This move :</strong>
            {move.name} <strong>use </strong>
            {move.impact} <strong>CO2 </strong>
            <button
              onClick={() => {
                setAllConsumption(
                  // Here, we create a new Object to replace the current one.
                  //Create an empty {}, merge the current object into it, then merge an Object that includes the key/value we want to change.
                  Object.assign({}, allConsumption, {
                    move: [move.name, 5, move.impact, -30],
                  })
                );
                navigate('/');
              }}
            >
              Select this move
            </button>
          </div>
        );
      })}

    </div>
  );
};

export default Moves;