import React, { Component } from 'react';
import Search from './search';

import './home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">
          NASA Search
        </h1>
        <Search />
      </div>
    );
  }
}

export default Home;
