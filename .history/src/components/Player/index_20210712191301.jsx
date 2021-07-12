import React from 'react'
import RESOURCES from '../../constants/resources'
import './Player.style.css'

const Player = () => {
    return (
			<div className="player">
				<div className="player_main">
					<img
						className="player_button"
						id="player_skips"
						src={RESOURCES.SKIP_BACK}
						alt=""
					/>
					<img
						className="player_button"
						id="player_play"
						alt=""
						src={RESOURCES.PLAY}
					/>
					<img
						className="player_button"
						id="player_skips"
						alt=""
						src={RESOURCES.SKIP_FORWARD}
					/>
				</div>
				<div className="player_time">
					<span className="player_time_text">00:00</span>
					<div className="player_time_display"></div>
					<span className="player_time_text">02:18</span>
				</div>
			</div>
		);
}

export default Player
