import React, { useState } from "react";
import "./App.css";

function App() {
  const [equippedItem, setEquippedItem] = useState();
  const [attackHuman, setAttackHuman] = useState();

  const sword = {
    dmg: 10,
  };

  const human = {
    health: 10,
  };

  function clickedEq() {
    setEquippedItem(sword);
    console.log("Goblino has equipped the Sword +10 dmg");
  }

  function attackEnemy() {
    human.health = human.health - sword.dmg;
    console.log(
      `You have attacked Human. Human has ${human.health} left. Human dies.`
    );
  }

  return (
    <div>
      <div id="content-container">
        <h1>Goblino City</h1>
        <button onClick={clickedEq}>Equip Sword</button>
        <button onClick={attackEnemy}>Attack</button>
      </div>
    </div>
  );
}

export default App;
