import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect exact from="/" to="/home" />
				<Route exact path="/:page?" render={(props) => <Navigation {...props} />} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
