import React from "react";
import {useState} from "react";
import "./inGameGotchi.css";

export default function InGameGotchi(props) {
  const { gotchiName } = props;
  const [satisfaction, setSatisfaction] = useState([50]);
  const [cost, setCost] = useState([1000]);
  const [impact, setImpact] = ([10]);

  return (
    <div className="in-game-gotchi-container">
        <p>Satisfaction: {satisfaction}</p>
        <p>Money: {cost}$</p>
        <p>Carbon FootPrint: {impact}</p>
      <img
        className="in-game-gotchi-img"
        src={
          "/images/characters/" +
          gotchiName[0].toLowerCase() +
          gotchiName.slice(1) +
          ".png"
        }
        alt="Your Gotchi"
      />
    </div>
  );
}
