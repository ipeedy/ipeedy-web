import React, { Component } from 'react';

import Navbar from './Navbar.js';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
