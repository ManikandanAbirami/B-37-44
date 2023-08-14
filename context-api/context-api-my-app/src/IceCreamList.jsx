import React, { useContext } from "react";
import FlavourContext from "./FlavourContext";

function IceCreamList() {
  const flavours = useContext(FlavourContext);

  return (
    <div>
      <h1>Welcome to Main Branch!!!</h1>
      <h2>Available Flavours</h2>
      <ul>
        {flavours.map((flavour, index) => (
          <li key={index}>{flavour}</li>
        ))}
      </ul>
    </div>
  );
}

export default IceCreamList;
