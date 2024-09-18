import React from "react";
import {computeWinner} from "../gameLogic/computeWinner";
import {gameSymbol} from "../constants/gameSymbol";

export const useGameState = () => {
   const {SYMBOL_O, SYMBOL_X} = gameSymbol;

   const [currentStep, setCurrentStep] = React.useState(SYMBOL_O);
   const [cells, setCells] = React.useState([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
   ]);
   const [winnerSequence, setWinnerSequence] = React.useState(undefined);

   const onClickHandler = (index) => {
      if (cells[index] || winnerSequence) return;

      const cellsCopy = cells.slice();
      cellsCopy[index] = currentStep;

      const winner = computeWinner(cellsCopy)

      setCells(cellsCopy);
      setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
      setWinnerSequence(winner);
   }

   const restartGame = () => {
      setCells(Array.from({length: 9}, () => null));
      setCurrentStep(SYMBOL_O);
      setWinnerSequence(undefined);
   }

   const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
   const isDraw = !winnerSequence && cells.filter(value => value).length === 9;

   return {
      cells,
      currentStep,
      winnerSequence,
      winnerSymbol,
      isDraw,
      restartGame,
      onClickHandler
   }
};