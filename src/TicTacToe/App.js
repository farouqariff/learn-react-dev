import { useState } from "react";

function Square({ value, onSquareClick, isHighlighted }) {
  return (
    <button
      className={`square w-16 h-16 border border-gray-300 text-2xl font-bold flex items-center justify-center transition-all duration-300 hover:bg-gray-100 ${
        isHighlighted ? "bg-yellow-300 animate-pulse" : "bg-white"
      }`}
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
    status = `Winner: ${winner.player}`;
  } else if (!squares.includes(null)) {
    status = "The game is a draw!";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status text-lg font-semibold mb-4 text-center">
        {status}
      </div>
      {Array(3)
        .fill(null)
        .map((_, row) => (
          <div className="board-row flex" key={row}>
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

  function resetSquare() {
    setHistory([{ squares: Array(9).fill(null), location: null }]);
    setCurrentMove(0);
  }

  const moves = history.map((step, move) => {
    const col = step.location % 3;
    const row = Math.floor(step.location / 3);
    const description =
      move > 0
        ? `Go to move #${move} (${row + 1}, ${col + 1})`
        : "Go to game start";

    return (
      <li key={move} className="mb-2">
        {move === currentMove ? (
          <span className="font-semibold">You are at move #{move}</span>
        ) : (
          <button
            className="text-blue-500 hover:underline"
            onClick={() => jumpTo(move)}
          >
            {description}
          </button>
        )}
      </li>
    );
  });

  const sortedMoves = isAscending ? moves : moves.slice().reverse();

  return (
    <div className="game flex flex-col items-center mt-10">
      <div className="game-board mb-8">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          winningSquares={winner ? winner.line : []}
        />
      </div>
      <div className="game-info text-center">
        {/* Button Container */}
        <div className="mb-6 flex justify-center space-x-4">
          <button
            onClick={toggleSort}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-all"
          >
            Sort {isAscending ? "Descending" : "Ascending"}
          </button>
          <button
            onClick={resetSquare}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-all"
          >
            Reset
          </button>
        </div>
        {/* Moves List */}
        <ol className="list-decimal list-inside text-left">{sortedMoves}</ol>
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
