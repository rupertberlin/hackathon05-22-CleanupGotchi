import React from "react";

import TransportData from "./TransportDatabase.json";

const Moves = () => {
  return (
    <div>
      {TransportData.map((move) => {
        return (
          <div key={move.id}>
            <strong>This move :</strong>
            {move.name} <strong>use </strong>
            {move.impact} <strong>CO2 </strong>
            <button>Select this move</button>
          </div>
        );
      })}
    </div>
  );
};

export default Moves;