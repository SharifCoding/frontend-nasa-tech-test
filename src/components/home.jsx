import React, { Component } from 'react';
import axios from 'axios';

import Search from './search';
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
        <h1 className="App-title">
          NASA Search
        </h1>
        <Search
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Home;
