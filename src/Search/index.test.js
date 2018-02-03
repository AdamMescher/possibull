import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { config } from '../config';
import Search from './index';

describe('SEARCH COMPONENT', () => {
  it('should render component', () => {
    history.push = jest.fn();
    const wrapper = mount(
      <Search
        history={ jest.fn() }
        setSearchTerm={ jest.fn() }
        setStockDataObjectToDisplay={ jest.fn() }
        fetchStockQuote={ jest.fn() }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
