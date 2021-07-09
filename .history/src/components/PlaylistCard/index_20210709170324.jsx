import React from "react";

import "./PlaylistCard.style.css";

const PlaylistCard = ({}) => {
	return (
		<div className="playlist_card">
			<img
				className="playlist_card_image"
				src="https://picsum.photos/200"
				alt=""
            />
            d
			<div className="playlist_card__title">
				<span>Arneo Tunes - Winter 2020</span>
			</div>
			<div className="playlist_card__desc">
				<span>Description de la playlist sur 2 lignes.</span>
			</div>
		</div>
	);
};

export default PlaylistCard;
