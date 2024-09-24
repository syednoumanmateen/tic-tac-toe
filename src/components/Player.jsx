import React, { useState } from 'react'

const Player = ({ initialName, symbol, isActive }) => {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type='text' required value={playerName} onChange={e => setPlayerName(e.target.value)} />
    }

    const handleEditing = () => {
        setIsEditing(prevEditing => !prevEditing)
    }

    return (
        <li className={`${isActive ? "active" : undefined}`}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button className='player-button' type="submit" onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player
