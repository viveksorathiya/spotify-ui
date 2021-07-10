import React from "react";

import "./Avatar.style.css";

const Avatar = ({ src }) => {
	return <div className="ava">{src && <img className="avatar" src={src} />}</div>;
};

export default Avatar;
