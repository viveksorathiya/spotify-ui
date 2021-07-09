import React from "react";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../views/Home";

const App = () => {
	return (

		<BrowserRouter>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
