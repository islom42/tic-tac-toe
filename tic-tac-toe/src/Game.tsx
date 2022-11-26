import {useState, useEffect} from "react";
import Square from "./components/Square/Square";

function Game() {
  const INITIAL_GAME_STATE = ["","","","","","","","","",]
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE)
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const resetBoard = () => setGameState(INITIAL_GAME_STATE);

  const handleWin = () => {
    window.alert(`Congrats player ${currentPlayer}! You are the winner!`);

    resetBoard()
  };

  const handleDraw = () => {
    window.alert("The game ended in a draw");
    
    resetBoard()

  };

  useEffect(()=> {
    checkForWinner()
  }, [gameState])

  const checkForWinner = () => {
    let roundWon = false;

    for (let i = 0; i < WINNING_COMBOS.length; i++) {
      const winCombo = WINNING_COMBOS[i];

      let a = gameState[winCombo[0]];
      let b = gameState[winCombo[1]];
      let c = gameState[winCombo[2]];

      if ([a, b, c].includes("")) {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      setTimeout(() => handleWin(), 500);
      return;
    }

    if (!gameState.includes("")) {
      setTimeout(() => handleDraw(), 500);
      return;
    }

    changePlayer();
  };

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleCellClick = (e: any) => {
    const cellIndex = Number(e.target.getAttribute("data-cell-index"));

    const currentValue = gameState[cellIndex];
    if (currentValue) {
      return;
    }

    const newValues = [...gameState];
    newValues[cellIndex] = currentPlayer;
    setGameState(newValues);
  }

  return (
    <section className="min-h-screen flex flex-col w-4/5 m-auto">
      <header className="header">
        <nav className="text-center text-3xl">
          Hey I'm navbar
        </nav>
        <ul className="flex justify-evenly ">
          <li>Board goes here</li>
          <li>Score goes here</li>
        </ul>
      </header>
      <main className="main flex-auto p-8 text-slate-800">
        <h1 className="text-center text-6xl">Hello</h1>
        <div className="grid grid-cols-3 gap-3 mx-auto w-96">
          {
            gameState.map((player, index) => {
             return (
              <Square key={index} onClick={handleCellClick} {...{index, player}} />
             )
            })
          }
        </div>
      </main>
      <footer className="footer">
        <p className="text-center">Made by Islom Numanov</p>
      </footer>
    </section>
  )
}

export default Game
