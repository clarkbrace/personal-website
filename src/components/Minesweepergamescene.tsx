"use client";
import React from "react";
import MinesweeperTile from "./MinesweeperTile";
import { table } from "console";
import { useState, useRef, useEffect } from "react";
import { MineState } from "../Utils/MineState";

interface Props {
  cols: number;
  rowLength: number;
  mines: number;
}

function createMineGame(props: Props) {
  // ACCESS PATTERN: [Col][Row]

  // // Create  MineMatrix
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
      // Debugging Script
      {
        // console.log(
        //   "row + rowIndex >= 0:",
        //   row + rowIndex >= 0,
        //   "\ncol + currentCol >= 0",
        //   col + currentCol >= 0,
        //   "\nrow + rowIndex < props.rowLength - 1",
        //   row + rowIndex < props.rowLength - 1,
        //   "\ncol + currentCol < props.cols - 1",
        //   col + currentCol < props.cols ,
        //   "\ncol + currentCol < props.cols - 1",
        //   col + currentCol < props.cols ,
        //   "\n(!(rowIndex === 0 && currentCol === 0) || center)",
        //   !(rowIndex === 0 && currentCol === 0) || center
        // );
      }

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

function revealAllBombs(
  mM: { mineValue: number; mineState: typeof MineState.Default }[][]
): void {
  mM.map((col) => {
    col.map((tile) => {
      if (tile.mineValue === -1) {
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
): void {
  // Check to make sure the incoming tile is valid
  if (
    mM[clickedCol][clickedRow].mineValue !== 0 ||
    mM[clickedCol][clickedRow].mineState !== MineState.Hidden
  ) {
    console.log("Mine value not 0 or mine state not hidden");
    return;
  }

  let queue = [[clickedCol, clickedRow]];
  // Ensure space is not a bomb

  // BFS
  while (queue.length > 0) {
    let tempQueue: [number, number][] = [];

    queue.forEach(([c, r]) => {
      // Case wheather the tile is blank
      if (
        mM[c][r].mineValue === 0 &&
        mM[c][r].mineState !== MineState.Revealed &&
        mM[c][r].mineState !== MineState.Flagged
      ) {
        mM[c][r].mineState = MineState.Revealed;
        tempQueue = [
          ...tempQueue,
          ...getValidTiles(props, c, r, false).filter(
            ([c, r]) => mM[c][r].mineState === MineState.Hidden
          ),
        ];
      } else {
        mM[c][r].mineState = MineState.Revealed;
      }
      queue = tempQueue;
    });
  }
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

  // Remove mines: Set tiles to 0
  minesToRelocate.map(([c, r]) => {
    mM[c][r].mineValue = 0;
  });

  // Update old mine locations: Calculate the new value of the old mine locations
  minesToRelocate.map(([c, r]) => {
    getValidTiles(props, c, r, false)
      .filter(([c, r]) => mM[c][r].mineValue !== -1)
      .map(([c, r]) => (mM[c][r].mineValue -= mM[c][r].mineValue >= 1 ? 1 : 0));
  });

  // tilesToRelocate.map(([c, r]) => {
  //   console.log(
  //     "mines present for",
  //     c,
  //     r,
  //     getValidTiles(props, c, r, false).filter(
  //       ([c, r]) => mM[c][r].mineValue === -1
  //     ).length
  //   );

  //   mM[c][r].mineValue = getValidTiles(props, c, r, false).filter(
  //     ([c, r]) => mM[c][r].mineValue === -1
  //   ).length;
  // });

  // Create set of invilid new mine locations
  let nonReplaceTiles = new Set();
  getValidTiles(props, clickedCol, clickedRow, true).forEach((tile) => {
    nonReplaceTiles.add(tile);
  });

  // Get list of avalable new mine locations
  let freeSpaces: [number, number][] = [];
  mM.map((c, cInd) =>
    c.map((_, rInd) => {
      if (
        mM[cInd][rInd].mineValue !== -1 &&
        !nonReplaceTiles.has([cInd, rInd])
      ) {
        freeSpaces.push([cInd, rInd]);
      }
    })
  );

  // Relocate mines and update surounding tiles
  minesToRelocate.map(() => {
    // Get random free space and replace a tile with a mine
    let randomIndex = Math.floor(Math.random() * freeSpaces.length);
    let randomFreeSpace = freeSpaces[randomIndex];
    freeSpaces.splice(randomIndex, 1);
    mM[randomFreeSpace[0]][randomFreeSpace[1]].mineValue = -1; // TODO I hate this syntax

    // Update surouning tiles
    getValidTiles(props, randomFreeSpace[0], randomFreeSpace[1], false)
      .filter(([c, r]) => mM[c][r].mineValue > -1) // Filter by non-mine tiles
      .map(([c, r]) => (mM[c][r].mineValue += 1)); // Add 1 to each surouning non-mine tile

    // Reveal all clear space
    revealClearSpace(props, mM, clickedCol, clickedRow);
  });
}

const Minesweepergamescene = (props: Props) => {
  const clickCount = useRef(0);
  const [rerender, setRerender] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const mineMatrix = useRef<
    { mineValue: number; mineState: typeof MineState.Default }[][]
  >([]);

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
    // Handel Left click:
    if (
      event.button == 0 &&
      mineMatrix.current[clickCoords.col][clickCoords.row].mineState ===
        MineState.Hidden
    ) {
      if (
        clickCount.current === 0 &&
        (mineMatrix.current[clickCoords.col][clickCoords.row].mineValue ===
          -1 ||
          mineMatrix.current[clickCoords.col][clickCoords.row].mineValue > 0)
      ) {
        firstClickRelocate(
          props,
          mineMatrix.current,
          clickCoords.col,
          clickCoords.row
        );
      } else if (
        mineMatrix.current[clickCoords.col][clickCoords.row].mineValue === -1
      ) {
        // Clicked a Bomb: show all bombs and end game
        revealAllBombs(mineMatrix.current);
      } else if (
        mineMatrix.current[clickCoords.col][clickCoords.row].mineValue === 0
      ) {
        // Clicked a free tile
        revealClearSpace(
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
      }
    }

    // Handel Right Click
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

    // TODO Handel Middle Click

    // Rerender the scene to reflect changes
    setRerender(!rerender);
  };
  // if (
  //   timesClicked.current === 0 &&
  //   mineMatrix.current[coordinates.row][coordinates.col].mineValue !== 0
  // ) {
  //   let minesToRelocate: [number, number][] = [];

  //   for (let cols = -1; cols < 2; cols++) {
  //     for (let rows = -1; rows < 2; rows++) {
  //       if (
  //         coordinates.row - rows < 0 ||
  //         coordinates.col - cols < 0 ||
  //         coordinates.col - cols > props.rows - 1 ||
  //         coordinates.row - rows > props.cols - 1
  //       ) {
  //         continue;
  //       }

  //       if (
  //         mineMatrix.current[coordinates.row - rows][coordinates.col - cols]
  //           .mineValue === -1
  //       ) {
  //         minesToRelocate.push([
  //           coordinates.row - rows,
  //           coordinates.col - cols,
  //         ]);
  //       }
  //     }
  //   }

  //   minesToRelocate.forEach(([row, col]) => {
  //     let space = Math.floor(Math.random() * freeSpaces.length);

  //     mineMatrix.current[freeSpaces[space][0]][
  //       freeSpaces[space][1]
  //     ].mineValue = -1;

  //     // Update all surouning tiles
  //   });
  // }
  // Update tiems clicked
  //   timesClicked.current++;

  //   if (event.button == 0) {
  //     // Left Click

  //     // Prevent Clicking a flagged
  //     if (
  //       mineMatrix.current[coordinates.row][coordinates.col].mineState ===
  //       MineState.Flagged
  //     ) {
  //       return;
  //     }

  //     // Update minematriex in responce to the outcome of clicking the tile
  //     mineMatrix.current[coordinates.row][coordinates.col].mineValue == -1
  //       ? mineMatrix.current.forEach((r) => {
  //           r.forEach((tile) => {
  //             if (tile.mineValue === -1) {
  //               tile.mineState = MineState.Bombed;
  //             }
  //           });
  //         })
  //       : reveal([coordinates.row, coordinates.col]);
  //   } else if (event.button == 2) {
  //     // Right Click
  //     if (
  //       mineMatrix.current[coordinates.row][coordinates.col].mineState ==
  //       MineState.Hidden
  //     ) {
  //       mineMatrix.current[coordinates.row][coordinates.col].mineState =
  //         MineState.Flagged;
  //     } else if (
  //       mineMatrix.current[coordinates.row][coordinates.col].mineState ==
  //       MineState.Flagged
  //     ) {
  //       mineMatrix.current[coordinates.row][coordinates.col].mineState =
  //         MineState.Hidden;
  //     }
  //   } else if (event.button == 1) {
  //     // Middle Click
  //   }
  //   console.log("Refresh");
  //   triggerRerender(!reRender);
  // };

  // const reveal = ([row, col]: [number, number]) => {
  //   //Set new flag for tile, update surrounding if no mine nearby

  //   // if tile has no neighboring bombs
  //   let queue: [number, number][] = [];
  //   queue.push([row, col]);
  //   while (queue.length > 0) {
  //     let tmpQueue: [number, number][] = [];
  //     queue.forEach(([t, c]) => {
  //       console.log(t, c);
  //       // console.log(tuple);
  //       // console.log(typeof tuple, typeof mineMatrix);
  //       if (
  //         mineMatrix.current[t][c].mineValue === 0 &&
  //         mineMatrix.current[t][c].mineState !== MineState.Revealed && // TODO Change this back
  //         mineMatrix.current[t][c].mineState !== MineState.Flagged
  //       ) {
  //         mineMatrix.current[t][c].mineState = MineState.Revealed;
  //         tmpQueue = [...tmpQueue, ...unreavealedNeighbors([t, c])];
  //         console.log(tmpQueue);
  //       }
  //       // is a number,
  //       else {
  //         mineMatrix.current[t][c].mineState = MineState.Revealed;
  //       }
  //       queue = tmpQueue;
  //     });
  //   }
  // };
  // const unreavealedNeighbors = ([row, col]: [number, number]) => {
  //   let ret: [number, number][] = [];
  //   let safeTiles = getSafeTiles(props, row, col, true);

  //   console.log("row length", props.rows, "col length", props.cols);
  //   console.log("Safe tiles from row:", row, "col", col, safeTiles);

  //   safeTiles.filter(
  //     ([r, c]) => mineMatrix.current[r][c].mineState === MineState.Hidden
  //   );
  //   return safeTiles;
  // };

  return (
    <div className="bg-transparent p-5 ">
      <div className="flex justify-center min-w-0">
        <div className="overflow-auto inline-block box-border">
          <div className="bg-orange-500 p-3 inline-block">
            <table className="bg-gray-100 border-collapse">
              <tbody>
                {mineMatrix.current.map((col, colIndex) => (
                  <tr key={colIndex} className="border-none">
                    {col.map((data, rowIndex) => (
                      <td
                        key={`${colIndex} - ${rowIndex}`}
                        className="border-none p-0"
                      >
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
