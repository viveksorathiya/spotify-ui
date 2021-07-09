import React from 'react'
import Player from '../Player'
import RightSong from '../RightSong'
import './BottomPlayer.style.css'

const BottomPlayer = () => {
    return (
        <div className="bottom_player">
            <RightSong  />
            <Player />
            <div></div>
        </div>
    )
}

export default BottomPlayer
