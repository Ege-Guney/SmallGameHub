import React, { useState } from "react";
import "./connectfour.css";

const ConnectFour = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState(null);

  const handleClick = (col) => {
    if (!board || board[0].length <= col || winner != null) {
      return;
    }

    let updatedBoard = [...board];
    for (let row = 5; row >= 0; row--) {
      if (updatedBoard[row][col] === 0) {
        /*for (let i = 0; i < row; i++) {
          setTimeout(() => {
            const tds = document.querySelector(`tr[key="${i}"] td`);
            let td = null;
            console.log(tds.length);
            for (let i = 0; i < tds.length; i++) {
              if (tds[i].getAttribute("data-column") === col.toString()) {
                td = tds[i];
                break;
              }
            }

            if (td) {
              td.style.backgroundColor = "yellow";
              setTimeout(() => {
                td.style.backgroundColor = "";
              }, 30);
            }
          }, 30);
        }*/

        updatedBoard[row][col] = turn;
        setBoard(updatedBoard);
        setTurn(turn === 1 ? 2 : 1);
        checkForWinner(row, col);
        break;
      }
    }
  };

  const handleReset = () => {
    setBoard([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]);
    setTurn(1);
    setWinner(null);
  };

  const checkForWinner = (row, col) => {
    if (!board || !board[row] || !board[row][col]) {
      return;
    }
    let currentValue = board[row][col];
    let count = 0;

    // Check vertically
    for (let i = row; i < 6; i++) {
      if (board[i][col] === currentValue) {
        count++;
        if (count === 4) {
          setWinner(currentValue);
          break;
        }
      } else {
        break;
      }
    }

    // Check horizontally
    count = 0;
    for (let i = 0; i < 7; i++) {
      if (board[row][i] === currentValue) {
        count++;
        if (count === 4) {
          setWinner(currentValue);
          break;
        }
      } else {
        count = 0;
      }
    }

    // Check diagonally (top left to bottom right)
    count = 0;
    let i = row;
    let j = col;
    while (i < 5 && j > 0) {
      i++;
      j--;
    }
    while (i >= 0 && j < 7) {
      if (board[i][j] === currentValue) {
        count++;
        if (count === 4) {
          setWinner(currentValue);
          break;
        }
      } else {
        count = 0;
      }
      i--;
      j++;
    }

    // Check diagonally (top right to bottom left)
    count = 0;
    i = row;
    j = col;
    while (i < 5 && j < 7) {
      i++;
      j++;
    }
    while (i >= 0 && j >= 0) {
      if (board[i][j] === currentValue) {
        count++;
        if (count === 4) {
          setWinner(currentValue);
          break;
        }
      } else {
        count = 0;
      }
      i--;
      j--;
    }
  };

  return (
    <div className="connect-four">
      <table>
        <tbody>
          {board.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td
                  style={{ backgroundColor: "white" }}
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  {cell === 0 ? (
                    ""
                  ) : cell === 1 ? (
                    <span className="red-donut"></span>
                  ) : (
                    <span className="yellow-donut"></span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {winner !== null && (
        <div className="winner">Player {winner} has won the game!</div>
      )}
      {winner === null && <div className="turn">Player {turn}'s turn</div>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default ConnectFour;
