import React from "react";
import Heading from "../../../components/Heading";
import SubHeading from "../../../components/SubHeading";
import PlaylistCard from "../../../components/PlaylistCard";

import "./Row.style.css";

const Row = (props) => {
	const { heading, subHeading } = props;

	return (
		<div className="row">
			{heading && <Heading title={heading} />}
			{subHeading && <SubHeading title={subHeading} />}
			<div className="row__cards">
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
			</div>
		</div>
	);
};

export default Row;
