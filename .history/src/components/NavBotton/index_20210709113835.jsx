import React from 'react'
import RESOURCES from '../../constants/resources'

const { BACK, FORWARD } = RESOURCES

const NavButton = ({isBack}) => {
    return (
        <div className="nav_button">
            <img src={isBack? BACK} alt="" />
        </div>
    )
}

export default NavButton
