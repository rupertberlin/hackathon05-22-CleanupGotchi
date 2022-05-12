import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./chooseGotchi.css";

export default function ChooseGotchi(props) {
  const [active, setActive] = useState("Martin");
  const gotchiNames = ["Jim", "Moe", "Martin", "Phil", "Barbara", "Fred"];

  const { setCharacter } = props;
  const navigate = useNavigate();

  function clickOnGotchi(name) {
    setActive(name);
  }

  function clickButton() {
    setCharacter(active);
    navigate('/');
  }

  return (
    <div className="choose-gotchi-container">
      <div className="container-gotchi-list">
        {gotchiNames.map((name) => {
          return (
            <div
              key={name}
              onClick={() => clickOnGotchi(name)}
              className={"gotchi" + (name === active ? " gotchi-active" : " ")}
            >
              <img
                src={
                  "/images/characters/" +
                  name[0].toLowerCase() +
                  name.slice(1) +
                  ".png"
                }
                alt={"Character " + name}
                className="img-choose-gotchi"
              />
              <p
                className={
                  "p-w100" + (name === active ? " gotchi-active" : " ")
                }
              >
                {name}
              </p>
            </div>
          );
        })}
      </div>
      <button className="choose-gotchi-btn" onClick={clickButton}>
        START
      </button>
    </div>
  );
}
