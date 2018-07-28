import React, { Component } from 'react';
import axios from 'axios';

import Search from './search';
import Assets from './assets';
import nasaLogo from '../images/nasa-logo.png';

import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(searchInput) {
    axios.get(`https://images-api.nasa.gov/search?q=${searchInput}&media_type=image`)
      .then((response) => {
        console.log(response.data.collection.items);
        this.setState({
          pictures: response.data.collection.items,
        });
      }).catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <img src={nasaLogo} alt="NASA" width="80" title="NASA logo" />
        <h1 className="App-title">
          NASA Search
        </h1>
        <Search
          handleSubmit={this.handleSubmit}
        />
        <Assets
          pictures={this.state.pictures}
        />
      </div>
    );
  }
}

export default Home;
