"use client";
import React from "react";
import MinesweeperTile from "./MinesweeperTile";
import { useState, useRef, useEffect } from "react";
import { MineState } from "../../Utils/MineState";

interface Props {
  cols: number;
  rowLength: number;
  mines: number;
}

function createMineGame(props: Props) {
  // Create  MineMatrix
  let mineMatrix: {
    mineValue: number;
    mineState: typeof MineState.Default;
  }[][] = [];
  for (let c = 0; c < props.cols; c++) {
    let row: {
      mineValue: number;
      mineState: typeof MineState.Default;
    }[] = []; // Create new row
    for (let r = 0; r < props.rowLength; r++) {
      row.push({ mineValue: 0, mineState: MineState.Hidden });
    }
    mineMatrix.push(row); // Add row to matrix
  }

  // Create array of number
  let indexArray = Array.from(Array(props.cols * props.rowLength).keys());

  for (let m = 0; m < props.mines; m++) {
    let randomMineIndex = Math.floor(Math.random() * indexArray.length);
    let mineIndexNumber = indexArray[randomMineIndex];

    let mineCol = mineIndexNumber % props.cols;
    let mineRow = Math.floor(mineIndexNumber / props.cols);
    // Set mine at random index in Mine Matrix
    mineMatrix[mineCol][mineRow].mineValue = -1;

    // Remove random element
    indexArray.splice(randomMineIndex, 1);
  }

  // Calculate Inital Mine Values
  mineMatrix.map((col, colIndex) => {
    col.map((tileValue, rowIndex) => {
      // Make sure you don't calculate for a mine
      if (tileValue.mineValue !== -1) {
        // Get safe tiles, filter by miens, get count
        tileValue.mineValue = getValidTiles(
          props,
          colIndex,
          rowIndex,
          false
        ).filter(
          ([col, rIndex]) => mineMatrix[col][rIndex].mineValue === -1
        ).length;
      }
    });
  });

  return mineMatrix;
}

