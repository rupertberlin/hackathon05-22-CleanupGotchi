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
<<<<<<< HEAD
      
=======
      <p>Satisfaction: {satisfaction}</p>
      <p>Money: {cost}$</p>
      <p>Carbon Footprint: {impact}</p>
>>>>>>> 9029ba1dfe16c2081f964a3efad8b986b81cbb93
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
        Salut <b>{gotchiName}!</b>, your Gotchi. Don't let me hungry
        or beeing sad!
      </div>
    </div>
  );
}
