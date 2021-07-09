import React from 'react'
import Logo from '../Logo'
import SidebarPlaylists from '../SidebarPlaylists'
import TopNav from '../TopNav'
import './Sidebar.style.css'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <Logo />
            <TopNav />
            <SidebarPlaylists
        </div>
    )
}

export default Sidebar
