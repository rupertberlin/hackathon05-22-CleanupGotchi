import React from "react";
import ControlledAccordions from "./components/Accordion";
import Food from "./components/Food";
import "./App.css";
import { flexbox } from "@mui/system";

const App = () => {
  // In this object, all choices we make will be stored  (incl. the corresponding happiness values / emissions)
  const [allConsumption, setAllConsumption] = React.useState({
    // Each value should have the form of [ITEM NAME, HAPPINESS POINTS, DAILY EMISSIONS]
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  return (
    <>
      <header>Green Gotchi</header>
      <div></div>
      <div id="allBelowHeaderContainer">
        <div className="accordion">
          <ControlledAccordions />
        </div>
        <div id="containerForCentralDivs">
          <div id="containerForColumnWithHappinessProgress">
            HAPPINESS SECTION
          </div>
          <div id="containerForColumnWithPicture">PICTURE SECTION</div>
          <div id="containerForColumnWithTotalEmissions">
            TOTAL EMISSIONS {allConsumption.breakfast[0]}
          </div>
        </div>
      </div>

      <Food
        allConsumption={allConsumption}
        setAllConsumption={setAllConsumption}
      />
    </>
  );
};

export default App;
