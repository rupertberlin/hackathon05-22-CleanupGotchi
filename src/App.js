import { useState, useEffect } from "react";
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

const App = () => {
  const [characterName, setCharacterName] = useState("");

  return (
    <div>
      <h1>CleanUp Gotchi Game</h1>
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
  );
};

export default App;
