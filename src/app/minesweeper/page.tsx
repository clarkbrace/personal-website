"use client";

import MainNavigation from "@/components/MainNavigation";
import Minesweepergamescene from "@/components/Minesweeper/Minesweepergamescene";
import { useState, useEffect, ChangeEvent, useRef } from "react";
import React from "react";

const minesweeper = () => {
  const [rowLength, setrowLength] = useState(30);
  const [colCount, setColCount] = useState(20);
  const [mineCount, setMineCount] = useState(99);
  const [newGame, setNewGame] = useState(true);

  function toggleState() {
    setNewGame(false);
  }
  // function newGame() {
  //   return (
  //     <Minesweepergamescene
  //       cols={colCount}
  //       rowLength={rowLength}
  //       mines={mineCount}
  //     />
  //   );
  // }

  function updaterowLength(event: ChangeEvent<HTMLInputElement>) {
    setrowLength(Number(event.target.value));
    toggleState();
    // setGame(newGame());
  }

  function updateColCount(event: ChangeEvent<HTMLInputElement>) {
    setColCount(Number(event.target.value));
    toggleState();
  }

  function updateMineCount(event: ChangeEvent<HTMLInputElement>) {
    setMineCount(Number(event.target.value));
    toggleState();
  }

  useEffect(() => {
    if (mineCount > colCount * rowLength) {
      let newMax = colCount * rowLength;
      let percent = newMax / mineCount;
      setMineCount(Math.round(newMax * percent));
    }
    setNewGame(true);
  }, [mineCount, colCount, rowLength, newGame]); // Specify colCount and rowLength as dependencies

  return (
    <>
      <MainNavigation>
        <></>
      </MainNavigation>
      <div className="flex flex-col bg-gray-50 p-3 rounded-bl-lg rounded-br-lg drop-shadow-2xl">
        <label>MineSweeper</label>
        <div>
          <label htmlFor="Rows">Rows:</label>
          <input
            type="number"
            id="Rows"
            min="3"
            max="99"
            value={rowLength}
            onChange={(e) => updaterowLength(e)}
            className="bg-gray-200 ml-3"
          ></input>
        </div>

        <div>
          <label htmlFor="Columns">Columns:</label>
          <input
            type="number"
            id="Columns"
            min="3"
            max="99"
            value={colCount}
            onChange={(e) => updateColCount(e)}
            className="bg-gray-200 ml-3"
          ></input>
        </div>

        <div>
          <label htmlFor="Mines">Mines</label>
          <input
            type="number"
            id="mines"
            min="1"
            max={rowLength * colCount - 1}
            value={mineCount}
            onChange={(e) => updateMineCount(e)}
            className="bg-gray-200 ml-3"
          ></input>
        </div>
        <div className="flex justify-center">
          <button
            onMouseUp={() => toggleState()}
            className="bg-red-500 rounded-lg p-1"
          >
            New Game
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {newGame && (
          <Minesweepergamescene
            cols={colCount}
            rowLength={rowLength}
            mines={mineCount}
          />
        )}
      </div>
    </>
  );
};

export default minesweeper;
