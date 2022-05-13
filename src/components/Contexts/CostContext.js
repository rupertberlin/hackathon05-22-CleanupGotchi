import Context from "@mui/base/TabsUnstyled/TabsContext";
import { createContext } from "react";

const CostContext = createContext({money:1000, satisfaction:0});

export default CostContext;