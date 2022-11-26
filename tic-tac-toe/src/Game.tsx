import React from "react";

function Game() {

  return (
    <section className="min-h-screen flex flex-col w-4/5 m-auto">
      <header className="header">
        <nav>
          Hey I'm navbar
        </nav>
        <ul className="flex justify-between">
          <li>Board goes here</li>
          <li>Score goes here</li>
        </ul>
      </header>
      <main className="main flex-auto p-8 text-slate-800">
        <h1 className="text-center">Hello</h1>
        <p>hey</p>
      </main>
      <footer className="footer">
        <p className="text-center">Made by Islom Numanov</p>
      </footer>
    </section>
  )
}

export default Game
