import {gameSymbol} from "../constants/gameSymbol";
import React from "react";

export const GameSymbol = ({symbol}) => {

  const getSymbolClassName = (symbol) => {
    const {SYMBOL_O, SYMBOL_X} = gameSymbol;

    if (symbol === SYMBOL_O) return "symbol--o";
    if (symbol === SYMBOL_X) return "symbol--x";
    return "";
  }

  return (
    <span className={`symbol ${getSymbolClassName(symbol)}`}>
      {symbol}
    </span>
  )
}