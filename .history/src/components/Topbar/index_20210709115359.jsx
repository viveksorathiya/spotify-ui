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
            di
        </div>
    )
}

export default Topbar
