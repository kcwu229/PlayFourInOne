import { createContext, useState } from "react";

const rows = 6;
const cols = 7;

export const initialChessData = Array(cols)
  .fill(null)
  .map((_, colIndex) =>
    Array(rows)
      .fill(null)
      .map((_, rowIndex) => ({
        id: colIndex * rows + rowIndex + 1,
        isPlayer: false,
        occupied: false,
        rowIndex: rowIndex,
        colIndex: colIndex,
        color: "",
      }))
  );

const playerTurn = true;

export const ChessContext = createContext({
  chessData: initialChessData,
  setChessData: () => {},
  playerTurn: playerTurn,
  setPlayerTurn: () => {},
});

// [], [], [], [], [], [],
