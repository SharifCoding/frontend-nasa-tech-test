import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    console.log(event.target.value);
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <div className="Search-form">
        <input
          className="Search-input"
          placeholder="search image/video"
          onChange={this.handleInput}
          value={this.state.query}
        />
        <button
          className="Search-button"
          onClick={() => this.props.handleSubmit(this.state.query)}
        >
          Search
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Search;
