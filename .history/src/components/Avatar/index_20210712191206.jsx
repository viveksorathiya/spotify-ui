import React from "react";

import "./Avatar.style.css";

const Avatar = ({ src }) => {
	return <div className="avatar">{src && <img className="avatar" src={src} alt= />}</div>;
};

export default Avatar;
