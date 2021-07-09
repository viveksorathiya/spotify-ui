import React from 'react'
imp

const SubHeading = (props) => {
    
    const { title } = props;
    
    return (
        <div>
            <h1 className="subheading">{title}</h1>
        </div>
    )
}

export default SubHeading
