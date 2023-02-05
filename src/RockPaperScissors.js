import React, { useState } from "react";
import "./rockpaperscissors.css";

const RockPaperScissors = () => {
  const [computerChoice, setComputerChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (choice) => {
    setPlayerChoice(choice);
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = options[randomIndex];
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  };

  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins.");
    }
  };

  return (
    <div class="container">
      <h1>Rock Paper Scissors</h1>
      <div class="choices">
        <button
          class="choice"
          id="rock"
          onClick={() => handleClick("rock")}
        ></button>
        <button
          class="choice"
          id="paper"
          onClick={() => handleClick("paper")}
        ></button>
        <button
          class="choice"
          id="scissors"
          onClick={() => handleClick("scissors")}
        ></button>
      </div>
      <div>
        <p>Your choice: {playerChoice}</p>
        <p>Computer choice: {computerChoice}</p>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default RockPaperScissors;
