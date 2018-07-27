import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import Search from './components/search';
import Assets from './components/assets';

import './app.css';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/" component={Search} />
        <Route path="/asset/:id" component={Assets} />
      </Switch>
    </div>
  </Router>
);

export default App;
