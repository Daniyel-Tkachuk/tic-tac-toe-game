import React from "react";
import {GameSymbol} from "../common/gameSymbol";

export const GameCell = ({isWinner, symbol, onClick}) => {
  return (
    <button
      className={`cell ${isWinner ? "cell--win" : ""}`}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol}/> : null}
    </button>
  )
}