import React, { Component, PropTypes } from 'react'

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

 _signin() {
        this.props.onSignInPressed()
    }

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
                            icon = {require('assets/images/user_name.png')}
                            placeholder = {'Name'}/>
                            <CustomTextInput 
                            style = {styles.textInput} 
                            icon = {require('assets/images/email.png')}
                            placeholder = {"Email"}
                            keyboardType = {'email-address'}/>
                            <CustomTextInput 
                            style = {styles.textInput} 
                            icon = {require('assets/images/password.png')}
                            placeholder = {'Password'}
                            secureTextEntry = {true}/>
                            <CustomTextInput 
                            style = {styles.textInput}
                            icon = {require('assets/images/birthday.png')}
                            placeholder = {"Birthday"}/>
                        </View>
                    </View>
                    
                    <View style = {styles.bottomView}>
                        <TouchableOpacity style = {styles.buttonSubmit}>
                            <Text style = {styles.buttonText}>Join</Text>
                        </TouchableOpacity>
                        <View style = {styles.signUpQuestionContainer}>
                            <Text style = {styles.signupQuestionTextContainer}>
                                <Text style = {styles.signUpQuestionText}>Already have an account? </Text>
                                <Text style = {styles.signUpText}
                                    onPress = {() => {this._signin()}}>Sign In</Text>
                            </Text>
                        </View>
                    </View>
                </Image>
            </View>
        )
    }
}

SignUp.propTypes = {
    onSignInPressed: PropTypes.func.isRequired
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
        flex: 0.5
    },
    inputView: {
        flex: 2
    },
    textInput: {
        height: 50,
        marginTop: 20
    },
    bottomView: {
    },
    titlePageText: {
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 50,
        marginLeft: 30,
        fontSize: 40
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
  },
  buttonSubmit: {
      backgroundColor: '#ff1493',
      height: 60,
      justifyContent: 'center'
  },

signUpQuestionContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    height: 50
},
  signupQuestionTextContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'transparent'
  },
  signUpQuestionText: {
      fontSize: 16
  },
  signUpText: {
      fontSize: 18,
      fontWeight: 'bold'
  }
})