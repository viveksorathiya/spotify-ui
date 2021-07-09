import React from "react";
import RESOURCES from '../../constants/resources'
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
            <div className="rightsong_button">
                <img src={RESOURCES.HEART} alt="" />
            </div>
            <div className="rightsong_button" id="card">
                <img src={RESOURCES.CCARD} alt="" />
            </div>
		</div>
	);
};

export default RightSong;
