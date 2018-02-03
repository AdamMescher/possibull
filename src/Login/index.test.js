import React from 'react';
import ReactDOM from 'react-dom';
import Login from './index';

describe( 'LOGIN COMPONENT', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
  });
});