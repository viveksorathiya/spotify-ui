import React from 'react'
import Avatar from '../Avatar'
import './Profile.style.css'

const Profile = () => {
    const [profileImg, set]
    return (
        <div className="profile">
            <Avatar src="https://picsum.photos/200" />
            <h3 className="profile__name">Aurther Guillermin Haer</h3>
        </div>
    )
}

export default Profile
