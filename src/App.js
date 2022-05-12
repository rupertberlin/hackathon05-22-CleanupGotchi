import ControlledAccordions from "./components/Accordion";
import Food from "./components/Food";
import "./App.css";

const App = () => {
  return (
    <div className="accordion">
      <ControlledAccordions />
      <Food />
      <ControlledAccordions />
    </div>
  );
};

export default App;
