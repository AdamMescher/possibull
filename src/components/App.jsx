import "babel-polyfill";
import React, { Component } from 'react';
import { Redirect } from 'react-router'

export default class App extends Component {
  render() {
    return (<Redirect to='/login'/>);
  }
}
