import React, { useContext } from 'react'
import FlavourContext from "./FlavourContext";

function IceCreamListAnnaNagar() {
    const flavours = useContext(FlavourContext);

    return (
      <div>
        <h1>Welcome to Anna Nagar Branch!!!</h1>
        <h2>Available Flavours</h2>
        <ul>
          {flavours.map((flavour, index) => (
            <li key={index}>{flavour}</li>
          ))}
        </ul>
      </div>
    );
}

export default IceCreamListAnnaNagar