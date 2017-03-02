import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity
 } from 'react-native';

 import CustomTextInput from 'components/textinput/CustomTextInput'

export default class SignUp extends Component {
    render () {
        return (
            <View style = {styles.signUp}>
                <Image 
                style = {styles.backgroundImage}
                source ={require("assets/images/bg_signup.png")}>
                <View style = {styles.titlePage}>
                        <Text style = {styles.titlePageText}>Sign Up</Text>
                </View>
                    <View style = {styles.inputView}>
                        <View>
                             {/*style = {{height: 150}}>*/}
                            <CustomTextInput 
                            style = {styles.textInput} 
                            icon = {require('demo/src/assets/images/user_name.png')}
                            placeholder = {"Name"}/>
                            <CustomTextInput 
                            style = {styles.textInput} 
                            icon = {require('demo/src/assets/images/password.png')}
                            placeholder = {"Email"}/>
                            <CustomTextInput 
                            style = {styles.textInput} 
                            icon = {require('demo/src/assets/images/password.png')}
                            placeholder = {"Password"}/>
                            <CustomTextInput 
                            style = {styles.textInput}
                            icon = {require('demo/src/assets/images/password.png')}
                            placeholder = {"Birthday"}/>
                        </View>
                    </View>
                    
                    <View style = {styles.bottomView}>
                        <TouchableOpacity style = {styles.buttonSubmit}>
                            <Text style = {styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <View style = {styles.signUpQuestionContainer}>
                            <Text style = {styles.signupQuestionTextContainer}>
                                <Text style = {styles.signUpQuestionText}>Don't have an account? </Text>
                                <Text style = {styles.signUpText}
                                    onPress = {this.signup}>Sign Up</Text>
                            </Text>
                        </View>
                    </View>
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    signUp: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    titlePage: {
        flex: 0.5,
        backgroundColor: 'blue'
    },
    inputView: {
        flex: 2
    },
    textInput: {
        height: 50
    },
    bottomView: {
    },
    titlePageText: {
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 50,
        marginLeft: 30,
        fontSize: 40
    }
})