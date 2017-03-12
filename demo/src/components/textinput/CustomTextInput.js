import React, { Component } from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

export default class CustomTextInput extends Component {
    static get defaultProps() {
    return {
            keyboardType: 'default',
            secureTextEntry: false
    };
  }

render() {
        return (
            <View style = {[this.props.style, styles.container]}>
                <Image 
                source = {this.props.icon}
                style = {styles.icon}
                resizeMode = 'contain'/>
                <TextInput 
                {...this.props}
                style = {styles.input}
                placeholder = {this.props.placeholder}
                placeholderTextColor = 'white'
                keyboardType = {this.props.keyboardType}
                secureTextEntry = {this.props.secureTextEntry}
                />
            </View>
        );
    }
}

// CustomTextInput.defaultProps = {
    // keyboardType: 'default',
    // secureTextEntry: false
// }

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
        marginLeft: 25
    },
    input: {
        flex: 1,
        marginLeft: 10,
        color: 'white'
    }
});