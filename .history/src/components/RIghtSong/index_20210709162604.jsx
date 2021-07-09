import React from "react";

import "./RightSong.style.css";

const RightSong = ({title, sub, img}) => {
	return (
		<div className="rightsong">
			<div
				className="rightsong_img"
                style={{ background: `url(${img}) no-repeat left top` }}></div>
            <div className="rightsong_content">
                <span className="rightsong_title">{title}</h3>
                <span className="rightsong_category">{sub}</span>
            </div>
		</div>
	);
};

export default RightSong;
