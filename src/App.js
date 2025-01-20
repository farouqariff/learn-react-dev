import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TicTacToe from "./TicTacToe";
import TrafficLight from "./TrafficLight";
import QueueState from "./QueueState";
import Canvas from "./Canvas";
import ShoppingCart from "./ShoppingCart";
import TaskApp from "./TaskApp";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/tic-tac-toe">Tic Tac Toe</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Learn React App</h1>} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/traffic-light" element={<TrafficLight />} />
        <Route path="/queue-state" element={<QueueState />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/task-app" element={<TaskApp />} />
      </Routes>
    </Router>
  );
}

export default App;
