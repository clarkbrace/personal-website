import { MineState } from "@/utils/MineState";
import {
  firstClickRelocate,
  getValidTiles,
  revealClearSpace,
  setAllBombs,
} from "./MinesweeperLogic";
import { Props } from "./Minesweepergamescene";
import { SetStateAction } from "react";

export function HandleLeftClick(
  props: Props,
  mineMatrix: { mineValue: number; mineState: typeof MineState.Default }[][],
  clickCoords: { row: number; col: number },
  setGameEnabled: React.Dispatch<SetStateAction<boolean>>,
  tilesCleared: number,
  setTilesCleared: React.Dispatch<SetStateAction<number>>
) {
  let clickedTile = mineMatrix[clickCoords.col][clickCoords.row];

  if (clickedTile.mineValue > 0) {
    mineMatrix[clickCoords.col][clickCoords.row].mineState = MineState.Revealed;
    setTilesCleared(tilesCleared + 1);
  } else if (clickedTile.mineValue === 0) {
    let freed = revealClearSpace(
      props,
      mineMatrix,
      clickCoords.col,
      clickCoords.row
    );
    setTilesCleared(tilesCleared + freed);
  } else if (clickedTile.mineValue === -1) {
    setAllBombs(mineMatrix);
    setTilesCleared(tilesCleared + 1);
    setGameEnabled(false);
  }
}

export function HandleRightClick(
  mineMatrix: { mineValue: number; mineState: typeof MineState.Default }[][],
  clickCoords: { row: number; col: number },
  flagCount: number,
  setFlagCount: React.Dispatch<SetStateAction<number>>
) {
  let currentTile = mineMatrix[clickCoords.col][clickCoords.row];

  if (currentTile.mineState == MineState.Hidden) {
    currentTile.mineState = MineState.Flagged;
    setFlagCount(flagCount + 1);
    //console.log("Changed State of flagged");
  } else if (currentTile.mineState == MineState.Flagged) {
    currentTile.mineState = MineState.Hidden;
    setFlagCount(flagCount + 1);
  }
}

export function HandleMiddleClick(
  props: Props,
  mineMatrix: { mineValue: number; mineState: typeof MineState.Default }[][],
  clickCoords: { row: number; col: number },
  tilesCleared: number,
  setTilesCleared: React.Dispatch<SetStateAction<number>>,
  setGameEnabled: React.Dispatch<SetStateAction<boolean>>
) {
  let currentTile = mineMatrix[clickCoords.col][clickCoords.row];
  if (
    currentTile.mineState !== MineState.Revealed &&
    currentTile.mineValue > 0
  ) {
    return 0;
  }

  let mineLocations = getValidTiles(
    props,
    clickCoords.col,
    clickCoords.row,
    false
  ).filter(([c, r]) => mineMatrix[c][r].mineValue === -1);

  let flaggedLocations = getValidTiles(
    props,
    clickCoords.col,
    clickCoords.row,
    false
  ).filter(([c, r]) => mineMatrix[c][r].mineState === MineState.Flagged);

  // Make sure number of flags equals number of bombs
  if (mineLocations.length !== flaggedLocations.length) {
    return;
  }

  // Ensure mines are in same position as flags
  mineLocations.map(([c, r]) => {
    if (mineMatrix[c][r].mineState !== MineState.Flagged) {
      // End the game
      setGameEnabled(false);
      setAllBombs(mineMatrix);
    }
  });

  let newlyCleared = 0;

  getValidTiles(props, clickCoords.col, clickCoords.row, false)
    .filter(
      ([c, r]) =>
        mineMatrix[c][r].mineState === MineState.Hidden &&
        mineMatrix[c][r].mineValue === 0
    )
    .map(([c, r]) => {
      newlyCleared += revealClearSpace(props, mineMatrix, c, r);
      //setTilesCleared(1)
    });

  getValidTiles(props, clickCoords.col, clickCoords.row, false)
    .filter(
      ([c, r]) =>
        mineMatrix[c][r].mineValue > 0 &&
        mineMatrix[c][r].mineState === MineState.Hidden
    )
    .map(([c, r]) => {
      mineMatrix[c][r].mineState = MineState.Revealed;
      newlyCleared++;
    });

  setTilesCleared(tilesCleared + newlyCleared);
}
