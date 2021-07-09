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
					/>
					<img
						className="player_button"
						id="player_play"
						src={RESOURCES.PLAY}
					/>
					<img
						className="player_button"
						id="player_skips"
						src={RESOURCES.SKIP_FORWARD}
					/>
				</div>
            <div className="player_time">
                <span className="player_time_text">00:00</span>
                <div className="player_time_display">02:</div>
                </div>
			</div>
		);
}

export default Player
