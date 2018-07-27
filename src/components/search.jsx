import React, { Component } from 'react';

import './search.css';

class Search extends Component {
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
        <input placeholder="search image/video" />
        <button>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
