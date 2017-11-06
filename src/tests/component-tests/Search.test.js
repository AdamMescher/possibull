import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../../components/Search';
import { config } from '../../config';
import { mount, configure } from 'enzyme';

describe('SEARCH COMPONENT', () => {
  it('should render component', () => {
    history.push = jest.fn();
    const wrapper = mount(
      <Search
        history={jest.fn()}
        setSearchTerm={jest.fn()}
        setStockDataObjectToDisplay={jest.fn()}
        fetchStockQuote={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
