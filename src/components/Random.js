import React from "react";

import RandomDatabase from "./randomDatabase.json";

const Random = () => {
  return (
    <div>
      {RandomDatabase.map((stuff) => {
        return (
          <div key={stuff.id}>
            <strong>This stuff :</strong>
            {stuff.Name} <strong>use </strong>
            {stuff.Impact} <strong>CO2 </strong>
            <button>Select this stuff</button>
          </div>
        );
      })}
    </div>
  );
};

export default Random;