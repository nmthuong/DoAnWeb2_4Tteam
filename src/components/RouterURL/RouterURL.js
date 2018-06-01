import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import MainPage from '../MainPage'
import Page404 from '../Page404'

class RouterURL extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<ul>
			        <li>
			          <Link to="/"></Link>
			        </li>
			      </ul>
			      <Switch>
			        <Route path="/" exact component={MainPage} />
			        <Route component={Page404} />
			      </Switch>
		      </div>
			</Router>
		);
	}
}
export default RouterURL;
