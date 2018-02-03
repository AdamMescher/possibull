import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { config } from '../config';
import Header from './index';

describe('HEADER COMPONENT', () => {
  it('should render component', () => {
    const wrapper = mount(<Header history={{mock: 'history'}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});