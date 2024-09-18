import React from "react";
import {GameSymbol} from "../common/gameSymbol";

export const GameInfo = ({isDraw, winnerSymbol, currentStep}) => {
  const sendMessageIngo = () => {
    if (winnerSymbol) {
      return (
        <>Победил: <GameSymbol symbol={winnerSymbol}/></>
      );
    }
    if (isDraw) {
      return <>Ничья!!!</>
    }
    return <>Ход: <GameSymbol symbol={currentStep}/></>
  }
  return (
    <div className="game-info">
      {sendMessageIngo()}
    </div>
  );
};