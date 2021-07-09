import React from 'react'
import './SubHeading.style.css'

const SubHeading = (props) => {
    
    const { title } = props;
    
    return (
        <div>
            <h1 className="subheading">{title}</h1>
        </div>
    )
}

export default SubHeading
