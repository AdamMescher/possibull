import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from '../../components/Portfolio';
import { config } from '../../config';
import { mount, configure } from 'enzyme';

describe('PORTFOLIO COMPONENT', () => {
  it('should render component', () => {
    const wrapper = mount(<Portfolio />);
    expect(wrapper).toMatchSnapshot();
  });
});
