import React from "react";
import Topbar from "../../../components/Topbar";
import Row from "../Row";

import {getPlaylists} from '../../../services/playlist.service'

import "./Main.style.css";

const Main = () => {

	const [playlists1, setPlaylists1] = React.useState([])
	const [ playlists2, setPlaylists2 ] = React.useState([])
	
	React.useEffect(() => {
		setPlaylists1(getPlaylists())
		setPlaylists2(getPlaylists())
	}, [])
	
	return (
		<div className="main">
			<Topbar />
			<Row heading="Écoutés récemment" subHeading="" playlists={pla} />
			<Row
				heading="Crée pour Arthur"
				subHeading="Plus vous écoutez, plus les recommandations s’améliorent"
            />
            
		</div>
	);
};

export default Main;
