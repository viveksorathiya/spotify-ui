import React from "react";
import NavLink from "react-router-dom";

import { MENU_ITEMS } from "../../constants/menu";
import MenuItem from "./Item";

import "./TopNav.style.css";

const TopNav = () => {
	return (
		<div className="topnav">
			<ul>
				{MENU_ITEMS.map((item) => (
					<li>
						<NavLink activeClass="active">
							<MenuItem item={item} />
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TopNav;
