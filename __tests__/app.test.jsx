/* global it, expect */
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';

import App from '../src/app';
import Home from '../src/components/home';
import Search from '../src/components/search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('its renders title of NASA search', () => {
  const wrapper = Enzyme.shallow((
    <Home />
  ));
  const title = wrapper.find('h1.App-title').text();
  expect(title).toEqual('NASA Search');
});

xit('has a query input that sets query state on change', () => {
  const wrapper = Enzyme.shallow((
    <Search />
  ));
  const search = wrapper.find('input.search').text();
  expect(wrapper.state('query')).toEqual('');

  search.simulate('change', { target: { value: 'foo' } });

  expect(wrapper.state('query')).toEqual('foo');
});
