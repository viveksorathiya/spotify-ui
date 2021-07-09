import React from 'react'

import './PlaylistCard.style.css'

const PlaylistCard = ({playList}) => {
    return (
        <div className="playlist_card">
            <img className="pla" src={playList.img} alt="" />
        </div>
    )
}

export default PlaylistCard
