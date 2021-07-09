import React from "react";

import "./RightSong.style.css";

const RightSong = ({title, sub, img}) => {
	return (
		<div className="rightsong">
			<div
				className="rightsong_img"
                style={{ background: `url(${img}) no-repeat left top` }}></div>
            <div className="rightsong_content">
                <h1 className="rightsong_title">{title}</h1>
                <h1 className="rightsong_category">{sub}</h1>
            </div>
		</div>
	);
};

export default RightSong;
