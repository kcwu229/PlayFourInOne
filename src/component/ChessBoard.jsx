import "../style/style.css";
import { useContext } from "react";
import { ChessContext, initialChessData } from "../utils/context/ChessContext";
import ChessBox from "./ChessBox";

export default function ChessBoard({
  chessData,
  updateChessData,
  playerTurn,
  switchTurn,
  gameOver,
  setGameOver,
  checkWinner,
}) {
  //console.log(chessData);
  const rows = 6;
  const cols = 7;

  return (
    <div>
      <table id="chessTable">
        <tbody>
          {[...Array(rows)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(cols)].map((_, colIndex) => {
                const chess = chessData[colIndex][rowIndex];

                return (
                  <td key={chess.id}>
                    <div>
                      <ChessBox
                        chessData={chessData}
                        chess={chess}
                        updateChessData={updateChessData}
                        playerTurn={playerTurn}
                        switchTurn={switchTurn}
                        setGameOver={setGameOver}
                        checkWinner={checkWinner}
                        colIndex={colIndex}
                      />
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
