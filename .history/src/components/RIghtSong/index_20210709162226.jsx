import React from "react";

import "./RightSong.style.css";

const RightSong = () => {
	return (
		<div className="rightsong">
			<div
				className="rightsong_img"
                style={{ background: `url('https://picsum.photos/200') no-repeat left top` }}></div>
            <div className="rightsong_content">
                <h3 className="rightsong_title">{title}</h3>
                <span className="rightsong_category">{}</span>
            </div>
		</div>
	);
};

export default RightSong;
