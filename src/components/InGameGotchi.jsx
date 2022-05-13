import React from "react";
import "./inGameGotchi.css";

export default function InGameGotchi(props) {
  const { gotchiName } = props;

  return (
      
    <div className="in-game-gotchi-container">
      
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
