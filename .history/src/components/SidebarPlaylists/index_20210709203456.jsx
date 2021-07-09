import React from 'react'
import CreatePlaylistButton from '../CreatePlaylistButton'
import './SidebarPlaylists.style.css'

const SidebarPlaylists = () => {
    return (
			<div className="sidebar_playlists">
				<span className="sidebar_playlistsheading">Playlists</span>
				<CreatePlaylistButton />
			</div>
		);
}

export default SidebarPlaylists
