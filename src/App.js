import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ChooseGotchi from "./components/ChooseGotchi";

import ControlledAccordions from "./components/Accordion";

import "./App.css";

const App = () => {
  const [characterName, setCharacterName] = useState("");

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={characterName==="" ?<Navigate to="/choose-gotchi" />:"" }/>
          <Route
            path="/choose-gotchi"
            element={<ChooseGotchi setCharacter={setCharacterName} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
