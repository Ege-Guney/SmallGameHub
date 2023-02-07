import React, { useState } from "react";
import "./hangman.css";

const animals = [
  "Dog",
  "Cow",
  "Cat",
  "Horse",
  "Donkey",
  "Tiger",
  "Lion",
  "Panther",
  "Leopard",
  "Cheetah",
  "Bear",
  "Elephant",
  "Turtle",
  "Tortoise",
  "Crocodile",
  "Rabbit",
  "Porcupine",
  "Hare",
  "Hen",
  "Pigeon",
  "Albatross",
  "Crow",
  "Fish",
  "Dolphin",
  "Frog",
  "Whale",
  "Alligator",
  "Eagle",
  "Squirrel",
  "Ostrich",
  "Fox",
  "Goat",
  "Jackal",
  "Emu",
  "Armadillo",
  "Eel",
  "Goose",
  "Fox",
  "Wolf",
  "Beagle",
  "Gorilla",
  "Chimpanzee",
  "Monkey",
  "Beaver",
  "Orangutan",
  "Antelope",
  "Bat",
  "Badger",
  "Giraffe",
  "Crab",
  "Panda",
  "Hamster",
  "Cobra",
  "Shark",
  "Camel",
  "Hawk",
  "Deer",
  "Chameleon",
  "Hippopotamus",
  "Jaguar",
  "Chihuahua",
  "King Cobra",
  "Ibex",
  "Lizard",
  "Koala",
  "Kangaroo",
  "Iguana",
  "Llama",
  "Chinchillas",
  "Dodo",
  "Jellyfish",
  "Rhinoceros",
  "Hedgehog",
  "Zebra",
  "Possum",
  "Wombat",
  "Bison",
  "Bull",
  "Buffalo",
  "Sheep",
  "Meerkat",
  "Mouse",
  "Otter",
  "Sloth",
  "Owl",
  "Vulture",
  "Flamingo",
  "Racoon",
  "Mole",
  "Duck",
  "Swan",
  "Lynx",
  "Elk",
  "Boar",
  "Lemur",
  "Mule",
  "Baboon",
  "Mammoth",
  "Whale",
  "Rat",
  "Snake",
  "Peacock",
];

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const Hangman = () => {
  const [word, setWord] = useState(
    animals[Math.floor(Math.random() * animals.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const handleLetterClick = (letter) => {
    if (word.toLowerCase().includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setIncorrectLetters([...incorrectLetters, letter]);
      setIncorrectGuesses(incorrectGuesses + 1);
    }
    if (checkWin()) {
      setWin(true);
    }
    if (incorrectGuesses >= 5) {
      setGameOver(true);
    }
  };

  const checkWin = () => {
    for (let letter in word) {
      if (!(letter.toLowerCase() in guessedLetters)) {
        return false;
      }
    }
    return true;
  };
  const handleReset = () => {
    setWord(animals[Math.floor(Math.random() * animals.length)]);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setIncorrectLetters([]);
    setGameOver(false);
    setWin(false);
  };

  const displayWord = () => {
    return word
      .split("")
      .map((letter) =>
        guessedLetters.includes(letter.toLowerCase()) ? letter : "_"
      )
      .join(" ");
  };

  return (
    <div class="hangman">
      <h1 class="h_header">Animal Hangman</h1>
      <h2>Guess the Animal</h2>

      <p class="correct">{displayWord()}</p>
      {gameOver ? (
        <div>
          <p>Game Over</p>
          <p>It was {word}</p>
        </div>
      ) : win ? (
        <p>You won</p>
      ) : (
        alphabet.map((letter) => (
          <button
            key={letter}
            disabled={guessedLetters.includes(letter)}
            onClick={() => handleLetterClick(letter)}
            style={{
              display:
                guessedLetters.includes(letter) ||
                incorrectLetters.includes(letter)
                  ? "none"
                  : "",
            }}
          >
            {letter}
          </button>
        ))
      )}
      <div>
        <h3>Incorrect Guesses: {incorrectLetters}</h3>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Hangman;
