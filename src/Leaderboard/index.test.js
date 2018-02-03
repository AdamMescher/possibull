import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { config } from '../config';
import Leaderboard from './index';

describe('LEADERBOARD COMPONENT', () => {
  it('should render component', () => {
    const wrapper = mount(<Leaderboard />);
    expect(wrapper).toMatchSnapshot();
  });
});