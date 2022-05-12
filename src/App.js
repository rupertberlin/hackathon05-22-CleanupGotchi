import ControlledAccordions from "./components/Accordion";
import "./App.css";

const App = () => {
  return (
    <div className="accordion">
      <ControlledAccordions />

      <ControlledAccordions />
    </div>
  );
};

export default App;
