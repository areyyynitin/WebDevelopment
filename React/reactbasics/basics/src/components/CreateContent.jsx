import React from "react";
import { createContext } from "react";
import { ComponentsA } from "./ComponentsA";
import { ComponentsC } from "./ComponentsC";

export const Data = React.createContext();
export const DataAge = React.createContext();

export const CreateContext = () => {
  const name = "Nitin ";
  const age = 21;
  return (
    <div> <p>CreateContext file</p>
      <div>
        <Data.Provider value={name}>
          <DataAge.Provider value={age}>
           <ComponentsC />
          </DataAge.Provider>
        </Data.Provider>
      </div>
    </div>
  );
};
