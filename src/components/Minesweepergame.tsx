import React from "react";
import MineSweeperParam from "../app/minesweeper/page";
import Minesweepergamescene from "./Minesweepergamescene";
import { useState } from "react";
//MinesweeperGame (rules, Gamescene) -> Gamescene (Buttons,)
interface Props {
  rows: number;
  cols: number;
  mines: number;
}

// function CreateBoolArray(rows: number, cols: number, mines: number) {
//   //true = Empty spot, no mine
//   //false = has mine
//   let boolArray = [];
//   for (let i = 0; i < Number(rows) * Number(cols); i++) {
//     boolArray.push(true);
//   }

//   let numArray: number[] = [];
//   for (let i = 0; i < Number(rows) * Number(cols); i++) {
//     numArray.push(i);
//   }

//   for (let i = 0; i < Number(mines); i++) {
//     let mineIndex = Math.floor(Math.random() * numArray.length);
//     boolArray[mineIndex] = false;
//     numArray.splice(mineIndex, 1);
//   }
//   console.log(boolArray);

//   return   <Minesweepergamescene board={boolArray} rows={rows} cols={cols} />
// }

const minesweepergame = (props: Props) => {
  const [showGame, setShowGame] = useState(false);

  const CreateBoolArray = (rows: number, cols: number, mines: number) => {
    //true = Empty spot, no mine
    //false = has mine
    let boolArray = [];
    for (let i = 0; i < Number(rows) * Number(cols); i++) {
      boolArray.push(true);
    }

    let numArray: number[] = [];
    for (let i = 0; i < Number(rows) * Number(cols); i++) {
      numArray.push(i);
    }

    for (let i = 0; i < Number(mines); i++) {
      let mineIndex = Math.floor(Math.random() * numArray.length);
      boolArray[mineIndex] = false;
      numArray.splice(mineIndex, 1);
    }
    //console.log(boolArray)
    console.log("Here");

    return <Minesweepergamescene board={boolArray} rows={rows} cols={cols} />;
  };
  const ShowGame = () => {
    setShowGame(true);
    console.log("ShowGme");
  };
  return (
    <>
      <button onClick={ShowGame}>minesweepergame</button>
      {showGame && CreateBoolArray(props.rows, props.cols, props.mines)}
    </>
  );
};

export default minesweepergame;
