import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import VideoPlayer from "./ManipulatingtheDOMwithRefs/VideoPlayer.js";
import Page from "./ManipulatingtheDOMwithRefs/Page.js";
import CatFriends from "./ManipulatingtheDOMwithRefs/CatFriends.js";

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
        <Route path="/video-player" element={<VideoPlayer />} />
        <Route path="/page" element={<Page />} />
        <Route path="/cat-friends" element={<CatFriends />} />
      </Routes>
    </Router>
  );
}

export default App;
