import React from "react";

import "./PlaylistCard.style.css";

import {getRandomImage} from '../../services/image.service'

const PlaylistCard = ({ playlist }) => {
	
	const [ image, setImage ] = React.useState('')
	
	React.useEffect(() => {
		
	}, [])

	

	return (
		<div className="playlist_card">
			<img
				className="playlist_card_image"
				src="https://picsum.photos/200"
				alt=""
			/>
			<div className="playlist_card_content">
				<div className="playlist_card__title">
					<span>Arneo Tunes - Winter 2020</span>
				</div>
				<div className="playlist_card__desc">
					<span>Description de la playlist sur 2 lignes.</span>
				</div>
			</div>
		</div>
	);
};

export default PlaylistCard;
