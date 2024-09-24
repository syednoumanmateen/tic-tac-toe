import React, { useState } from 'react'
import Player from './components/Player'
import "./App.css"
import GameBoard from './components/GameBoard'

const App = () => {
  const [activePlayer, setActivePlayer] = useState("X")

  const handleActivePlayer = () => {
    setActivePlayer(prevActivePlayer => prevActivePlayer === "X" ? "O" : "X")
  }

  return (
    <main>
      <div className="game-container">
        <ol className="players highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X" && true} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O" && true} />
        </ol>

        <GameBoard activePlayer={activePlayer} setActivePlayer={handleActivePlayer} />
      </div>
    </main>
  )
}

export default App
