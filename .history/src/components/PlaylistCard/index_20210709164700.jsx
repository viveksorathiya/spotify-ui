import React from 'react'

import './PlaylistCard.style.css'

const PlaylistCard = ({playlist}) => {
    return (
        <div className="playlist_card">
            <img src={playlist} alt="" />
        </div>
    )
}

export default PlaylistCard
