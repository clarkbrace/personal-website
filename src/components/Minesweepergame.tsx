import React from "react";
import MineSweeperParam from "../app/minesweeper/page";
import Minesweepergamescene from "./Minesweepergamescene";
import MinesweeperTile from "./MinesweeperTile";
import { useState } from "react";
//MinesweeperGame (rules, Gamescene) -> Gamescene (Buttons,)
interface Props {
  rows: number;
  cols: number;
  mines: number;
}

const minesweepergame = (props: Props) => {
  const [showGame, setShowGame] = useState(false);

  const CreateBoolMatrix = (rows: number, cols: number, mines: number) => {
    //true = Empty spot, no mine
    //false = has mine
    console.log("rows", rows, "col", cols, "mines", mines);
    let boolArray = [];
    for (let i = 0; i < Number(rows) * Number(cols); i++) {
      boolArray.push(true);
    }

    let numArray = [];
    for (let i = 0; i < Number(rows) * Number(cols); i++) {
      numArray.push(i);
    }

    for (let i = 0; i < Number(mines); i++) {
      let mineIndex = Math.floor(Math.random() * numArray.length);
      boolArray[numArray[mineIndex]] = false;
      numArray.splice(mineIndex, 1);
    }

    let numberOfMines = 0;
    for (let i = 0; i < boolArray.length; i++) {
      if (!boolArray[i]) {
        numberOfMines++;
      }
    }

    let BoolMatrix = [];

    while (boolArray.length) BoolMatrix.push(boolArray.splice(0, rows));

    return (
      <Minesweepergamescene boardMatrix={BoolMatrix} rows={rows} cols={cols} />
    );
  };

  const ShowGame = () => {
    setShowGame(!showGame);
  };
  return (
    <div className="flex bg-blue-100 justify-center flex-col">
      <button onClick={ShowGame}>minesweepergame</button>
      {showGame && CreateBoolMatrix(props.rows, props.cols, props.mines)}

      <table></table>
    </div>
  );
};

export default minesweepergame;
