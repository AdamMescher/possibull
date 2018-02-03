import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { config } from '../config';
import SingleStock from './index';

describe('SINGLE STOCK', () => {
  it('should render component', () => {
    const wrapper = mount(<SingleStock 
      stockDataObjectToDisplay={ 
        {
          symbol: 'TSLA',
          price: 50.05,
          numberOfShares: 51
        } 
      } />);
    expect(wrapper).toMatchSnapshot();
  });
});