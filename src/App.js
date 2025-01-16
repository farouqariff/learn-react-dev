import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TicTacToe from "./TicTacToe/App";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/tic-tac-toe">Tic Tac Toe</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Learn React App</h1>} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;
