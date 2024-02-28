// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import { MineState,  } from "../Utils/MineState";
// import MinesweeperTile from "./MinesweeperTile";

// interface Props {
//   cols: number;
//   rowLength: number;
//   mines: number;
// }

// function getSafeTiles(
//   props: Props,
//   col: number,
//   row: number,
//   center: boolean
// ): [number, number][] {
//   let freeTiles: [number, number][] = [];

//   for (let currentCol = -1; currentCol < 2; currentCol++) {
//     for (let rowIndex = -1; rowIndex < 2; rowIndex++) {
//       // Debugging Script
//       {
//         // console.log(
//         //   "row + rowIndex >= 0:",
//         //   row + rowIndex >= 0,
//         //   "\ncol + currentCol >= 0",
//         //   col + currentCol >= 0,
//         //   "\nrow + rowIndex < props.rowLength - 1",
//         //   row + rowIndex < props.rowLength - 1,
//         //   "\ncol + currentCol < props.cols - 1",
//         //   col + currentCol < props.cols ,
//         //   "\ncol + currentCol < props.cols - 1",
//         //   col + currentCol < props.cols ,
//         //   "\n(!(rowIndex === 0 && currentCol === 0) || center)",
//         //   !(rowIndex === 0 && currentCol === 0) || center
//         // );
//       }

//       if (
//         row + rowIndex >= 0 &&
//         col + currentCol >= 0 &&
//         row + rowIndex < props.rowLength &&
//         col + currentCol < props.cols &&
//         (!(rowIndex === 0 && currentCol === 0) || center) // Check to see if the user wantes the center
//       ) {
//         freeTiles.push([col + currentCol, row + rowIndex]);
//       }
//     }
//   }
//   return freeTiles;
// }

// function createMineGame2(props: Props) {
//   // ACCESS PATTERN: [Col][Row]

//   // // Create  MineMatrix
//   let mineMatrix: {
//     mineValue: number;
//     mineState: typeof MineState.Default;
//   }[][] = [];
//   for (let c = 0; c < props.cols; c++) {
//     let row: {
//       mineValue: number;
//       mineState: typeof MineState.Default;
//     }[] = []; // Create new row
//     for (let r = 0; r < props.rowLength; r++) {
//       row.push({ mineValue: 0, mineState: MineState.Hidden });
//     }
//     mineMatrix.push(row); // Add row to matrix
//   }

//   // Create array of number
//   let indexArray = Array.from(Array(props.cols * props.rowLength).keys());

//   for (let m = 0; m < props.mines; m++) {
//     let randomMineIndex = Math.floor(Math.random() * indexArray.length);
//     let mineIndexNumber = indexArray[randomMineIndex];

//     let mineCol = mineIndexNumber % props.cols;
//     let mineRow = Math.floor(mineIndexNumber / props.cols);
//     // Set mine at random index in Mine Matrix
//     mineMatrix[mineCol][mineRow].mineValue = -1;

//     // Remove random element
//     indexArray.splice(randomMineIndex, 1);
//   }

//   // Calculate Inital Mine Values
//   mineMatrix.map((col, colIndex) => {
//     col.map((tileValue, rowIndex) => {
//       // Make sure you don't calculate for a mine
//       if (tileValue.mineValue !== -1) {
//         // Get safe tiles, filter by miens, get count
//         tileValue.mineValue = getSafeTiles(
//           props,
//           colIndex,
//           rowIndex,
//           false
//         ).filter(
//           ([col, rIndex]) => mineMatrix[col][rIndex].mineValue === -1
//         ).length;
//       }
//     });
//   });

//   return mineMatrix;
// }

// const MineSceneTest = (props: Props) => {
//   const [initalBoard, setInitalBoard] = useState(createMineGame2(props));
//   const mineMatrix = useRef<
//     { mineValue: number; mineState: typeof MineState.Default }[][]
//   >([]);

//     useEffect(() => { 

        
//     })    
//   return (
//     <div className="bg-transparent p-5 ">
//       <div className="flex justify-center min-w-0">
//         <div className="overflow-auto inline-block box-border">
//           <div className="bg-orange-500 p-3 inline-block">
//             <table className="bg-gray-100 border-collapse">
//               <tbody>
//                 {mineMatrix.current.map((col, colIndex) => (
//                   <tr key={colIndex}>
//                     {col.map((value, rowIndex) => (
//                       <td key={`${colIndex} - ${rowIndex}`}>
//                         <MinesweeperTile
//                           mineValue={value.mineValue}
//                           mineState={value.mineState}
//                           coordinates={{
//                             col: colIndex,
//                             row: rowIndex,
//                           }}
//                           clickedFunc={function (
//                             event: React.MouseEvent<
//                               HTMLButtonElement,
//                               MouseEvent
//                             >
//                           ): void {
//                             throw new Error("Function not implemented.");
//                           }}
//                         ></MinesweeperTile>
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MineSceneTest;
