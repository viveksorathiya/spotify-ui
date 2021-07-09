import React from 'react'
import MENU from '../../constants/menu'
import Menu

import './TopNav.style.css'

const TopNav = () => {
    return (
        <div className="TopNav">
            {MENU.map(item => <MenuItem />)}
        </div>
    )
}

export default TopNav
