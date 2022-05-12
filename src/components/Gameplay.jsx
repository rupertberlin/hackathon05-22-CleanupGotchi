import React from "react";
import ChooseGotchi from "./ChooseGotchi";
import InGameGotchi from "./InGameGotchi";
import { Link } from "react-router-dom";
import "./gameplay.css";

export default function Gameplay(props) {
  const { gotchiName } = props;
  return (
    <>
      <h3>Character: {gotchiName}</h3>
      <InGameGotchi gotchiName={gotchiName} />
    <Link to="/care">
      <button className="give-smth-btn">Give your Gotchi something</button>
      </Link>
    </>
  );
}
