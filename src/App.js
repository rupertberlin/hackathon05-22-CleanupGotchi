import React, { useState, useEffect } from "react";
import background1 from "./images/pexels-tom-fisk-2739664.jpg";
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
    food: [],
    clothes: [],
    transport: [],
    it: [],
    // In this object, all consumption choices will be stored  (incl. the corresponding happiness values / emissions)
    // Each value should have the form of [ITEM NAME, HAPPINESS POINTS, DAILY EMISSIONS, PRICE]
  });
  const [satisfaction, setSatisfaction] = useState(0);
  const [cost, setCost] = useState(0);
  const [impact, setImpact] = useState(0);

  useEffect(() => {
    let updatedSatisfaction = 0;
    for (let x in allConsumption) {
      updatedSatisfaction += allConsumption[x][1];
    }
    setSatisfaction(updatedSatisfaction);
    let updatedCost = 0;
    for (let x in allConsumption) {
      updatedCost += allConsumption[x][2];
    }
    setCost(updatedCost);
    let updatedImpact = 0;
    for (let x in allConsumption) {
      updatedImpact += allConsumption[x][3];
    }
    setImpact(updatedImpact);
  });

  return (
    <div>
      <header>Get green, Gotchi! </header>
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
                        <Gameplay
                          gotchiName={characterName}
                          satisfaction={satisfaction}
                          cost={cost}
                          impact={impact}
                        />
                      )
                    }
                  />
                  <Route
                    path="/choose-gotchi"
                    element={<ChooseGotchi setCharacter={setCharacterName} />}
                  />
                  <Route
                    path="/care"
                    element={
                      <ControlledAccordions
                        allConsumption={allConsumption}
                        setAllConsumption={setAllConsumption}
                      />
                    }
                  />
                </Routes>
              </Router>
            </div>
          </div>
          {/* <div id="containerForColumnWithTotalEmissions">
            TOTAL EMISSIONS {allConsumption.breakfast[0]}
          </div> */}
        </div>
      </div>
      <img id="backgroundImage" src={background1} alt="Green Rainforest"></img>
    </div>
  );
};

export default App;
