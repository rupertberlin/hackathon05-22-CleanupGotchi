import React from "react";
import "./inGameGotchi.css";

export default function InGameGotchi({
  gotchiName,
  satisfaction,
  cost,
  impact,
}) {
  return (
    <div className="in-game-gotchi-container">
      <p>Satisfaction: {satisfaction}</p>
      <p>Money: {cost}$</p>
      <p>Carbon Footprint: {impact}</p>
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
