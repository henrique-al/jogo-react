import React, { useState } from "react";
import Light from "./Light";

import './Board.css'

type Props = {
  size: number;
  on: number;
};

const Board = ({ size, on }: Props) => {
  const randomLight = (): boolean => {
    return Math.random() < on;
  };
  const gridLights: boolean[][] = Array.from({ length: size }).map(
    (row) =>
      (row = Array.from({ length: size }).map((cell) => (cell = randomLight())))
  );

  const [board, setBoard] = useState<{ grid: boolean[][] }>({
    grid: gridLights,
  });

  const changeLight = (cellIndex: string) => {
    let [i, j] = cellIndex.split("");
    let iN = parseInt(i);
    let jN = parseInt(j);

    setBoard((board) => ({
      ...board,
      grid: board.grid.map((row, rowIndex) =>
        rowIndex === iN
          ? row.map((col, colIndex) => (colIndex === jN ? !col : col))
          : row
      ),
    }));
  };

  const changeAll = (cellIndex: string) => {
    let [i, j] = cellIndex.split("");
    let iN = parseInt(i);
    let jN = parseInt(j);

    changeLight(cellIndex);
    changeLight([iN, jN + 1].join(""));
    changeLight([iN, jN - 1].join(""));
    changeLight([iN + 1, jN].join(""));
    changeLight([iN - 1, jN].join(""));
  };

  const hasWon = ():boolean => {
    return board.grid.every((row) => row.every((cell) => !cell))
  }

  const gridDisplay = board.grid.map((row, rowIndex) => {
    return (
      <div key={rowIndex} className="row-lo">
        {row.map((col, colIndex) => (
          <Light key={[rowIndex, colIndex].join("")} cellIndex={[rowIndex, colIndex].join("")}
          isOn={board.grid[rowIndex][colIndex]}
          changeLight={() => changeAll([rowIndex, colIndex].join(""))}/>
        ))}
      </div>
    )
  })
  return <div className="board">{gridDisplay}</div>;
};

export default Board;
