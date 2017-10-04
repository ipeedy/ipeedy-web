import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from './JS/Main.js';
import Features from './JS/Features.js';
import About from './JS/About.js';
import Help from './JS/Help.js';
import Login from './JS/Login.js';

class App extends Component {
    render() {
        return (
			<BrowserRouter>
				<Main>
					<Switch>
						<Route exact path='/' component={Features} />
						<Route path='/about' component={About} />
						<Route path='/help/seller' component={Help} />
						<Route path='/login' component={Login} />
					</Switch>
				</Main>
			</BrowserRouter>
    	);
  	}
}

export default App;
