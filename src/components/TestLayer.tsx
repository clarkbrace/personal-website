import React from "react";
import { useState } from "react";
import { MineState } from "./MinesweeperTile";

const TestLayer = () => {

  const [currentState, setCurrentState] = useState(MineState.Hidden);

  function handleClick() {
    setCurrentState(MineState.Flagged);
    console.log("Changed Background")
  }

  return (
    <button onClick={handleClick} style={{ backgroundImage: currentState, backgroundSize: "cover" }}>
      <div
        className="w-10 h-10 border-2 border-black"
        
      >
        <p>Hello</p>
      </div>
    </button>
  );
};

export default TestLayer;
