import React, { Component } from 'react';
import {
  View
} from 'react-native';

import SignIn from 'containers/SignIn'
import SignUp from 'containers/SignUp'

export default class App extends Component {
    render() {
        return (
            <SignUp />
        );
    }
}