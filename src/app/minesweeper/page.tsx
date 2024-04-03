"use client";
import React from "react";
import MainNavigation from "@/components/MainNavigation";
import Minesweepergamescene from "@/components/Minesweeper/Minesweepergamescene";
import { useState, useEffect, ChangeEvent, useRef } from "react";

const minesweeper = () => {
  const [rowLength, setRowLength] = useState(30);
  const [colCount, setColCount] = useState(20);
  const [mineCount, setMineCount] = useState(99);
  const [newGame, setNewGame] = useState(true);

  function toggleState() {
    setNewGame(false);
  }

  function updateRowLength(event: ChangeEvent<HTMLInputElement>) {
    setRowLength(
      Number(event.target.value) < 99 ? Number(event.target.value) : 99
    );
    toggleState();
  }

  function updateColCount(event: ChangeEvent<HTMLInputElement>) {
    setColCount(
      Number(event.target.value) < 99 ? Number(event.target.value) : 99
    );
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
      <MainNavigation />
      <div className="flex flex-nowrap  font-minesweeper justify-center w-full pt-5">
        <div className="flex flex-col place-items-center w-96 bg-gray-400 rounded-t-lg">
          <h1 className="w-full text-center pt-3">Minesweeper</h1>

          <table className="m-4">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="Rows">Rows:</label>
                </td>
                <td>
                  <input
                    type="number"
                    id="Rows"
                    min="3"
                    max="99"
                    value={rowLength}
                    onChange={(e) => updateRowLength(e)}
                    className="bg-gray-200 ml-3 w-14"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Columns">Columns:</label>
                </td>
                <td>
                  <input
                    type="number"
                    id="Columns"
                    min="3"
                    max="99"
                    value={colCount}
                    onChange={(e) => updateColCount(e)}
                    className="bg-gray-200 ml-3 w-14"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Mines">Mines</label>
                </td>
                <td>
                  <input
                    type="number"
                    id="mines"
                    min="1"
                    max={rowLength * colCount - 1}
                    value={mineCount}
                    onChange={(e) => updateMineCount(e)}
                    className="bg-gray-200 ml-3 w-24"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center">
            <button
              onMouseUp={() => toggleState()}
              className="bg-red-500 rounded-lg p-1"
            >
              New Game
            </button>
          </div>
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
