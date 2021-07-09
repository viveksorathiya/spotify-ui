import React from 'react'
import NavButton from '../NavBotton'
import './Topbar.style.css'

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar__left">
                <NavButton isBack={true} />
                <NavButton isBack={false} />
            </div>
            <div className="topbar__right">
                <P
            </div>
        </div>
    )
}

export default Topbar
