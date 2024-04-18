import { MineState } from "@/utils/MineState";
import { Props } from "./Minesweepergamescene";
import { pairString } from "./Minesweepergamescene";
import { SetStateAction } from "react";

export function getValidTiles(
  props: Props,
  col: number,
  row: number,
  center: boolean
): [number, number][] {
  let freeTiles: [number, number][] = [];

  for (let currentCol = -1; currentCol < 2; currentCol++) {
    for (let rowIndex = -1; rowIndex < 2; rowIndex++) {
      if (
        row + rowIndex >= 0 &&
        col + currentCol >= 0 &&
        row + rowIndex < props.rowLength &&
        col + currentCol < props.cols &&
        (!(rowIndex === 0 && currentCol === 0) || center) // Check to see if the user wantes the center
      ) {
        freeTiles.push([col + currentCol, row + rowIndex]);
      }
    }
  }
  return freeTiles;
}

export function setAllFlags(
  mineMatrix: { mineValue: number; mineState: typeof MineState.Default }[][]
) {
  mineMatrix.map((col) => {
    col.map((tile) => {
      if (tile.mineValue === -1) {
        tile.mineState = MineState.Flagged;
      }
    });
  });
}

export function setAllBombs(
  mineMatrix: { mineValue: number; mineState: typeof MineState.Default }[][]
): void {
  mineMatrix.map((col) => {
    col.map((tile) => {
      if (tile.mineState === MineState.Flagged && tile.mineValue !== -1) {
        tile.mineState = MineState.FalseBomb;
      } else if (tile.mineValue === -1) {
        tile.mineState = MineState.Bombed;
      }
    });
  });
}

export function revealClearSpace(
  props: Props,
  mM: { mineValue: number; mineState: typeof MineState.Default }[][],
  clickedCol: number,
  clickedRow: number
) {
  // Check to make sure the incoming tile is valid
  if (
    mM[clickedCol][clickedRow].mineValue !== 0 ||
    mM[clickedCol][clickedRow].mineState !== MineState.Hidden
  ) {
    return 0;
  }

  let queue = [[clickedCol, clickedRow]];
  // Set Root to Revealed
  mM[clickedCol][clickedRow].mineState = MineState.Revealed;
  let freedCount: number = 1;
  // BFS
  while (queue.length > 0) {
    let tempQueue: [number, number][] = [];

    queue.forEach(([c, r]) => {
      // Case wheather the tile is blank
      // if is an empty tile, aka: no number or mine then reveal and iterate on neighbors
      if (
        mM[c][r].mineValue === 0 &&
        mM[c][r].mineState !== MineState.Flagged
      ) {
        let adjacentTiles = getValidTiles(props, c, r, false).filter(
          ([c, r]) =>
            mM[c][r].mineState === MineState.Hidden && mM[c][r].mineValue !== -1
        );

        adjacentTiles.map(
          ([c, r]) => (mM[c][r].mineState = MineState.Revealed)
        );

        freedCount += adjacentTiles.length;

        tempQueue = [...tempQueue, ...adjacentTiles];
      }
    });
    queue = tempQueue;
  }
  return freedCount;
}

export function firstClickRelocate(
  props: Props,
  mM: { mineValue: number; mineState: typeof MineState.Default }[][],
  clickedCol: number,
  clickedRow: number
) {
  // Get mines to be relocated
  let minesToRelocate = getValidTiles(
    props,
    clickedCol,
    clickedRow,
    true
  ).filter(([c, r]) => mM[c][r].mineValue === -1);

  // Set all tiles to be relocated to 0
  minesToRelocate.map(([c, r]) => (mM[c][r].mineValue = 0));

  // Update all squares effected by the removal of mines
  minesToRelocate.map(([c, r]) =>
    getValidTiles(props, c, r, true)
      .filter(([c, r]) => mM[c][r].mineValue !== -1)
      .map(
        ([c, r]) =>
          (mM[c][r].mineValue = getValidTiles(props, c, r, false).filter(
            ([c, r]) => mM[c][r].mineValue === -1
          ).length)
      )
  );

  // Create set of close mine locations: Center not included. We never want a mine there
  let surroundingTilesSet: Set<string> = new Set();
  getValidTiles(props, clickedCol, clickedRow, true).map((tile) => {
    surroundingTilesSet.add(pairString(tile));
  });

  // Get list of fully avalable and inner free spaces: To be used if needed
  let prefFreeSpaces: [number, number][] = [];
  let secondaryFree: [number, number][] = [];
  mM.map((c, cInd) =>
    c.map((_, rInd) => {
      if (
        mM[cInd][rInd].mineValue !== -1 &&
        !surroundingTilesSet.has(pairString([cInd, rInd]))
      ) {
        prefFreeSpaces.push([cInd, rInd]);
      } else if (
        mM[cInd][rInd].mineValue !== -1 &&
        (cInd !== clickedCol || rInd !== clickedRow)
      ) {
        secondaryFree.push([cInd, rInd]);
      }
    })
  );

  if (minesToRelocate.length > prefFreeSpaces.length + secondaryFree.length) {
    alert("There are too many mines");
  }

  // Relocate mines and update surounding tiles
  minesToRelocate.map(() => {
    // Get random free space and replace a tile with a mine
    if (prefFreeSpaces.length > 0) {
      reLocateMines(prefFreeSpaces);
    } else if (secondaryFree.length > 0) {
      reLocateMines(secondaryFree);
    }
  });

  // Helper function to relocate mines
  function reLocateMines(freeSpaces: [number, number][]) {
    let randomIndex = Math.floor(Math.random() * freeSpaces.length);
    let randomFreeSpace = freeSpaces[randomIndex];
    freeSpaces.splice(randomIndex, 1);
    mM[randomFreeSpace[0]][randomFreeSpace[1]].mineValue = -1; // TODO I hate this syntax

    // Update surouning tiles
    getValidTiles(props, randomFreeSpace[0], randomFreeSpace[1], false)
      .filter(([c, r]) => mM[c][r].mineValue > -1) // Filter by non-mine tiles
      .map(([c, r]) => (mM[c][r].mineValue += 1)); // Add 1 to each surouning non-mine tile
  }
}
