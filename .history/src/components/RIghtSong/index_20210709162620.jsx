import React from "react";

import "./RightSong.style.css";

const RightSong = ({title, sub, img}) => {
	return (
		<div className="rightsong">
			<div
				className="rightsong_img"
                style={{ background: `url(${img}) no-repeat left top` }}></div>
            <div className="rightsong_content">
                <p className="rightsong_title">{title}</p>
                <span className="rightsong_category">{sub}</span>
            </div>
		</div>
	);
};

export default RightSong;
