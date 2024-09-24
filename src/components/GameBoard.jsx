import React, { useEffect, useState } from 'react'

const initialGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


const GameBoard = ({ activePlayer, setActivePlayer }) => {
    const [gameBoard, setGameBoard] = useState(initialGame)
    const [gameOver, setGameOver] = useState(false)
    const [gameWon, setGameWon] = useState(false)

    const handleGameBoard = (rowIndex, colIndex) => {
        const gameData = gameBoard.map(k => [...k])
        const gameChecker = [...gameData[0], ...gameData[1], ...gameData[2]].filter(o => o !== null)

        const data = [
            [gameChecker[0], gameChecker[1], gameChecker[2]],
            [gameChecker[0], gameChecker[3], gameChecker[6]],
            [gameChecker[0], gameChecker[4], gameChecker[8]],
            [gameChecker[1], gameChecker[4], gameChecker[7]],
            [gameChecker[2], gameChecker[5], gameChecker[8]],
            [gameChecker[3], gameChecker[4], gameChecker[5]],
            [gameChecker[6], gameChecker[7], gameChecker[8]]
        ]

        if (gameBoard.length && gameChecker.length === 8) {
            setGameOver(true)
            setGameBoard(initialGame)
        } else if (gameBoard.length && data.length === 2) {
            setGameWon(true)
            setGameBoard(initialGame)
        } else {
            setGameBoard((prevGameBoard) => {
                const playerGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
                playerGameBoard[rowIndex][colIndex] = playerGameBoard[rowIndex][colIndex] === null ? activePlayer : playerGameBoard[rowIndex][colIndex]

                return playerGameBoard
            })
            gameData[rowIndex][colIndex] === null ? setActivePlayer() : null
        }
    }

    return (
        <ol className="game-board">
            {gameOver && <li>Draw!</li>}
            {gameWon && <li>{activePlayer} Player Won!</li>}
            {gameBoard?.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row?.map((colem, colIndex) => (
                            <li key={colIndex}>
                                <button type='submit' onClick={() => handleGameBoard(rowIndex, colIndex)}> {colem}</button>
                            </li>))}
                    </ol>
                </li>))}
        </ol>
    )
}

export default GameBoard
