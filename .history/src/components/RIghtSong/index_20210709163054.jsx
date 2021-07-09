import React from "react";

import "./RightSong.style.css";

const RightSong = ({title, sub, img}) => {
	return (
		<div className="rightsong">
			<div
				className="rightsong_img"
                style={{ background: `url(${img}) no-repeat left top` }}></div>
            <div className="rightsong_content">
                <div className="rightsong_title">{title}</div>
                <div className="rightsong_category">{sub}</div>
            </div>
            <div className="rightsong_buttons">

            </div>
		</div>
	);
};

export default RightSong;
