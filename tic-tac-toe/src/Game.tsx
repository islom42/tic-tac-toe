import React from "react";

function Game() {

  return (
    <React.Fragment>
      <header>
        <nav>
          Hey I'm navbar
        </nav>
      </header>
      <main className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-center">Hello</h1>
      </main>
      <footer>
        <p className="text-center">Made by Islom Numanov</p>
      </footer>
    </React.Fragment>
  )
}

export default Game