function getValidTiles(
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

function setAllBombs(
  mM: { mineValue: number; mineState: typeof MineState.Default }[][]
): void {
  mM.map((col) => {
    col.map((tile) => {
      if (tile.mineState === MineState.Flagged && tile.mineValue !== -1) {
        tile.mineState = MineState.FalseBomb;
      } else if (tile.mineValue === -1) {
        tile.mineState = MineState.Bombed;
      }
    });
  });
}

function revealClearSpace(
  props: Props,
  mM: { mineValue: number; mineState: typeof MineState.Default }[][],
  clickedCol: number,
  clickedRow: number
): number {
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

function pairString(pair: [number, number]): string {
  return pair.join("-");
}

// TODO Case where there are more mines to re-locate than free spaces
function firstClickRelocate(
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
  console.log("Preformed first click shuffle");
}

const Minesweepergamescene = (props: Props) => {
  const gameEnabled = useRef(true);
  const clickCount = useRef(0);
  const tilesCleared = useRef(0);
  const [rerender, setRerender] = useState(false);

  const mineMatrix = useRef<
    { mineValue: number; mineState: typeof MineState.Default }[][]
  >([]);

  // Handle Setting
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!initialized) {
      mineMatrix.current = createMineGame(props);
      setInitialized(true);
    }
  });

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    clickCoords: { row: number; col: number }
  ) => {
    // Game enabled check:
    if (!gameEnabled.current) {
      return;
    }

    if (
      // Handle Left click:
      event.button === 0
    ) {
      if (
        clickCount.current === 0 &&
        mineMatrix.current[clickCoords.col][clickCoords.row].mineValue !== 0
      ) {
        // First Click Rules
        firstClickRelocate(
          props,
          mineMatrix.current,
          clickCoords.col,
          clickCoords.row
        );
      } else if (
        event.button === 0 &&
        event.ctrlKey &&
        mineMatrix.current[clickCoords.col][clickCoords.row].mineState ===
          MineState.Revealed &&
        mineMatrix.current[clickCoords.col][clickCoords.row].mineValue > 0 &&
        clickCount.current !== 0
      ) {
        // Handle Control Left click:
        let mineLocations = getValidTiles(
          props,
          clickCoords.col,
          clickCoords.row,
          false
        ).filter(([c, r]) => mineMatrix.current[c][r].mineValue === -1);

        let flaggedLocations = getValidTiles(
          props,
          clickCoords.col,
          clickCoords.row,
          false
        ).filter(
          ([c, r]) => mineMatrix.current[c][r].mineState === MineState.Flagged
        );

        // Make sure number of flags equals number of bombs
        if (mineLocations.length !== flaggedLocations.length) {
          return;
        }

        mineLocations.map(([c, r]) => {
          if (mineMatrix.current[c][r].mineState !== MineState.Flagged) {
            // End the game
            gameEnabled.current = false;
            setAllBombs(mineMatrix.current);

            return;
          }

          mineLocations.map(([c, r]) => {
            if (mineMatrix.current[c][r].mineValue === 0) {
              tilesCleared.current += revealClearSpace(
                props,
                mineMatrix.current,
                c,
                r
              );
            }
          });

          getValidTiles(props, clickCoords.col, clickCoords.row, false)
            .filter(
              ([c, r]) =>
                mineMatrix.current[c][r].mineValue !== -1 &&
                mineMatrix.current[c][r].mineState === MineState.Hidden
            )
            .map(([c, r]) => {
              mineMatrix.current[c][r].mineState = MineState.Revealed;
              tilesCleared.current += 1;
            });
        });
      }
      //

      if (
        mineMatrix.current[clickCoords.col][clickCoords.row].mineValue === -1
      ) {
        // Clicked a Bomb: show all bombs and end game
        gameEnabled.current = false;
        setAllBombs(mineMatrix.current);
      } else if (
        mineMatrix.current[clickCoords.col][clickCoords.row].mineValue === 0
      ) {
        tilesCleared.current += revealClearSpace(
          props,
          mineMatrix.current,
          clickCoords.col,
          clickCoords.row
        );
      } else if (
        mineMatrix.current[clickCoords.col][clickCoords.row].mineValue > 0
      ) {
        // Clicked a number: reveal the number
        mineMatrix.current[clickCoords.col][clickCoords.row].mineState =
          MineState.Revealed;
        tilesCleared.current += 1;
      }
    }

    // Handle Right Click
    if (event.button == 2) {
      if (
        mineMatrix.current[clickCoords.col][clickCoords.row].mineState ===
        MineState.Hidden
      ) {
        mineMatrix.current[clickCoords.col][clickCoords.row].mineState =
          MineState.Flagged;
      } else if (
        mineMatrix.current[clickCoords.col][clickCoords.row].mineState ===
        MineState.Flagged
      ) {
        mineMatrix.current[clickCoords.col][clickCoords.row].mineState =
          MineState.Hidden;
      }
    }

    // Check win conditon
    if (props.cols * props.rowLength === props.mines + tilesCleared.current) {
      gameEnabled.current = false;
      mineMatrix.current.map((cols) => {
        cols.map((tile) => {
          if (tile.mineValue === -1) {
            tile.mineState = MineState.Flagged;
          }
        });
      });
      console.log("You Win");
    }
    console.log("Spaces Cleared:", tilesCleared.current);
    clickCount.current += 1;
    setRerender(!rerender); // Rerender the scene to reflect changes
  };

  return (
    <div className="pt-5 ">
      <div className="flex justify-center min-w-0">
        <div className="overflow-auto inline-block box-border">
          <div className="bg-gray-400 p-5 inline-block">
            <table className="bg-gray-100 border-collapse leading-none">
              <tbody>
                {mineMatrix.current.map((col, colIndex) => (
                  <tr key={colIndex} className="p-0 ">
                    {col.map((data, rowIndex) => (
                      <td key={`${colIndex} - ${rowIndex}`} className="p-0">
                        <MinesweeperTile
                          mineValue={data.mineValue}
                          mineState={data.mineState}
                          clickCoords={{
                            col: colIndex,
                            row: rowIndex,
                          }}
                          clickedFunc={(
                            event: React.MouseEvent<
                              HTMLButtonElement,
                              MouseEvent
                            >
                          ) =>
                            handleClick(event, {
                              row: rowIndex,
                              col: colIndex,
                            })
                          }
                        ></MinesweeperTile>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minesweepergamescene;
