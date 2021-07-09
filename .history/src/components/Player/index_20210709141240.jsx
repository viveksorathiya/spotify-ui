import React from 'react'
import RESOURCES from '../../constants/resources'
import './Player.style.css'

const Player = () => {
    return (
        <div className="player">
            <div className="player_main">
                <img className="player_button" src={RESOURCES.SKIP_BACK} />
                <img src={RESOURCES.PLAY} />
                <img src={RESOURCES.SKIP_FORWARD} />
            </div>
            <div className="player_time">

            </div>
        </div>
    )
}

export default Player
