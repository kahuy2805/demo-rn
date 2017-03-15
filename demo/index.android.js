import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import App from 'demo/src/app/App'

export default class demo extends Component {
  render() {
    return (
      <App />
      );
  }
}

AppRegistry.registerComponent('demo', () => demo);
