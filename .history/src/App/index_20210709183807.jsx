import React from "react";
import { Router } from "react-router-dom";

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
