import React from 'react'
import Heading from '../../../components/Heading'

import './Row.style.css'

const Row = (props) => {

    const { heading, subHeading } = this.props
    
    return (
			<div className="row">
				{heading!=null && <Heading title={heading} />}
				{subHeading!=null && <Heading title={subeading} />}
			</div>
		);
}

export default Row
