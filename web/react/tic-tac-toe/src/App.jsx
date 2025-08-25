import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
}

function Board({ XIsNext, squares, onplay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const updateSquares = squares.slice();
    XIsNext ? (updateSquares[i] = "X") : (updateSquares[i] = "O");
    onplay(updateSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) status = "Winner: " + winner;
  else status = "turn of: " + (XIsNext ? "X" : "O");

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMoves, setCurrentMoves] = useState(0);
  const xIsNext = currentMoves % 2 === 0;
  const currentSquares = history[currentMoves];

  function jumTo(nextMove) {
    setCurrentMoves(nextMove);
  }

  const moves = history.map((squares, move) => {
    let desc;
    if (move > 0) desc = "move #" + move;
    else desc = "game start";
    return (
      <li key={move}>
        <button onClick={() => jumTo(move)}>{desc}</button>
      </li>
    );
  });

  function handlePlay(updateSquares) {
    const nextHistory = [...history.slice(0, currentMoves + 1), updateSquares];
    setHistory(nextHistory);
    setCurrentMoves(nextHistory.length - 1);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board XIsNext={xIsNext} squares={currentSquares} onplay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
