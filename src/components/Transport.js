import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import TransportData from "../databases/TransportDatabase.json";

const Moves = () => {

const navigate = useNavigate();
const [move, setMove] = useState([]);

function clicked() {
  setMove = []
}

  return (
    <div>
      {TransportData.map((move) => {
        return (
          <div key={move.id}>
            <strong>This move :</strong>
            {move.name} <strong>use </strong>
            {move.impact} <strong>CO2 </strong>
            <button onClick={() => navigate('/')}>Select this move</button>
          </div>
        );
      })}

    </div>
  );
};

export default Moves;