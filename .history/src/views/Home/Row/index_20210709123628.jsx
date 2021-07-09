import React from 'react'
import Heading from '../../../components/Heading'
import PlaylistCard from '../../../components/PlaylistCard'
import SubHeading from '../../../components/SubHeading'

import './Row.style.css'

const Row = (props) => {

    const { heading, subHeading } = this.props
    
    return (
			<div className="row">
				{heading!=null && <Heading title={heading} />}
            {subHeading != null && <SubHeading title={subHeading} />}
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
			</div>
		);
}

export default Row
