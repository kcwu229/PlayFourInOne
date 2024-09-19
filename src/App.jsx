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
    "a" === 22232
      ? setGameOver(!gameOver)
      : console.log("No winner at this moment");
  };

  const resetGame = () => {
    setChessData(initialChessData);
    setPlayerTurn(true);
    setGameOver(false);
  };

  const computerTurn = () => {
    const emptySpots = chessData.filter((spot) => !spot.occupied);
    if (emptySpots.length > 0) {
      const emptySpot =
        emptySpots[Math.floor(Math.random() * emptySpots.length)];
      setChessData((chessData) => {
        const newChessData = chessData.map((item) =>
          item.id === emptySpot.id
            ? {
                occupied: true,
                isPlayer: false,
                color: playerTurn ? "yellow" : "blue",
              }
            : item
        );
        return newChessData;
      });
      switchTurn();
    } else {
      setGameOver((gameOver) => !gameOver);
      alert("Game Over !");
    }
  };

  useEffect(() => {
    if (playerTurn == false && !gameOver) {
      computerTurn();
    }
  }, [playerTurn, gameOver, chessData]);

  return (
    <ChessContext.Provider
      value={{
        chessData,
        setChessData,
        playerTurn,
        setPlayerTurn,
        switchTurn,
        gameOver,
        setGameOver,
        checkWinner,
        resetGame,
      }}
    >
      <div className="App">
        <ChessBoard />
        {gameOver ? <button onClick={resetGame}>Play Again</button> : <></>}
      </div>
    </ChessContext.Provider>
  );
}

export default App;
