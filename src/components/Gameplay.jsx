import React from "react";
import ChooseGotchi from "./ChooseGotchi";
import InGameGotchi from "./InGameGotchi";
import Time from "./Time";
import { Link } from "react-router-dom";
import "./gameplay.css";

export default function Gameplay(props) {
  const { gotchiName } = props;
  return (
    <>
      <div className="time-container">
        <Time />
    </div>
      <InGameGotchi gotchiName={gotchiName} />
    <Link to="/care">
      <button className="give-smth-btn">Give your Gotchi something</button>
      </Link>
    </>
  );
}
