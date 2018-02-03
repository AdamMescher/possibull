import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { config } from '../config';
import SearchResults from './index';

describe('SEARCH RESULTS', () => {
  it('should render component', () => {
    const wrapper = mount(<SearchResults searchTerm={'coke'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});