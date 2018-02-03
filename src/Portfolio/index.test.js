import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { config } from '../config';
import Portfolio from './index';

describe('PORTFOLIO COMPONENT', () => {
  it('should render component', () => {
    const wrapper = mount(<Portfolio />);
    expect(wrapper).toMatchSnapshot();
  });
});