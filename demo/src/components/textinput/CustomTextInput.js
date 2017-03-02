import React, { Component } from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

export default class CustomTextInput extends Component {
    render() {
        return (
            <View style = {[this.props.style, styles.container]}>
                <Image 
                source = {this.props.icon}
                style = {styles.icon}
                resizeMode = 'contain'/>
                <TextInput 
                style = {styles.input}
                placeholder = {this.props.placeholder}
                placeholderTextColor = 'white'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    icon: {
        width: 20,
        height: 17,
        marginLeft: 10
    },
    input: {
        flex: 1,
        marginLeft: 10,
        color: 'white'
    }
});