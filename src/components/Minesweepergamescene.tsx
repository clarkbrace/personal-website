import React from "react";
import MinesweeperTile from "./MinesweeperTile";
import { table } from "console";
import { useState, useRef } from "react";
import { MineState } from "./MinesweeperTile";

interface Props {
  boardMatrix: boolean[][];
  rows: number;
  cols: number;
}

function isMine(cur_row: number, cur_col: number, props: Props): boolean {
  if (
    cur_row < 0 ||
    cur_col < 0 ||
    cur_col > props.rows - 1 ||
    cur_row > props.cols - 1
  ) {
    return false;
  }

  // Check if mine is present on valid tile
  return !props.boardMatrix[cur_row][cur_col];
}

function getSurroundingMineCount(row: number, col: number, props: Props) {
  let mineCount = 0;

  if (isMine(row - 1, col - 1, props)) {
    mineCount++;
  }
  if (isMine(row - 1, col, props)) {
    mineCount++;
  }
  if (isMine(row - 1, col + 1, props)) {
    mineCount++;
  }
  if (isMine(row, col - 1, props)) {
    mineCount++;
  }
  if (isMine(row, col + 1, props)) {
    mineCount++;
  }
  if (isMine(row + 1, col - 1, props)) {
    mineCount++;
  }
  if (isMine(row + 1, col, props)) {
    mineCount++;
  }
  if (isMine(row + 1, col + 1, props)) {
    mineCount++;
  }
  return mineCount;
}

// Data for each tile {value, coordinates}
// value adjcent mines(0-8), -1 for mine
// coordinates 
function createMineGame(props: Props, clicked: () => [number, number]) {
  let mineMat = [];

  // const tileClicked = (coords: [number, number]) => {
  //   //update tile img and surrounding tiles

  // };
  // TODO find out why rows and cols are switched
  for (let r = 0; r < props.cols; r++) {
    let row = [];
    for (let c = 0; c < props.rows; c++) {
      row.push(
        <MinesweeperTile
          isMine={isMine(r, c, props)}
          surroundingMines={
            isMine(r, c, props) ? -1 : getSurroundingMineCount(r, c, props)
          }
          coordinates={[r, c]}
          clickedFunc={clicked}
        ></MinesweeperTile>
      );
      // console.log("row: ", r, " col: ", c, " val: ", isMine(r, c, props));
    }
    mineMat.push(row);
  }
  return mineMat;
}

const Minesweepergamescene = (props: Props) => {
  const mineMatrix = useRef(createMineGame(props, () => [0, 0]));
  const [reRender, triggerRerender] = useState(true);

  function tileClicked([row, col]: [number, number]) {
    mineMatrix.current[row][col];
  }

  return (
    <div className="bg-transparent p-5 ">
      <div className="flex justify-center min-w-0">
        <div className="overflow-auto inline-block box-border">
          <div className="bg-orange-500 p-3 inline-block">
            <table className="bg-gray-100 border-separate! ">
              {mineMatrix.current.map((row) => (
                <tr>
                  {row.map((value) => (
                    <td className="boarder">{value}</td>
                  ))}
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minesweepergamescene;
