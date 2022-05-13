import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Food from "./Food";
import Clothes from "./Clothes";
import IT from "./IT";
import Moves from "./Transport";

export default function ControlledAccordions({
  allConsumption,
  setAllConsumption,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Food</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            What should I eat today?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Food
              allConsumption={allConsumption}
              setAllConsumption={setAllConsumption}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Clothes</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            What should I wear today?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Clothes
              allConsumption={allConsumption}
              setAllConsumption={setAllConsumption}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Transport
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            How could I move?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Moves
              allConsumption={allConsumption}
              setAllConsumption={setAllConsumption}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>IT stuff</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            What can I do?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <IT
              allConsumption={allConsumption}
              setAllConsumption={setAllConsumption}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
