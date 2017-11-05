import React from 'react';
import ReactDOM from 'react-dom';
import SingleStock from '../../components/SingleStock';
import { config } from '../../config';
import { mount, configure } from 'enzyme';

describe('SINGLESTOCK COMPONENT', () => {
  it('should render component', () => {
    const wrapper = mount(<SingleStock 
    stockDataObjectToDisplay={ 
      {
        symbol: 'TSLA',
        price: 50.05,
        numberOfShares: 51,
      } 
    } />);
    expect(wrapper).toMatchSnapshot();
  });
});