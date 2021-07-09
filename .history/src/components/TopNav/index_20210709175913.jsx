import React from 'react'
import MENU from '../../constants/menu'

import './TopNav.style.css'

const TopNav = () => {
    return (
        <div className="TopNav">
            {MENU.map(item => <ITE)}
        </div>
    )
}

export default TopNav
