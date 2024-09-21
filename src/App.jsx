import "./App.css";
import ChessBoard from "./component/ChessBoard";
import { useContext, useEffect, useState } from "react";
import { ChessContext, initialChessData } from "./utils/context/ChessContext";

//console.log("initialChessData:", initialChessData); // 添加这行
document.title = "Play Four In One";
function App() {
  const [chessData, setChessData] = useState(initialChessData);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const switchTurn = () => {
    setPlayerTurn((currentTurn) => {
      console.log(currentTurn ? "Cpu Turn" : "Player Turn");
      return !currentTurn;
    });
  };

  const checkWinner = () => {
    
  };

  const resetGame = () => {
    setChessData(initialChessData);
    setPlayerTurn(true);
    setGameOver(false);
  };

  const updateChessData = (colIndex, rowIndex, newChessData) => {
    setChessData((currentChessData) =>
      currentChessData.map((col, cIndex) =>
        cIndex === colIndex
          ? col.map((chess, rIndex) =>
              rIndex === rowIndex ? newChessData : chess
            )
          : col
      )
    );
  };

  const computerTurn = () => {
    const emptySpots = [];
    let count = 0;
    chessData.forEach((column, colIndex) => {
      const emptySpot = column.findLast((spot) => !spot.occupied);
      if (emptySpot) {
        emptySpots.push({
          colIndex,
          rowIndex: column.indexOf(emptySpot),
          spot: emptySpot,
        });
      }
    });
    if (emptySpots.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySpots.length);
      const randomSpot = emptySpots[randomIndex];
      console.log("电脑选择的位置：", randomIndex);

      updateChessData(randomSpot.colIndex, randomSpot.rowIndex, {
        ...randomSpot.spot,
        occupied: true,
        isPlayer: false,
        color: playerTurn ? "yellow" : "blue",
      });
      count += 1;
      switchTurn();
      console.log("Now is " + count);
    } else {
      alert("Computer Lose !!!");
      console.log("Game Over");
      setGameOver(true);
    }
  };

  if (playerTurn == false && !gameOver) {
    computerTurn();
  }

  return (
    <div className="App">
      <ChessBoard
        chessData={chessData}
        updateChessData={updateChessData}
        playerTurn={playerTurn}
        switchTurn={switchTurn}
        gameOver={gameOver}
        setGameOver={setGameOver}
        checkWinner={checkWinner}
      />
      {gameOver ? <button onClick={resetGame}>Play Again</button> : <></>}
    </div>
  );
}

export default App;
