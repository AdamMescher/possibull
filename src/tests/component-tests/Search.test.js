import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../../components/Search';
import { config } from '../../config';
import { mount, configure } from 'enzyme';

describe('SEARCH COMPONENT', () => {
  it('should render component', () => {
    const wrapper = mount(<Search history={{ mock: 'history' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});