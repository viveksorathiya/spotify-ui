import React from 'react'
import Heading from '../../../components/Heading'

import './Row.style.css'

const Row = (props) => {

    const { heading, subheading } = this.props
    
    return (
			<div className="row">
				{heading!=null && <Heading title={heading} />}
				{subHeading!=null && <Heading title={heading} />}
			</div>
		);
}

export default Row
