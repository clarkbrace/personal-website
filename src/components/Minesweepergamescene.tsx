import React from "react";

interface Props { 
  board: boolean[],
  rows: number,
  cols: number
}

const Minesweepergamescene = (props : Props) => {
  
  return (
    
    <>
      {console.log("Made it!")}
      <table>
        {props.board.map((cell, index) => (
          <button key={index}>{cell.toString()}</button>
        ))}
      </table>
    
    </>
  );

};

export default Minesweepergamescene;
