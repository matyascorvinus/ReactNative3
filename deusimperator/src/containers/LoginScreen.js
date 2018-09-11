import React, { Component } from 'react';
import {
  Text, TouchableOpacity,
  View, StyleSheet, Image, Dimensions, TextInput, Platform,
  KeyboardAvoidingView,ActivityIndicator,
} from 'react-native';
import firebase from 'react-native-firebase';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles';

class LoginScreen extends Component {
  state = {
    isSigningIn:false,
    isSigningUp:false,
  }

  onPushDatatoFirebase =(user)=>{firebase.database().ref('/users').child(user.uid).set({
    displayName:'',
    phoneNumber:'',
    address:''
  })}
onSignIn=()=>{
  this.setState({isSigningIn:true})
  const email =this.state.email;
  const password = this.state.password;
  firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email,password)
  .then(res =>{
    this.setState({isSigningIn:false})
    this.props.navigation.navigate('Photo')
  })
  .catch(err=>this.setState({error:err.toString(),password:'',isSigningIn:false}))
}

  onSignUp=()=>
  {
    this.setState({isSigningUp:true})
    const email =this.state.email;
    const password = this.state.password;
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password)
    .then(res =>{
      this.setState({isSigningUp:false})
      this.onPushDatatoFirebase(res.user._user)
      this.props.navigation.navigate('Photo')
    })
    .catch(err=>this.setState({error:err.toString(),password:'',isSigningUp:false}))
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled>
        <Image source={require('../Images/Wallpaper.jpg')}
          style={{ width: '100%', height: Dimensions.get('screen').width - 60 }}
          resizeMode='contain'
        />
        <View style={styles.row}>
          <Image style={styles.icon} source={require('../assets/ic_email.png')} />
          <Text style={styles.title}>Email</Text>
        </View>
        <TextInput style={styles.inputField} onChangeText={(email) => this.setState({ email })} value={this.state.email} underlineColorAndroid='rgba(0,0,0,0)' />

        <View style={styles.row}>
          <Image style={styles.icon} source={require('../assets/ic_password.png')} />
          <Text style={styles.title}>Password</Text>
        </View>
        <TextInput secureTextEntry={true} style={styles.inputField} onChangeText={(password) => this.setState({ password })} value={this.state.password} underlineColorAndroid='rgba(0,0,0,0)' />
        <Text style={styles.textError}>{this.state.error}</Text>
        <View style={[styles.row, { justifyContent: 'center' }]}>
          <TouchableOpacity style={[styles.button, { backgroundColor: primaryColorGreen }]} onPress={this.onSignIn}>
            <Text style={{ color: 'white' }}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: primaryColorRed }]} onPress={this.onSignUp}>
          {this.state.isSigningUp===true ? <ActivityIndicator size='small' color='white'/>: <Text style={{ color: 'white' }}>Sign Up</Text>  }
           
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    borderRadius: 30,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,

  }
})
export default LoginScreen;