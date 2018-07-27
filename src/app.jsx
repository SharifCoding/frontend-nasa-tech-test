import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import Search from './components/search';
import Assets from './components/assets';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search/" component={Search} />
      <Route path="/asset/:id" component={Assets} />
    </Switch>
  </Router>
);

export default App;
