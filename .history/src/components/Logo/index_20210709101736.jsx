import React from 'react'
import {LOGO} from '../../constants/resources'
import './Logo.style.css'

const Logo = () => {
    return (
        <div>
            <img className="logo" src={LOGO} alt="" />
        </div>
    )
}

export default Logo
