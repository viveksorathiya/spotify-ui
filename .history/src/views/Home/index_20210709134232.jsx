import React from "react";

import Sidebar from "./Sidebar";
import Main from "./Main";

import "./Home.style.css";

import "../../assets/fonts/CircularStd.ttf";
import BottomPlayer from "../../components/BottomPlayer";

const Home = () => {
	return (
		<div className="container">
			<Sidebar />
			<Main />
			{/* <BottomPlayer /> */}
		</div>
	);
};

export default Home;
