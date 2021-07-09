import React from "react";

import "./TopNav.Item.style.css";

const Item = ({ item }) => {
	return (
		<a href="#">
			<div className="topnav_item">
				<img className="topnav_item__icon" src={item.icon} alt="" />
				<span className="topnav_item__title">{item.display}</span>
			</div>
		</a>
	);
};

export default Item;
