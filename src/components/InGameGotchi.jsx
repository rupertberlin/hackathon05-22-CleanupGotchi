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
      <div className="gotchi-values">
        <p id="boxValue">😊Satisfaction: {satisfaction} </p>
        <p id="boxValue">💰Money: {cost}$ </p>
        <p id="boxValue">🏭Carbon Footprint: {impact}</p>
      </div>
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
      <div
        className="text-bubble"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/text-bubble.png"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <br></br>Salut! I am <b>{gotchiName}</b>, your Gotchi.<br></br> Don't
        leave me hungry or sad!
      </div>
    </div>
  );
}
