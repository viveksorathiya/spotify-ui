import React from "react";
import CreatePlaylistButton from "../CreatePlaylistButton";
import "./SidebarPlaylists.style.css";

const SidebarPlaylists = () => {
	return (
		<div className="sidebar_playlists">
			<span className="sidebar_playlists_heading">Playlists</span>
			<CreatePlaylistButton />
			<div className="list">
				<div className="playlist">Rock Save the Queen</div>
				<div className="playlist">AdFab Open Space</div>
				<div className="playlist">Rock Save the Queen</div>
				<div className="playlist">AdFab Open Space</div>
				<div className="playlist">Rock Save the Queen</div>
				<div className="playlist">AdFab Open Space</div>
				<div className="playlist">Rock Save the Queen</div>
				<div className="playlist">AdFab Open Space</div>
				<div className="playlist">Rock Save the Queen</div>
				<div className="playlist">AdFab Open Space</div>
			</div>
		</div>
	);
};

export default SidebarPlaylists;
