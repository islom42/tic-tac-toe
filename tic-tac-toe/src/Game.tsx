import {useState} from "react";
import Square from "./components/Square/Square";

function Game() {
  const INITIAL_GAME_STATE = ["X","O","","","","","","","",]
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE)
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
              <Square key={index}>
                {player}
              </Square>
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
