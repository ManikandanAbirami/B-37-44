import React from 'react'
import './App.css'
import FlavourContext from './FlavourContext'
import IceCreamList from './IceCreamList';
import IceCreamListAnnaNagar from './IceCreamListAnnaNagar';

function App() {
const iceCreamFlavours = ['Vanilla', 'Chocolate', 'Strawberry'];
const iceCreamFlavoursAnnaNagar = ['BlueBerry', 'BlackCurrent', 'Mango'];
  return (
    <>
      <FlavourContext.Provider value={iceCreamFlavoursAnnaNagar}>
        <div>
          <h1>Welcome to the Ice Cream Parlour</h1>
         <IceCreamListAnnaNagar/>
        </div>
      </FlavourContext.Provider>
    </>
  )
}

export default App
