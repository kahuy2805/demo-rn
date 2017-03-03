import React, { Component, propTypes } from 'react';
import {
    StyleSheet,
    Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Keyboard,
  DeviceEventEmitter,
  TouchableWithoutFeedback,
  Dimensions,
  LayoutAnimation
} from 'react-native'

import CircleImageView from 'demo/src/components/circleimage/CircleImageView'
import CustomTextInput from 'demo/src/components/textinput/CustomTextInput'

export default class SignIn extends Component {

constructor(props) {
    super(props)
    this.state = {
         visibleHeight: Dimensions.get('window').height
    }
}

    _signup() {
        this.props.onSignUpPressed()
    }

    componentWillMount() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove()
        this.keyboardDidHideListener.remove()
    }

    keyboardDidShow(e) {
        let newSize = Dimensions.get('window').height - e.endCoordinates.height
        console.log(newSize)
        this.setState({
            visibleHeight: newSize
        })
    }

    keyboardDidHide(e) {
        this.setState({
            visibleHeight: Dimensions.get('window').height
        })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                <View style = {[styles.signIn, {height: this.state.visibleHeight}]}>
                <Image 
                resizeMode = {Image.resizeMode.cover} 
                source = {require('demo/src/assets/images/bg_signin.png')} 
                style={[styles.background]}>
                    <View style={styles.topView}>
                        <CircleImageView imageUrl={require('demo/src/assets/images/check_red.png')}/>
                    </View>
                    <View style = {styles.inputView}>
                        <View style = {{height: 150}}>
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
                    </View>
                    
                    <View style = {styles.bottomView}>
                        <TouchableOpacity style = {styles.buttonSubmit}>
                            <Text style = {styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <View style = {styles.signUpQuestionContainer}>
                            <Text style = {styles.signupQuestionTextContainer}>
                                <Text style = {styles.signUpQuestionText}>Don't have an account? </Text>
                                <Text style = {styles.signUpText}
                                    onPress = {this._signup.bind(this)}>Sign Up</Text>
                            </Text>
                        </View>
                    </View>
                </Image>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

SignIn.propTypes = {
    onSignUpPressed: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  signIn: {
    // flex: 1
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
      justifyContent: 'center'
  },
  bottomView: {
    //  height: 150
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
});