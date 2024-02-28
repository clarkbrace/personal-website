import React, { useState } from "react";
import { MineState } from "../Utils/MineState";

interface Props {
  mineValue: number;
  mineState: typeof MineState.Default;
  clickCoords: { col: number; row: number };
  clickedFunc: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface TextColors {
  [key: number]: { color: string };
}

const textColors: TextColors = {
  1: { color: "MediumBlue" },
  2: { color: "green" },
  3: { color: "red" },
  4: { color: "DarkBlue" },
  5: { color: "Maroon" },
  6: { color: "MediumTurquoise" },
  7: { color: "Black" },
  8: { color: "DarkGray " },
};

// function updateImage(ms: MineState) {}
const MinesweeperTile = (props: Props) => {
  const textColor = textColors[props.mineValue];

  return (
    <button
      onContextMenu={(event) => {
        event.preventDefault();
      }}
      onWheel={(event) => {
        event.preventDefault();
      }}
      className="w-10 h-10 border-2 p-0"
      style={{
        backgroundImage: props.mineState,
        backgroundSize: "cover",
      }}
      onMouseUp={(event) => props.clickedFunc(event)}
    >
      {/* // TODO ADD BACK IN props.tileData.mineState != MineState.Hidden && */}
      {
        <div style={textColor}>
          {props.mineValue == -1
            ? "M"
            : props.mineValue < 1
            ? ""
            : props.mineValue.toString()}
        </div>
      }
    </button>
  );
};

export default MinesweeperTile;
