import { createContext, useState } from "react";

export const initialChessData = Array(42)
  .fill(null)
  .map((_, index) => ({
    id: index,
    isPlayer: false,
    occupied: false,
    color: "",
  }));

const playerTurn = true;

export const ChessContext = createContext({
  chessData: initialChessData,
  setChessData: () => {},
  playerTurn: playerTurn,
  setPlayerTurn: () => {},
});
