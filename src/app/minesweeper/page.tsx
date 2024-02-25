"use client";

import Minesweepergame from "@/components/Minesweepergame";
import TestLayer from "@/components/TestLayer";
//import { ChangeEvent, useState } from "react";
import { useState, useEffect, ChangeEvent } from "react";
import React from "react";

const minesweeper = () => {
  const [rowCount, setRowCount] = useState(30);
  const [colCount, setColCount] = useState(20);
  const [mineCount, setMineCount] = useState(145);

  function updateRowCount(event: ChangeEvent<HTMLInputElement>) {
    setRowCount(Number(event.target.value));
  }

  function updateColCount(event: ChangeEvent<HTMLInputElement>) {
    setColCount(Number(event.target.value));
  }

  function updateMineCount(event: ChangeEvent<HTMLInputElement>) {
    setMineCount(Number(event.target.value));
  }

  useEffect(() => {
    if (mineCount > colCount * rowCount) {
      let newMax = colCount * rowCount;
      let percent = newMax / mineCount;
      setMineCount(Math.round(newMax * percent));
    }
  });

  return (
    <>
      <div className="flex flex-col bg-gray-50">
        <label>MineSweeper</label>

        <div>
          <label htmlFor="Rows">Rows:</label>
          <input
            type="number"
            id="Rows"
            min="5"
            max="50"
            value={rowCount}
            onChange={(e) => updateRowCount(e)}
            className="bg-gray-200 ml-3"
          ></input>
        </div>

        <div>
          <label htmlFor="Columns">Columns:</label>
          <input
            type="number"
            id="Columns"
            min="5"
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
            max={rowCount * colCount}
            value={mineCount}
            onChange={(e) => updateMineCount(e)}
            className="bg-gray-200 ml-3"
          ></input>
        </div>
        <Minesweepergame rows={rowCount} cols={colCount} mines={mineCount} />
      </div>
      {/* <TestLayer></TestLayer> */}
    </>
  );
};

export default minesweeper;

class MineSweeperParam {
  public rows: Number;
  public columns: Number;
  public mines: Number;

  constructor(rows: Number, columns: Number, mines: Number) {
    this.rows = rows;
    this.columns = columns;
    this.mines = mines;
  }
}
