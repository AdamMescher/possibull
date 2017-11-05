import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header';
import { config } from '../../config';
import { mount, configure } from 'enzyme';

describe('HEADER COMPONENT', () => {
  it('should render component', () => {
    const wrapper = mount(<Header history={{mock: 'history'}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});