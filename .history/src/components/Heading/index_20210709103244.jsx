import React from 'react'

const Heading = (props) => {
    
    const { title } = props;
    
    return (
        <div>
            <h1 className="">{title}</h1>
        </div>
    )
}

export default Heading
