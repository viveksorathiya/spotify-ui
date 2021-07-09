import React from 'react'
import RESOURCES from '../../constants/resources'
import './Logo.style.css'

const Logo = () => {
    return (
        <div>
            <img className="logo" src={RESOURCES.LOGO} alt="" />
        </div>
    )
}

export default Logo
