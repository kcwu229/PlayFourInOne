import "../style/style.css";

export default function ChessBox({
  chessData,
  chess,
  updateChessData,
  playerTurn,
  switchTurn,
  setGameOver,
  checkWinner,
  colIndex,
}) {
  const handleClickEvent = (playerTurn, hasOccupied) => {
    const column = chessData[colIndex];
    const remainingSpots = chessData.filter((item) => !item.occupied);

    if (!hasOccupied && remainingSpots.length > 0) {
      const chessColumn = chessData[colIndex];
      const emptySpot = chessColumn.filter((spot) => !spot.occupied);

      if (emptySpot.length > 0) {
        // return the bottom spot
        const targetSpot = emptySpot[emptySpot.length - 1];
        const targetRowIndex = column.indexOf(targetSpot);

        const newChessData = {
          ...targetSpot,
          occupied: true,
          isPlayer: true,
          color: playerTurn ? "yellow" : "blue",
        };

        updateChessData(colIndex, targetRowIndex, newChessData);
        switchTurn();
      }
    } else if (hasOccupied) {
      alert("This box is occupied !! Please find another box !");
    } else if (remainingSpots.length == 0) {
      alert("Game Over !");
      setGameOver((gameOver) => !gameOver);
    }
    checkWinner();
  };

  return (
    <button
      className={`circle ${chess.occupied ? `occupied ${chess.color}` : ""}`}
      key={chess.id}
      data-id={chess.id}
      onClick={(e) => {
        handleClickEvent(playerTurn, chess.occupied);
      }}
    >
      {chess.id}
    </button>
  );
}
