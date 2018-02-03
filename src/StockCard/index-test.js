import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import StockCard from './index';
import { mount } from 'enzyme';

describe( 'APP COMPONENT', () => {
  it('should render component', () => {
    const wrapper = mount(<StockCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
