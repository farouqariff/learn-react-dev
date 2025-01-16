import { useState } from "react";
import "./App.css"; // Add CSS for highlighting and styling.

function Square({ value, onSquareClick, isHighlighted }) {
  return (
    <button
      className={`square ${isHighlighted ? "highlight" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay, winningSquares }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares, i);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner.player;
  } else if (!squares.includes(null)) {
    status = "The game is a draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      {Array(3)
        .fill(null)
        .map((_, row) => (
          <div className="board-row" key={row}>
            {Array(3)
              .fill(null)
              .map((_, col) => {
                const index = row * 3 + col;
                return (
                  <Square
                    key={index}
                    value={squares[index]}
                    onSquareClick={() => handleClick(index)}
                    isHighlighted={winningSquares.includes(index)}
                  />
                );
              })}
          </div>
        ))}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), location: null },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;
  const winner = calculateWinner(currentSquares);

  function handlePlay(nextSquares, location) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, location },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function toggleSort() {
    setIsAscending(!isAscending);
  }

  const moves = history.map((step, move) => {
    const col = step.location % 3;
    const row = Math.floor(step.location / 3);
    const description =
      move > 0
        ? `Go to move #${move} (${row + 1}, ${col + 1})`
        : "Go to game start";

    return (
      <li key={move}>
        {move === currentMove ? (
          <span>You are at move #{move}</span>
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  const sortedMoves = isAscending ? moves : moves.slice().reverse();

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          winningSquares={winner ? winner.line : []}
        />
      </div>
      <div className="game-info">
        <button onClick={toggleSort}>
          Sort {isAscending ? "Descending" : "Ascending"}
        </button>
        <ol>{sortedMoves}</ol>
      </div>
    </div>
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
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line };
    }
  }
  return null;
}
