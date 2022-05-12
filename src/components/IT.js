import React from "react";

import ITData from "./ITDatabase.json";

const IT = () => {
  return (
    <div>
      {ITData.map((electronic) => {
        return (
          <div key={electronic.id}>
            <strong>This IT stuff :</strong>
            {electronic.name}<strong>use </strong>
            {electronic.impact} <strong>CO2 </strong>
            <button>Select this IT stuff</button>
          </div>
        );
      })}
    </div>
  );
};

export default IT;