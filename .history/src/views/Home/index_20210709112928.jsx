import React from "react";

import Sidebar from "../../components/Sidebar";

import "./style.css";

import "../../assets/fonts/CircularStd.ttf";
import Main from "./Main";

const Home = () => {
	return (
		<div className="container">
			<Sidebar />
			<Main />
		</div>
	);
};

export default Home;
