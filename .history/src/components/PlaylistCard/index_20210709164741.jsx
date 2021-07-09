import React from 'react'

import './PlaylistCard.style.css'

const PlaylistCard = ({playList}) => {
    return (
        <div className="playlist_card">
            <img className="playlist_card_image" src={playList.img} alt="" />
        </div>
    )
}

export default PlaylistCard
