import './App.css';
import React from "react";
import {useGameState} from "../hooks/useGameState";
import {GameCell} from "../components/gameCell";
import {GameInfo} from "../components/gameInfo";

export const App = () => {
  const {
    cells, currentStep, winnerSequence,
    winnerSymbol, isDraw, restartGame,
    onClickHandler
  } = useGameState();

  return (
    <div className="game">
      <GameInfo
        isDraw={isDraw}
        currentStep={currentStep}
        winnerSymbol={winnerSymbol}
      />
      <div className="game-field">
        {
          cells.map((symbol, index) => (
            <GameCell key={index}
                      isWinner={winnerSequence?.includes(index)}
                      symbol={symbol}
                      onClick={() => onClickHandler(index)}
            />))
        }
      </div>
      <button className="restart" onClick={restartGame}>reset</button>
    </div>
  );
}








