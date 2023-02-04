import React from "react";
import "./generalpage.css";
import TicTacToe from "./TicTacToe";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";

const GeneralPage = () => {
  return (
    <Router>
      <header>
        <h1>GAMES HUB</h1>
      </header>
      <nav>
        <ul class="all_links">
          <li>
            <Link class="one_link" to="/tictactoe">
              Tic Tac Toe
            </Link>
          </li>
          <li>
            <Link class="one_link" to="/othergame">
              Other Game
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/tictactoe" element={<TicTacToe />}></Route>
      </Routes>
    </Router>
  );
};

export default GeneralPage;
