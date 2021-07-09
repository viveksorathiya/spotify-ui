import React from "react";
import Topbar from "../../../components/Topbar";
import Row from "../Row";

import "./Main.style.css";

const Main = () => {
	return (
		<div className="main">
			<Topbar />
			<Row heading="Écoutés récemment" subHeading="" />
			<Row heading="Crée pour Arthur" subHeading="" />
		</div>
	);
};

export default Main;
