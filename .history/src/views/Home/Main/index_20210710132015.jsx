import React, {useState} from "react";
import Topbar from "../../../components/Topbar";
import Row from "../Row";

import {getPlaylists} from '../../../services/playlist.service'

import "./Main.style.css";

const Main = () => {

	const [playlists1, setPlaylists1] = useState([])
	const [ playlists2, setPlaylists2 ] = React.useState([])
	
	React.useEffect(() => {
		setPlaylists1(getPlaylists())
		setPlaylists2(getPlaylists())
	}, [])
	
	return (
		<div className="main">
			<Topbar />
			<Row heading="Écoutés récemment" subHeading="" playlists={playlists1} />
			<Row
				heading="Crée pour Arthur"
				subHeading="Plus vous écoutez, plus les recommandations s’améliorent"
				playlists={playlists2}
			/>
		</div>
	);
};

export default Main;
