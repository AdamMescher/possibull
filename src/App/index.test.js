import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { config } from '../config';
import App from './index';

describe( 'APP COMPONENT', () => {
  it('should render component', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
