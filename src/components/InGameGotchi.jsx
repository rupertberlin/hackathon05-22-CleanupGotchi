import React from "react";
import "./inGameGotchi.css";

export default function InGameGotchi(props) {
  const { gotchiName } = props;

  return (
    <div className="in-game-gotchi-container">
        <p>Satisfaction: 80</p>
        <p>Money: 566$</p>
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
