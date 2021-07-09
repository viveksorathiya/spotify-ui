import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "../views/Home";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route>
				<Home />
			</Switch>
		</Router>
	);
};

export default App;
