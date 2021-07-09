import React from 'react'
import MENU from '../../constants/menu'
import MenuItem from './Item'

import './TopNav.style.css'

const TopNav = () => {
    return (
        <div className="TopNav">
            {MENU.map(item => <MenuItem item= />)}
        </div>
    )
}

export default TopNav
