import React, { useEffect, useState } from "react";
import Light from "./Light";

import "./Board.css";
import { Link } from "react-router-dom";

type Props = {
  size: number;
  on: number;
};

const Board = ({ size, on }: Props) => {
  const [time, setTime] = useState<{ min: number; seg: number }>({
    min: 0,
    seg: 0,
  });
  const [ranking, setRanking] = useState<
    [{ name: string; score: { min: number; seg: number } }]
  >(JSON.parse(localStorage.getItem("placarLO") ?? "[]"));
  useEffect(() => {
    localStorage.setItem('placarLO', JSON.stringify(ranking))
  }, [])
  const name: string = JSON.parse(localStorage.getItem("player") ?? "{}").name;
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

  const hasWon = (): boolean => {
    return board.grid.every((row) => row.every((cell) => !cell));
  };

  setTimeout(() => {
    if (!hasWon()) {
      setTime({ min: time.min, seg: time.seg + 1 });
      if (time.seg >= 60) {
        setTime({ min: time.min + 1, seg: 0 });
      }
    }
  }, 1000);

  const gridDisplay = board.grid.map((row, rowIndex) => {
    if (!hasWon()) {
      return (
        <div key={rowIndex} className="row-lo">
          {row.map((col, colIndex) => (
            <Light
              key={[rowIndex, colIndex].join("")}
              cellIndex={[rowIndex, colIndex].join("")}
              isOn={board.grid[rowIndex][colIndex]}
              changeLight={() => changeAll([rowIndex, colIndex].join(""))}
            />
          ))}
        </div>
      );
    }
  });

  const handleClick = () => {
    const player: { name: string; score: { min: number; seg: number } } = {
      name: name,
      score: time,
    };
    ranking.push(player);
    setRanking([
      ...ranking.sort((a, b) => {
        if (a.score.min === b.score.min) {
          return a.score.seg - b.score.seg;
        }
        return a.score.min - b.score.min;
      }),
    ]);
    localStorage.setItem("placarLO", JSON.stringify(ranking));
    window.location.replace("http://localhost:3000/map");
  };

  return (
    <div className="container-board">
      <h1>Lights Out</h1>
      <p>
        {time.min}:{time.seg > 9 ? time.seg : "0" + time.seg}
      </p>
      <div className="board">{gridDisplay}</div>
      {hasWon() && (
        <div className="modal-lo">
          <div className="modal-lo-content">
            <h1>Game Over</h1>
            <p>
              Seu tempo foi: {time.min}:
              {time.seg > 9 ? time.seg : "0" + time.seg}
            </p>
            <button onClick={() => handleClick()}>Voltar ao mapa</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
