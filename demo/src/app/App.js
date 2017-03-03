import React, { Component } from 'react';
import {
    StyleSheet,
  View,
  Navigator,
  Text,
  TouchableOpacity,
  Image
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
                title: '',
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
         LeftButton: this.getLeftButtonNavigation,
         RightButton: this.getRightButtonNavigation,
         Title: this.getTitleNavigation,
       }}
       style={{backgroundColor: 'transparent'}}
        />
    }

    getLeftButtonNavigation(route, navigator, index, navState) {
        switch (index) {
            case 0:
            return
            case 1:
            return <TouchableOpacity style = {styles.backButton} onPress = {() => {navigator.pop()}}>
                <Image 
                source = {require('assets/images/back.png')} 
                style = {styles.backImageButton}
                />
            </TouchableOpacity>
        }
    }

    getRightButtonNavigation(route, navigator, index, navState) {
    }

    getTitleNavigation(route, navigator, index, navState) {
    }
}

const styles = StyleSheet.create({
    backImageButton: {
        width: 21,
        height: 21,
        marginLeft: 15,
        alignItems: 'center'
    },
    backButton: {
        flex: 1,
        width: 50,
        justifyContent: 'center'
    }
})