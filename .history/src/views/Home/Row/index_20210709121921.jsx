import React from 'react'
import Heading from '../../../components/Heading'

import './Row.style.css'

const Row = (props) => {

    const { heading, subheading } = this.props
    
    return (
			<div className="row">
				{heading && <Heading title="Écoutés récemment" />}
			</div>
		);
}

export default Row
