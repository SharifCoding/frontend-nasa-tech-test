import React, { Component } from 'react';

import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handleChange = this.handleChange.bind(this);

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">
          NASA Search
        </h1>
        <input placeholder="search image/video" />
        <button />
      </div>
    );
  }
}

export default App;
