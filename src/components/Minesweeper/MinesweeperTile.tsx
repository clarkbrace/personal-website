import React, { useState } from "react";
import { MineState } from "@/utils/MineState";

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
  7: { color: "Purple" },
  8: { color: "Black" },
};

// function updateImage(ms: MineState) {}
const MinesweeperTile = (props: Props) => {
  const textColor = textColors[props.mineValue];

  return (
    <button
      onContextMenu={(event) => {
        event.preventDefault();
      }}
      className="w-9 h-9 border-2 p-0 inline-block hover:scale-105 bg-[#ACACAC]"
      style={{
        backgroundImage: props.mineState,
        backgroundSize: "cover",
      }}
      onMouseUp={(event) => {
        event.preventDefault();
        props.clickedFunc(event);
      }}
      onMouseDown={(event) => {
        event.preventDefault();
      }}
    >
      {props.mineState === MineState.Revealed && (
        <div style={textColor} className="font-minesweeper">
          {props.mineValue < 1 ? "" : props.mineValue.toString()}
        </div>
      )}
    </button>
  );
};

export default MinesweeperTile;
