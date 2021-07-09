import React from "react";

import Sidebar from "./Sidebar";
import Main from "./Main";

import "./style.css";

import "../../assets/fonts/CircularStd.ttf";

const Home = () => {
	return (
		<div className="container">
			<Sidebar />
			<Main />
		</div>
	);
};

export default Home;
