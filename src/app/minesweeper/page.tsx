"use client";

import Minesweepergamescene from "@/components/Minesweepergamescene";
import { useState, useEffect, ChangeEvent, useRef } from "react";
import React from "react";

const minesweeper = () => {
  const [showGame, setShowGame] = useState(true);
  const [rowLength, setrowLength] = useState(30);
  const [colCount, setColCount] = useState(20);
  const [mineCount, setMineCount] = useState(99);

  const newGame = () => {
    return (
      <Minesweepergamescene
        cols={colCount}
        rowLength={rowLength}
        mines={mineCount}
      />
    );
  };

  function updaterowLength(event: ChangeEvent<HTMLInputElement>) {
    setrowLength(Number(event.target.value));
    console.log("Updated length");
  }

  function updateColCount(event: ChangeEvent<HTMLInputElement>) {
    setColCount(Number(event.target.value));
  }

  function updateMineCount(event: ChangeEvent<HTMLInputElement>) {
    setMineCount(Number(event.target.value));
  }

  useEffect(() => {
    if (mineCount > colCount * rowLength) {
      let newMax = colCount * rowLength;
      let percent = newMax / mineCount;
      setMineCount(Math.round(newMax * percent));
    }
  }); // Specify colCount and rowLength as dependencies

  return (
    <>
      <div className="flex flex-col bg-gray-50">
        <label>MineSweeper</label>

        <div>
          <label htmlFor="Rows">Rows:</label>
          <input
            type="number"
            id="Rows"
            min="1"
            max="50"
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
            min="1"
            max="50"
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
        <button onClick={() => setShowGame(!showGame)}>Start Game</button>
        {showGame && newGame()}
      </div>
    </>
  );
};

export default minesweeper;
