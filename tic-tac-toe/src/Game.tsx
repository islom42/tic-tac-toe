import {useState, useEffect} from "react";
import Square from "./components/Square/Square";

type Scores = {
  [key: string]: number;
}

  const INITIAL_GAME_STATE = ["","","","","","","","","",]
  const INITIAL_SCORES: Scores = { X: 0, O: 0 };
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
function Game() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE)
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [scores, setScores] = useState(INITIAL_SCORES)

  const resetBoard = () => setGameState(INITIAL_GAME_STATE);

  const handleWin = () => {
    window.alert(`Congrats player ${currentPlayer}! You are the winner!`);

    const newPlayerScore = scores[currentPlayer] + 1;
    const newScores = { ...scores };
    newScores[currentPlayer] = newPlayerScore;
    setScores(newScores);

    localStorage.setItem("scores", JSON.stringify(newScores));

    resetBoard()
  };

  const handleDraw = () => {
    window.alert("The game ended in a draw");

    resetBoard()

  };

  useEffect(() => {
    const storedScores = localStorage.getItem("scores");
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    }
  }, []);

  useEffect(()=> {
    if (gameState === INITIAL_GAME_STATE) {
      return;
    }
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
        <ul className="flex justify-between items-center text-2xl text-serif ">
          <li className="text-white mt-2">
            Next Player: <span>{currentPlayer}</span>
          </li>
          <li>
            <p className="text-white">
              Player X wins: <span>{scores["X"]}</span>
            </p>
            <p className="text-white">
              Player O wins: <span>{scores["O"]}</span>
            </p>
          </li>
        </ul>
      </header>
      <main className="main flex-auto p-8 text-slate-800">
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
        <p className="text-center text-white text-xl pb-2">Made by <a href="https://github.com/islomnumanovuz">Islom Numanov</a></p>
      </footer>
    </section>
  )
}

export default Game
