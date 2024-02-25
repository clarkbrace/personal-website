import React, { useState } from "react";

interface Props {
  isMine: boolean;
  surroundingMines: number;
  coordinates: [number, number];
  clickedFunc: (coords: [number, number]) => void;
}

export const MineState = {
  Hidden: "url('/MineSweeperAssets/Hidden.png')",
  Revealed: "url(/MineSweeperAssets/Revealed.png)",
  Flagged: "url(/MineSweeperAssets/Flagged.png)",
  Bombed: "url(/MineSweeperAssets/Bombed.png)",
};

// function updateImage(ms: MineState) {}

const MinesweeperTile = (props: Props) => {
  const [mineState, setMineState] = useState(MineState.Hidden);

  return (
    <button
      className="w-10 h-10 border-2 p-0"
      style={{ backgroundImage: mineState, backgroundSize: "cover" }}
      onClick={() => null}
    >
      <div className="">
        {props.isMine
          ? "Mine"
          : props.surroundingMines < 1
          ? ""
          : props.surroundingMines.toString()}
      </div>
    </button>
  );
};

export default MinesweeperTile;
