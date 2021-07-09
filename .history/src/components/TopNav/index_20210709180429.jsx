import React from "react";
import {MENU_ITEMS} from "../../constants/menu";
import MenuItem from "./Item";

import "./TopNav.style.css";

const TopNav = () => {
	return (
        <div className="TopNav">
            
            {MENU_ITEMS.map((item) => (
                
				<MenuItem item={item} />
			))}
		</div>
	);
};

export default TopNav;
