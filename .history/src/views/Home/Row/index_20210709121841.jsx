import React from 'react'
import Heading from '../../../'

import './Row.style.css'

const Row = (props) => {

    const { heading, subheading } = this.props
    
    return (
        <div className="row">
            {heading && <Heading title="" /> }
        </div>
    )
}

export default Row
