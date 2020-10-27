import React from 'react';
import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import MovieDetail from './movies/MovieDetail.js';
import { MoviesList } from './movies/Movieslist.js';

// import PropTypes from 'prop-types';
// import {Counter} from './Counter.js';
// import { Accordion } from './Accordion.js';
// import { Input } from './Input.js';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/movies/:id">
						<MovieDetail />
					</Route>
					<Route path="/">
						<MoviesList />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
