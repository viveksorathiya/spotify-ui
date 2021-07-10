import React from "react";

import "./PlaylistCard.style.css";

import {getRandomImage} from '../../services/image.service'

const PlaylistCard = ({ playlist }) => {
	
	const [ image, setImage ] = React.useState('')
	
	React.useEffect(() => {
		setImage(getImage()?.urls?.regular)
	}, [])

	const getImage = async () => {
		try {
			
			const res = await getRandomImage()
			if (res.status !== 200) {
				throw new Error('Something went wrong.')
			}
			const imgData = res.data
			return imgData
		} catch (error) {
			console.log(error);
		}
		
	}

	return (
		<div className="playlist_card">
			<img
				className="playlist_card_image"
				src={image}
				alt=""
			/>
			<div className="playlist_card_content">
				<div className="playlist_card__title">
					<span>{playlist.title}</span>
				</div>
				<div className="playlist_card__desc">
					<span>{playlist.}</span>
				</div>
			</div>
		</div>
	);
};

export default PlaylistCard;
