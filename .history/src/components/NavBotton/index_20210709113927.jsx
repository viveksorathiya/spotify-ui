import React from "react";
import RESOURCES from "../../constants/resources";
import './'
const { BACK, FORWARD } = RESOURCES;

const NavButton = ({ isBack }) => {
	return (
		<div className="nav_button">
			<img src={isBack ? BACK : FORWARD} alt="" />
		</div>
	);
};

export default NavButton;
