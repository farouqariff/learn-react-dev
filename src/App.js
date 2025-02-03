import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TicTacToe from "./TicTacToe/App.js";
import TrafficLight from "./TrafficLight";
import QueueState from "./QueueState";
import Canvas from "./Canvas";
import ShoppingCart from "./ShoppingCart";
import ToDoApp from "./ToDoApp/App.js";
import Picture from "./Picture.js";
import EditProfile from "./EditProfile.js";
import MailClient from "./MailClient.js";
import Accordion from "./Accordion.js";
import SyncedInputs from "./SyncedInputs.js";
import FilterableList from "./FilterableList.js";
import Messenger from "./Messenger.js";
import HintForm from "./HintForm.js";
import ReverseField from "./ReverseField.js";
import ContactManager from "./ContactManager/App.js";
import Gallery from "./Gallery.js";
import ContactList from "./ContactList/App.js";
import TaskApp from "./TaskApp/App.js";
import MessengerReducer from "./MessengerReducer/App.js";
import Page from "./Page/App.js";
import PlaceImages from "./PlaceImage/App.js";

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
        <Route path="/todo-app" element={<ToDoApp />} />
        <Route path="/picture" element={<Picture />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/mail-client" element={<MailClient />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/synced-inputs" element={<SyncedInputs />} />
        <Route path="/filterable-list" element={<FilterableList />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/hint-form" element={<HintForm />} />
        <Route path="/reverse-field" element={<ReverseField />} />
        <Route path="/contact-manager" element={<ContactManager />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-list" element={<ContactList />} />
        <Route path="/task-app" element={<TaskApp />} />
        <Route path="/messenge-reducer" element={<MessengerReducer />} />
        <Route path="/page" element={<Page />} />
        <Route path="/place-images" element={<PlaceImages />} />
      </Routes>
    </Router>
  );
}

export default App;
