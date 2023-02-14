import React from "react";
import "./generalpage.css";
import TicTacToe from "./TicTacToe";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
import RockPaperScissors from "./RockPaperScissors";
import Hangman from "./Hangman";
import ConnectFour from "./ConnectFour";

const GeneralPage = () => {
  return (
    <Router>
      <header>
        <h1>GAMES HUB</h1>
      </header>
      <nav>
        <ul class="all_links">
          <li>
            <Link id="tictactoe" class="one_link" to="/tictactoe"></Link>
          </li>
          <li>
            <Link
              id="rockpaperscissors"
              class="one_link"
              to="/rockpaperscissors"
            ></Link>
          </li>
          <li>
            <Link id="hangman" class="one_link" to="/hangman"></Link>
          </li>
          <li>
            <Link id="connectfour" class="one_link" to="/connectfour"></Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/tictactoe" element={<TicTacToe />}></Route>
        <Route
          exact
          path="/rockpaperscissors"
          element={<RockPaperScissors />}
        ></Route>
        <Route exact path="/hangman" element={<Hangman />}></Route>
        <Route exact path="/connectfour" element={<ConnectFour />}></Route>
      </Routes>
    </Router>
  );
};

export default GeneralPage;
