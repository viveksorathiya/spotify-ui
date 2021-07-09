import React from "react";
import Heading from "../../../components/Heading";
import PlaylistCard from "../../../components/PlaylistCard";
import SubHeading from "../../../components/SubHeading";

import "./Row.style.css";

const Row = (props) => {
	const { heading, subHeading } = props;

	return (
		<div className="row">
			{heading && <Heading title={heading} />}
            {subHeading && <SubHeading title={subHeading} />}
            <div className="">

            </div>
			<PlaylistCard />
			<PlaylistCard />
			<PlaylistCard />
			<PlaylistCard />
		</div>
	);
};

export default Row;
