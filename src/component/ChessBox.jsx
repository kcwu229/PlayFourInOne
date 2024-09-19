import "../style/style.css";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ChessContext, initialChessData } from "../utils/context/ChessContext";

export default function ChessBox({ chess }) {
  const {
    chessData,
    setChessData,
    playerTurn,
    setPlayerTurn,
    checkWinner,
    gameOver,
    setGameOver,
    switchTurn,
  } = useContext(ChessContext);

  const handleClickEvent = (buttonId, playerTurn, hasOccupied) => {
    const remainingSpot = chessData.filter((item) => !item.occupied);
    if (!hasOccupied && remainingSpot.length > 0) {
      //setPlayerTurn(!playerTurn);
      setChessData((currentChessData) => {
        const newChessData = currentChessData.map((item) =>
          item.id === buttonId
            ? {
                ...item,
                occupied: true,
                color: playerTurn ? "yellow" : "blue",
                isPlayer: playerTurn ? true : false,
              }
            : item
        );
        return newChessData;
      });
    } else if (hasOccupied) {
      alert("This box is occupied !! Please find another box !");
    } else {
      alert("Game Over !");
      setGameOver((gameOver) => !gameOver);
    }
    checkWinner();
    if (playerTurn == true) switchTurn();
  };

  return (
    <button
      className={`circle ${chess.occupied ? `occupied ${chess.color}` : ""}`}
      key={chess.id}
      data-id={chess.id}
      onClick={(e) => {
        handleClickEvent(chess.id, playerTurn, chess.occupied);
      }}
    >
      {chess.id}
    </button>
  );
}
