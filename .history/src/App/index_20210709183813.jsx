import React from "react";
import { Router, S } from "react-router-dom";

import Home from "../views/Home";

const App = () => {
	return (
		<Router>
			<Switch>
			<Home />
		</Router>
	);
};

export default App;
