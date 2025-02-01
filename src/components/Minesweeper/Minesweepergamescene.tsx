"use client";
import React from "react";
import MinesweeperTile from "./MinesweeperTile";
import { useState, useRef, useEffect } from "react";
import { MineState } from "@/utils/MineState";
import { getValidTiles, setAllFlags, firstClickRelocate } from "./MinesweeperLogic";
import { HandleLeftClick, HandleMiddleClick, HandleRightClick } from "./MinesweeperClickHandler";

export interface Props {
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
        tileValue.mineValue = getValidTiles(props, colIndex, rowIndex, false).filter(
          ([col, rIndex]) => mineMatrix[col][rIndex].mineValue === -1
        ).length;
      }
    });
  });

  return mineMatrix;
}

export function pairString(pair: [number, number]): string {
  return pair.join("-");
}

const Minesweepergamescene = (props: Props) => {
  const [gameEnabled, setGameEnabled] = useState(true);
  const [firstLeftClick, setFirstLeftClick] = useState(true);
  const [tilesCleared, setTilesCleared] = useState(0);
  const [flagCount, setFlagCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const mineMatrix = useRef(createMineGame(props));

  // Handle Setting
  useEffect(() => {
    // Win condition
    if (props.cols * props.rowLength === props.mines + tilesCleared) {
      setAllFlags(mineMatrix.current);
      setGameEnabled(false);
      setGameWon(true);
      console.log("You Win!");
    }
  }, [
    gameEnabled,
    firstLeftClick,
    tilesCleared,
    flagCount,
    gameWon,
    props.cols,
    props.rowLength,
    props.mines,
  ]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    clickCoords: { row: number; col: number }
  ) => {
    event.preventDefault();
    // Game enabled check:
    if (!gameEnabled) {
      return;
    }

    // Handle Left click:
    if (
      event.button === 0 &&
      mineMatrix.current[clickCoords.col][clickCoords.row].mineState == MineState.Hidden
    ) {
      if (firstLeftClick) {
        setFirstLeftClick(false);
        firstClickRelocate(props, mineMatrix.current, clickCoords.col, clickCoords.row);
      }

      HandleLeftClick(
        props,
        mineMatrix.current,
        clickCoords,
        setGameEnabled,
        tilesCleared,
        setTilesCleared
      );
    }

    // Handle Right Click
    if (event.button === 2) {
      HandleRightClick(mineMatrix.current, clickCoords, flagCount, setFlagCount);
    }

    // Handle Middle Click
    if (event.button === 1) {
      HandleMiddleClick(
        props,
        mineMatrix.current,
        clickCoords,
        tilesCleared,
        setTilesCleared,
        setGameEnabled
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center min-w-0">
        <div className="overflow-auto inline-block box-border">
          <div
            className={` p-6 inline-block rounded-lg ${!gameWon ? "bg-gray-400" : "bg-amber-500"}`}
          >
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
                          clickedFunc={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
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
      {gameWon && (
        <div className="w-full text-center font-minesweeper pt-2">
          * You cleared all the mines! *
        </div>
      )}
    </div>
  );
};

export default Minesweepergamescene;
