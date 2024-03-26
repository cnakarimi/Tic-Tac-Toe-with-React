import { useState } from "react";
import Square from "./square";

function Board({ xIsNext, squares, onPlay }) {
  function clickHandler(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => clickHandler(0)} />
        <Square value={squares[1]} onSquareClick={() => clickHandler(1)} />
        <Square value={squares[2]} onSquareClick={() => clickHandler(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => clickHandler(3)} />
        <Square value={squares[4]} onSquareClick={() => clickHandler(4)} />
        <Square value={squares[5]} onSquareClick={() => clickHandler(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => clickHandler(6)} />
        <Square value={squares[7]} onSquareClick={() => clickHandler(7)} />
        <Square value={squares[8]} onSquareClick={() => clickHandler(8)} />
      </div>
    </>
  );
}

export default Board;
