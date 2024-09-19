import "../style/style.css";
import { useContext } from "react";
import { ChessContext, initialChessData } from "../utils/context/ChessContext";
import ChessBox from "../component/ChessBox";

export default function ChessBoard() {
  const { chessData, setChessData, playerTurn, setPlayerTurn } =
    useContext(ChessContext);
  const rows = 6;
  const cols = 7;
  return (
    <div>
      <table id="chessTable">
        <tbody>
          {[...Array(rows)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(cols)].map((_, colIndex) => {
                const chessIndex = rowIndex * cols + colIndex;
                const chess = chessData[chessIndex];
                return (
                  <td key={colIndex}>
                    <div>
                      <ChessBox chess={chess} />
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
