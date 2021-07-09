import React from 'react'

import './PlaylistCard.style.css'

const PlaylistCard = ({playList}) => {
    return (
        <div className="playlist_card">
            <img src={playList} alt="" />
        </div>
    )
}

export default PlaylistCard
