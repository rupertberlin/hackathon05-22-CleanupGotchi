import React from "react";
import {useNavigate} from "react-router-dom";
import ITData from "../databases/ITDatabase.json";

const IT = ({ allConsumption, setAllConsumption }) => {
  const navigate = useNavigate();
  return (
    <div>
      {ITData.map((electronic) => {
        return (
          <div key={electronic.id}>
            <strong>This IT stuff :</strong>
            {electronic.name}&nbsp;
            <button
              onClick={() => {
                setAllConsumption(
                  // Here, we create a new Object to replace the current one.
                  //Create an empty {}, merge the current object into it, then merge an Object that includes the key/value we want to change.
                  Object.assign({}, allConsumption, {
                    electronic: [electronic.name, 5, electronic.impact, -30],
                  })
                );
                navigate('/');
              }}
            >
              Select this IT stuff
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default IT;