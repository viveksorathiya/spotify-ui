import React from 'react'

import './PlaylistCard.style.css'

const PlaylistCard = ({}) => {
    return (
			<div className="playlist_card">
				<img
					className="playlist_card_image"
					src="https://picsum.photos/200"
					alt=""
				/>
				<div className="playlist_card__title">spanArneo Tunes - Winter 2020</div>
			</div>
		);
}

export default PlaylistCard
