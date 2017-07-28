import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from './components/Main.js';
import Features from './components/Features.js';
import Help from './components/Help.js';
import Blog from './components/Blog.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Main>
            <Switch>
              <Route exact path='/' component={Features} /> {/* material-ui */}
              <Route path='/help' component={Help} />
              <Route path='/blog' component={Blog} />
            </Switch>
          </Main>
      </BrowserRouter>
    );
  }
}

export default App;
