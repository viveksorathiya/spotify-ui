import React from 'react'
import MENU from '../../constants/menu'

import './TopNav.style.css'

const TopNav = () => {
    return (
        <div className="TopNav">
            {MENU.map(item => <Menu)}
        </div>
    )
}

export default TopNav
