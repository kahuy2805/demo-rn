import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native'

import CircleImageView from 'demo/src/components/circleimage/CircleImageView'
import CustomTextInput from 'demo/src/components/textinput/CustomTextInput'

export default class SignIn extends Component {
    render() {
        return (
            <View style={styles.signIn}>
                <Image 
                resizeMode = {Image.resizeMode.center} 
                source = {require('demo/src/assets/images/bg_signin.png')} 
                style={styles.background}>
                    <View style={styles.topView}>
                        <CircleImageView imageUrl={require('demo/src/assets/images/check_red.png')}/>
                    </View>
                    <View style = {styles.inputView}>
                            <CustomTextInput 
                            style = {styles.textInput} 
                            icon = {require('demo/src/assets/images/user_name.png')}
                            placeholder = {"Email"}/>
                            <CustomTextInput 
                            style = {styles.textInput} 
                            icon = {require('demo/src/assets/images/password.png')}
                            placeholder = {"Password"}/>
                            <TouchableOpacity style = {styles.buttonForgotPassword}>
                                <Text style = {styles.buttonText}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    <View>
                        <TouchableOpacity
                        style = {styles.buttonSubmit}>
                            <Text style = {styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <View>
                            <Text>
                                <Text numberOfLines = {1} style = {styles.signUpQuestionText}>Don't have an account</Text>
                                <TouchableOpacity>
                                    <Text numberOfLines = {1} style = {styles.signUpText}>Sign Up</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  signIn: {
    flex: 1
  },
  background: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  topView: {
    alignItems: 'center',
    paddingTop: 100
  },
  
  inputView: {
      flex: 1,
      height: 150
  },
  bottomView: {
    
  },
  circleImage: {
  },
  textInput: {
      flex: 1
  },
  buttonForgotPassword: {
      alignSelf: 'flex-end',
      justifyContent: 'center',
      height: 30,
      marginRight: 30,
      backgroundColor: 'transparent'
  },
  buttonText: {
      color: 'white',
      textAlign: 'center'
  },
  buttonSubmit: {
      backgroundColor: '#ff1493',
      height: 60,
      justifyContent: 'center'
  },
  signUpQuestionText: {
      fontSize: 20
  },
  signUpText: {
      fontSize: 20,
      fontWeight: 'bold'
  }
});