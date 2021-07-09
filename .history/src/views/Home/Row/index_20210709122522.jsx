import React from 'react'
import Heading from '../../../components/Heading'
import SubHeading from '../../../components/SubHeading'

import './Row.style.css'

const Row = (props) => {

    const { heading, subHeading } = this.props
    
    return (
			<div className="row">
				{heading!=null && <Heading title={heading} />}
            {subHeading != null && <SubHeading title={subHeading} />}
            
            <
			</div>
		);
}

export default Row
