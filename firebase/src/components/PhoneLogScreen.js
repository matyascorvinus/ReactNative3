import React, { Component } from 'react';
import { View, Button, Text, TextInput, Image,StyleSheet,Dimensions, Platform, KeyboardAvoidingView,ActivityIndicator,TouchableOpacity } from 'react-native';

import firebase from 'react-native-firebase';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles';
const successImageUri = 'https://cdn.pixabay.com/photo/2015/06/09/16/12/icon-803718_1280.png';

export default class PhoneAuthTest extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+44',
      confirmResult: null,
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+44',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
     if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    const { phoneNumber } = this.state;
    this.setState({ message: 'Sending code ...' });

    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
      .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Code Confirmed!' });
        })
        .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  }
  /* */ 
  renderPhoneNumberInput() {
   const { phoneNumber } = this.state;
      
    return (
        <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled>
        <Image source={require('../assets/logo_app.jpg')}
          style={{ width: '100%', height: Dimensions.get('screen').width - 60 }}
          resizeMode='contain'
        />
        <View style={styles.row}>
          <Image style={styles.icon} source={require('../assets/ic_phone_number.png')} />
          <Text style={styles.title}>Enter phone number:</Text>
        </View>
        <TextInput style={styles.inputField} autoFocus
            onChangeText={value => this.setState({ phoneNumber: value })}
          placeholder={'Phone number ... '}
          value={phoneNumber} underlineColorAndroid='rgba(0,0,0,0)' />

       <Text style={styles.textError}>{this.state.error}</Text>
        <View style={[styles.row, { justifyContent: 'center' }]}>
          <TouchableOpacity style={[styles.button, { backgroundColor: primaryColorGreen }]} onPress={this.signIn}>
            <Text style={{ color: 'white' }}>Sign In</Text>
          </TouchableOpacity>
          
        </View>
      </KeyboardAvoidingView>
    );
  }
  
  renderMessage() {
    const { message } = this.state;
  
    if (!message.length) return null;
  
    return (
      <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
    );
  }
  
  renderVerificationCodeInput() {
    const { codeInput } = this.state;
  
    return (
      <View style={{ marginTop: 25, padding: 25 }}>
        <Text>Enter verification code below:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ codeInput: value })}
          placeholder={'Code ... '}
          value={codeInput}
        />
        <Button title="Confirm Code" color="#841584" onPress={this.confirmCode} />
      </View>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    return (
      <View style={{ flex: 1 }}>
        
        {!user && !confirmResult && this.renderPhoneNumberInput()}
        
        {this.renderMessage()}
        
        {!user && confirmResult && this.renderVerificationCodeInput()}
        
        {user && (
          <View
            style={{
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#77dd77',
              flex: 1,
            }}
          >
            <Image source={{ uri: successImageUri }} style={{ width: 100, height: 100, marginBottom: 25 }} />
            <Text style={{ fontSize: 25 }}>Signed In!</Text>
            <Text>{JSON.stringify(user)}</Text>
            <Button title="Sign Out" color="red" onPress={this.signOut} />
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      flex: 1,
      justifyContent: 'center',
      padding: 30,
    },
    row: {
      flexDirection: 'row',
      marginTop: 20,
    },
    icon:
    {
      width: 25,
      height: 25
    },
    title: {
      marginLeft: 5,
      color: primaryColorBrown,
    },
    inputField: {
      borderBottomWidth: 1,
      borderColor: primaryColorBrown,
      paddingVertical: Platform.OS === 'ios' ? 5 : 0,
    },
    textError:
    {
      color: primaryColorRed,
      marginTop: 15
    },
    button: {
      borderRadius: 10,
      height: 40,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
  
    }
  })