import React, { Component } from 'react';
import {
  View,
  Navigator,
  Text
} from 'react-native';

import SignIn from 'containers/SignIn'
import SignUp from 'containers/SignUp'

export default class App extends Component {
    static get defaultProps() {
        return {
            routes: [
            {
                title: '',
                index: 0
            },
            {
                title: 'Sing Up',
                index: 1
            }
        ]
        }
    }

    render() {
        routes = this.props.routes
        return (
            <Navigator 
            initialRoute = {routes[0]}
            initialRouteStack = {routes}
            renderScene = {this.renderScene.bind(this)}
            navigationBar = {this.navigationBar()}
            />
        );
    }

    renderScene(route, navigator) {
        routes = this.props.routes
        switch (route.index) {
            case 0:
            return <SignIn onSignUpPressed = {() => { navigator.push(routes[1]) }}/>
            case 1:
            return <SignUp onSignInPressed = {() => {navigator.pop()}}/>
        }
    }

    navigationBar() {
        routes = this.props.routes
        return <Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) =>
          { return (<Text></Text>); },
         RightButton: (route, navigator, index, navState) =>
           { return (<Text></Text>); },
         Title: (route, navigator, index, navState) =>
           { return (<Text>{routes[index].title}</Text>); },
       }}
       style={{backgroundColor: 'transparent'}}
        />
    }
}