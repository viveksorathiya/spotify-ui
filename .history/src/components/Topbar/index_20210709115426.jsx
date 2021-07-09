import React from 'react'
import NavButton from '../NavBotton'
import Profile from '../Profile'
import './Topbar.style.css'

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar__left">
                <NavButton isBack={true} />
                <NavButton isBack={false} />
            </div>
            <div className="topbar__right">
                <Profile />
            </div>
        </div>
    )
}

export default Topbar
