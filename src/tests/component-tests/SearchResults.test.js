import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from '../../components/SearchResults';
import { symbols } from '../../utils/symbols';
import { config } from '../../config';
import { mount, configure } from 'enzyme';

describe('SEARCH RESULTS COMPONENT', () => {
  it('should render component', () => {
    const wrapper = mount(<SearchResults searchTerm={'coke'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});