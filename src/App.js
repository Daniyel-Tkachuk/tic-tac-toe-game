import './App.css';
import React from "react";


const SYMBOL_X = "X";
const SYMBOL_O = "O";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (
      cells[a] &&
      cells[a] === cells[b] &&
      cells[a] === cells[c]
    ) {
      return [a, b, c]
    }
  }
}

function App() {
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

  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "symbol--o";
    if (symbol === SYMBOL_X) return "symbol--x";
    return "";
  }

  const renderSymbol = (symbol) => {
    return (
      <span className={`symbol ${getSymbolClassName(symbol)}`}>
        {symbol}
      </span>
    )
  }

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
    setCells(cells.map(() => null));
    setWinnerSequence(undefined);
  }

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter(value => value).length === 9;

  return (
    <div className="game">
      <div className="game-info">
        {isDraw ? "Ничья" : winnerSequence ? "Победил " : "Ход "}
        {!isDraw && renderSymbol(winnerSymbol ?? currentStep)}
      </div>
      <div className="game-field">
        {
          cells
          && cells.map((symbol, index) => {
            const isWinner = winnerSequence?.includes(index);
            return (
              <button
                key={index}
                className={`cell ${isWinner ? "cell--win" : ""}`}
                onClick={() => onClickHandler(index)}
              >
                {symbol ? renderSymbol(symbol) : null}
              </button>
            )
          })
        }
      </div>
      <button className="restart" onClick={restartGame}>сбросить</button>
    </div>
  );
}

export default App;
