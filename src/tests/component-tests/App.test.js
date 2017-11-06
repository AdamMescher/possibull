import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';
import { config } from '../../config';
import { mount, configure } from 'enzyme';

describe( 'APP COMPONENT', () => {
  it('should render component', () => {

    const wrapper = mount (<App />);
    expect(wrapper).toMatchSnapshot();
  });
})
