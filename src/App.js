import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ChooseGotchi from "./components/ChooseGotchi";
import Gameplay from "./components/Gameplay";
import ControlledAccordions from "./components/Accordion";
import Food from "./components/Food";
import Time from "./components/Time";

import "./App.css";
import { flexbox } from "@mui/system";

const App = () => {
  const [characterName, setCharacterName] = useState("");
  const [allConsumption, setAllConsumption] = React.useState({
    // In this object, all choices we make will be stored  (incl. the corresponding happiness values / emissions)
    // Each value should have the form of [ITEM NAME, HAPPINESS POINTS, DAILY EMISSIONS]
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  return (
    <div>
      <header>Get green, Gotchi!</header>
      <div></div>
      <div id="allBelowHeaderContainer">
        {/* <div className="accordion">
          <ControlledAccordions />
        </div> */}
        <div id="containerForCentralDivs">
          {/* <div id="containerForColumnWithHappinessProgress">
            HAPPINESS SECTION
          </div> */}
          <div id="containerForColumnWithPicture">
            <div className="game-container">
              <Router>
                <Routes>
                  <Route
                    path="/"
                    element={
                      characterName === "" ? (
                        <Navigate to="/choose-gotchi" />
                      ) : (
                        <Gameplay gotchiName={characterName} />
                      )
                    }
                  />
                  <Route
                    path="/choose-gotchi"
                    element={<ChooseGotchi setCharacter={setCharacterName} />}
                  />
                  <Route path="/care" element={<ControlledAccordions />} />
                </Routes>
              </Router>
            </div>
          </div>
          {/* <div id="containerForColumnWithTotalEmissions">
            TOTAL EMISSIONS {allConsumption.breakfast[0]}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
