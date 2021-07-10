import React from 'react'

import './Avatar.style.css'


const Avatar = ({src}) => {
    return (
        {<img className="avatar" src={src} />}
    )
}

export default Avatar
