import React from "react";
import {useNavigate} from "react-router-dom";
import ITData from "../databases/ITDatabase.json";

const IT = () => {
  const navigate = useNavigate();
  return (
    <div>
      {ITData.map((electronic) => {
        return (
          <div key={electronic.id}>
            <strong>This IT stuff :</strong>
            {electronic.name}<strong>use </strong>
            {electronic.impact} <strong>CO2 </strong>
            <button onClick={() => navigate('/')}>Select this IT stuff</button>
          </div>
        );
      })}
    </div>
  );
};

export default IT;