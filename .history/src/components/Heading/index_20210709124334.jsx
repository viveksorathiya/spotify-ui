import React from 'react'
import './Heading.style.css'


const Heading = (props) => {
    
    const { title } = props;
    
    return (
        <div>
            <h1 className="heading">{title}</h1>
        </div>
    )
}

export default Heading
