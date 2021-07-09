import React from "react";
import {MENU_ITEMS} from "../../constants/menu";
import MenuItem from "./Item";

import "./TopNav.style.css";

const TopNav = () => {
	return (
        <div className="TopNav">
            <ul>

            {MENU_ITEMS.map((item) => (
               <li>
                    
               </li> 
				<MenuItem item={item} />
			))}
            </ul>
		</div>
	);
};

export default TopNav;
