import React from "react";

import "./PlaylistCard.style.css";

import { getRandomImage } from "../../services/image.service";
import RESOURCES from './../../../.history/src/constants/resources_20210710113508';

const PlaylistCard = ({ playlist }) => {
	const [image, setImage] = React.useState("");

	React.useEffect(() => {
		(async () => {
			const img = await getImage();
			setImage(img?.urls?.thumb);
		})();
	}, []);

	const getImage = async () => {
		try {
			const res = await getRandomImage();
			if (res.status !== 200) {
				throw new Error("Something went wrong.");
			}
			const imgData = res.data;
			return imgData;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="playlist_card">
			<div className="card_image">
				{image && <img className="playlist_card_image" src={image} alt="" />}
			</div>
			<div className="playlist_card_content">
				<div className="playlist_card__title">
					<span>{playlist.title}</span>
				</div>
				<div className="playlist_card__desc">
					<span>{playlist.description}</span>
				</div>
			</div>
			<div className="overlay">
<img src={RESOURCES} alt="" />
			</div>
		</div>
	);
};

export default PlaylistCard;
